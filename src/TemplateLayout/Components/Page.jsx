import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormRender from '../../FormRender';
import { Box, CircularProgress, Fab, Grid, Paper, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NotFoundTemplate from '../NotFoundTemplate';

const Page = ({ pageGroups, template }) => {
  const { groupName, pageName } = useParams();
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showGoToTop, setShowGoToTop] = useState(false); // State to manage "Go to Top" button visibility

  


  const currentGroup = pageGroups.find(group => 
    group._title.replace(/ /g, '-').toLowerCase() === groupName
  );

  const currentPage = currentGroup
    ? currentGroup._tabs.find(page => page._title.replace(/ /g, '-').toLowerCase() === pageName)
    : null;

    

  // If template is "service", render like before
  if (template === "service" || template === "payments") {
    if (!currentPage) {
      return <div>Page not found</div>;
    }



  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position to show "Go to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    const fetchMoreProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=5&page=${page}`
        );
        if (response.data.length === 0) {
          setHasMore(false); // Stop if no more data is available
        } else {
          setProducts((prevProducts) => [...prevProducts, ...response.data]);
          setPage(page + 1); // Increase page number for the next batch
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setHasMore(false); // Stop infinite scroll if there's an error
      }
      setLoading(false);
    };
  
    useEffect(() => {
      // Initial fetch when the component mounts
      fetchMoreProducts();
    }, []);
    
    return (
      <Box sx={{ m: 4 }}>
         <Grid container spacing={2}>
        {currentPage._feedList.map((feedItem, feedIndex) => {
          
          let gridProps;
          const gridString = feedItem._sectionSize || ""; 
          const grids = gridString.split('|'); 

          if(!window.NEWSECTIONSIZE){
            if (grids[0] === "24") {
              gridProps = { xs: 12, sm: 12 }; 
            } else if (grids[0] === "12") {
              gridProps = { xs: 12, sm: 6 }; 
            } else if (grids[0] === "8") {
              gridProps = { xs: 12, sm: 4 }; 
            } else if (grids[0] === "6") {
              gridProps = { xs: 12, sm: 3 }; 
            } else {
              // Handle relative position logic when window.RELATIVE_POSITION is true
              const row = parseInt(grids[0], 10) || 1; // Fallback to 1 if missing
              const column = parseInt(grids[1], 10) || 1; // Fallback to 1 if missing
              const span = parseInt(grids[2], 10) || 12; // Fallback to full width (12) if missing
    
              gridProps = {
                xs: 12,
                style: {
                  gridRow: row,
                  gridColumnStart: column,
                  gridColumnEnd: `span ${span}`, // Span defines how many columns this element occupies
                }
              };
            }
          }
          else{
            const small = parseInt(grids[0], 10);
const tablet = parseInt(grids[1], 10);
const desktop = parseInt(grids[2], 10);

gridProps = {
  xs: small === 24 ? 12 : small / 2, // Default xs size
  sm: tablet === 24 ? 12 : tablet / 2, // Default sm size
  md: desktop === 24 ? 12 : desktop / 2, // Default md size
};

// Adjust gridProps for small (mobile screens)
if (small === 24) {
  gridProps = { ...gridProps, xs: 12 }; // Full width
} else if (small === 12) {
  gridProps = { ...gridProps, xs: 6 }; // Half width
} else if (small === 8) {
  gridProps = { ...gridProps, xs: 4 }; // Third width
} else if (small === 6) {
  gridProps = { ...gridProps, xs: 3 }; // Quarter width
}

// Adjust gridProps for tablet (medium screens)
if (tablet === 24) {
  gridProps = { ...gridProps, sm: 12 }; // Full width
} else if (tablet === 12) {
  gridProps = { ...gridProps, sm: 6 }; // Half width
} else if (tablet === 8) {
  gridProps = { ...gridProps, sm: 4 }; // Third width
} else if (tablet === 6) {
  gridProps = { ...gridProps, sm: 3 }; // Quarter width
}

// Adjust gridProps for desktop (large screens)
if (desktop === 24) {
  gridProps = { ...gridProps, md: 12 }; // Full width
} else if (desktop === 12) {
  gridProps = { ...gridProps, md: 6 }; // Half width
} else if (desktop === 8) {
  gridProps = { ...gridProps, md: 4 }; // Third width
} else if (desktop === 6) {
  gridProps = { ...gridProps, md: 3 }; // Quarter width
}


          }
          

          return (
            <Grid item key={feedIndex} {...gridProps}>
         
          {feedItem._height === 0 || feedItem._height === "" ? (
              <InfiniteScroll
              dataLength={products.length}
              next={fetchMoreProducts}
              hasMore={hasMore}
              loader={
                loading ? (
                  <CircularProgress style={{ display: 'block', margin: '10px auto' }} />
                ) : null
              }
              endMessage={
                <Typography variant="body2" align="center">
                  No more products to display.
                </Typography>
              }
            >
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <div style={{ border: '1px solid #ccc', padding: '16px' }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        ${product.price}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </InfiniteScroll>
          ) : (
            <FormRender
              key={feedIndex}
              feed={feedItem}
              style={
                window.NEWSECTIONSIZE
                  ? { height: `${feedItem._height}px` }
                  : {}
              }
            />
          )}

          {/* <FormRender 
  key={feedIndex} 
  feed={feedItem} 
  style={window.NEWSECTIONSIZE ? { minHeight: `${feedItem._height}px` } : {}}
/> */}
          </Grid>
        )})}
        </Grid>

        {showGoToTop && (
          <Fab
            color="primary"
            size="small"
            onClick={scrollToTop}
            style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}

      </Box>
    );
  }

  // If template is "landing", map through the currentGroup and render each page
  if (template === "landing" ) {
    if (!currentGroup) {
      return <NotFoundTemplate/>;
    }

    return (
      <div className="main-content"  style={{margin:0}}>
        {currentGroup._tabs.map((page, pageIndex) => (
          <div style={{margin:0}} key={pageIndex}>
            
            {page._feedList.map((feedItem, feedIndex) => (
              <div id={page._title.toLowerCase()} >
               <FormRender  key={feedIndex} feed={feedItem} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <div>Invalid template type</div>;
};

export default Page;
