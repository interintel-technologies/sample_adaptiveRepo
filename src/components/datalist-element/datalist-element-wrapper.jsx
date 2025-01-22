import React, { useEffect, useRef, useState } from 'react';
import { Alert, Card, CircularProgress, Button, Typography, Grid, Menu, MenuItem, Stack, styled, Box, Select, Chip, Modal, TextField, InputAdornment } from '@mui/material';
import { DataGrid, GridMoreVertIcon, GridToolbarContainer } from '@mui/x-data-grid';
import withDataSource from '../../core/mixins/datasource-mixin';
import withTemplate from '../../core/mixins/template-mixin';
import './datalist-element'
import jsPDF from 'jspdf';
import AutoTable from '../../core/libs/autotable/main';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);



const DataListElementWrapper = ({
  data,
  totalElements,
  limit,
  refresh,
  updateParams,
  deleteParamKeys,
  totalPages,
  loadData,
  isDscLoading,
  setLimit,
  page,
  setPage,
  cols,
  element,
  _dialog,
  columns,
  mergeParams,
  sectionSize,
  errorMessage
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // For dropdown
  const [anchorEl, setAnchorEl] = useState(null); // For menu anchor
  const [menuId, setMenuId] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedCol, setSelectedCol] = useState(null);
  const [dateFilter,setDateFilter] = useState(false)
  const [filter, setFilter] = useState({
    prop: "all",
    value: "all"
  });
  
const section_size = sectionSize?.split('|')[0]
const element_size = element.sectionSize


 const handleCalendar = (col) => {

  setSelectedCol(col); // Store the selected col
    setOpen(true); // Open the modal when the Chip is clicked
  };

  const dropdownRef = useRef(null);
  const dataListElementRef = useRef(null);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows


// Convert to DataGrid columns for MUI
const dataGridColumns = !isDscLoading && columns && columns.filter(col => col.type !== "href").map((col) => ({
  field: col.header,
  headerName: col.header,
  sortable: col.sortable,
  filterable: col.filter,
  type: col.type === 'datetime' && 'string',
  flex: 1,
  height:"100px",
  minWidth: 150,
  // Render header dropdown only if choices are provided
  renderHeader: col.choices || col.date ? () => {
    return (
      <>
        {col.choices && !col.date && (
          <>
          <select
            class="filter_dropdown"
            defaultValue=""
            onChange={(event) => {
              let filter_param ;
              // Use computed property name for the object key
              if(event.target.value == "all"){
                filter_param = {
                  [col.propertyPath]: ""
                };
              }
              else{
                filter_param = {
                  [col.propertyPath]: event.target.value
                };
              }
            
            
              mergeParams(filter_param);
                        }}
            
            displayEmpty
          >
            <option className='filter_dropdown_option' disabled value="">{col.header}</option>
            <option className='filter_dropdown_option' value="all">All</option>
            {col.choices.map((choice, index) => (
              <option value={choice} className='filter_dropdown_option' key={index}>
              {choice === true ? 'true' : choice === false ? 'false' : choice}

              </option>
            ))}
          </select>
          </>
        )}

        {col.date && col.choices && (
          <>
          {dateFilter ? 
            <Chip 
              variant="outlined" 
              label="Clear" 
              size="small" 
              color="error" 
              onClick={() => {
                        refresh();
                        setDateFilter(false);
                        }} /> : 
        <Chip col={col} label="Date Filter" size="small"   variant="outlined"
        onClick={()=>handleCalendar(col)} />}
        </>
        )}
      </>
    );
  } : undefined

}));

  let elementCount;
  

if (totalElements == undefined) {
  elementCount = 0;  // Set to 1 if no elements, for pagination
} else {
  elementCount = totalElements;  // Use the actual total elements
}

  
  const [paginationModel, setPaginationModel] = useState({
    pageSize: limit,
    page: page,
  });

  // Update the page and limit when the DataGrid's pagination model changes
  const handlePaginationModelChange = (newPaginationModel) => {
    
    const { page: newPage, pageSize: newLimit } = newPaginationModel;

    // Set the new page and limit
    setPage(newPage + 1); // Material-UI uses zero-based indexing, so add 1
    setLimit(newLimit);

    // Update the pagination model state
    setPaginationModel(newPaginationModel);

  };

  useEffect(() => {
    // Sync pagination model state with props if limit or page changes externally
    setPaginationModel({
      pageSize: limit,
      page: page - 1, // Sync with zero-based indexing
    });
  }, [limit, page]);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown open/close on button click
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };



  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Get columns of type "href"
  const hrefColumns = !isDscLoading && cols && cols.filter(col => col.type === "href");

  const handleMenuOpen = (event,params) => {
  
    setMenuId(params.row[columns[0].property])
    setAnchorEl(event.currentTarget); 
  };

  if (hrefColumns.length > 0) {
   
    dataGridColumns.push({
      field: 'Actions',
      headerName: 'Actions',
      sortable: false,
      renderCell: (params) => (
        <GridMoreVertIcon id={""+params.id} onClick={(e)=>handleMenuOpen(e,params)} />
      ),
      flex: 0.2, // Make Actions column narrower
      minWidth: 80, // Set a minimum width for better visibility
    });
  }

// Transform data to match the required rows
const rows = data.map((item, index) => {
  const row = { id: index }; // Ensure each row has a unique 'id' field

  // Iterate over each column and extract the corresponding field from the data
 columns && columns.forEach(col => {
    let value;

    // Check if the header exists in the item
    if (col.header in item) {
      value = item[col.header];
    } else {
      value = ""; // Default value if header is not found
    }

    // If value is an object, convert it to a string (this avoids complex objects)
    if (typeof value === 'object' && value !== null && !React.isValidElement(value)) {
      // Only attempt to join if the value is not a React element (i.e., the icon)
      value = Object.values(value).join(', ');
    }

    // Assign the processed value to the row
    row[col.header] = value;
  });

  return row;
});


  const handleExport  = (type)=> {
      if (dataListElementRef.current) {
        if(type=="PDF"){
          generatePDF() // Call the LitElement method
        }
        else{
          generateCSV()
        }
      }
    
  }

  const _processExportFileNameTemplate = (tpl)=> {
    const re = /\[([^\]]+)?]/g; let match;

    const matches = tpl.match(re);
    for (let i = 0; i < matches.length; i++) {
      match = matches[i];
      tpl = tpl.replace(match, this._processTemplateLiteral(match));
    }
    return tpl;
  }

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableRows = []; // Define a new array to store the table rows
    
    // Process each row of data
   rows &&  rows.forEach(function(row) {
      const rowArray = [];
      for (let i = 0; i < columns.length; i++) {
        const columnKey = columns[i]['header']; // Ensure 'header' field is used correctly
        if (columns[i]['type'] !== 'href') {
          rowArray.push(row[columnKey]); // Push row data into rowArray for non-href columns
        }
      }
      tableRows.push(rowArray); // Push processed row data into tableRows
    });
  
    // Initialize AutoTable for PDF generation
    const table = new AutoTable(doc);
    table.autoTable(
      columns.filter(col => col['type'] !== 'href').map(col => col['header']), // Filter and map columns for headers
      tableRows, // Use the processed table rows
      {
        theme: 'grid', // Choose theme: 'striped', 'grid', or 'plain'
        styles: {
          overflow: 'linebreak', // visible, hidden, ellipsize or linebreak
        },
        columnStyles: {text: {columnWidth: 'auto'}},
        margin: {top: 10, horizontal: 7},
      }
    );
  
    // Check if export details are provided in element object, fallback to default filename
    const fileName = element.details?.export?.pdf?.filename 
      ? _processExportFileNameTemplate(element.details.export.pdf.filename) 
      : `${element.defaultValue}.pdf`;
  
    // Save the PDF document
    doc.save(fileName);
  };

  const generateCSV = ()=> {
    const SEPARATOR = ',';

    let csvContent = 'data:text/csv;charset=utf-8,';
    const headers = columns.filter(col=>col['type']!='href').map(function(i) {
      return i['label'];
    });
    const row = headers.join(SEPARATOR);
    csvContent += row + '\r\n'; // add carriage return

  rows &&  rows.forEach(function(row) {
      const rowArray = [];

      for (let i = 0; i < columns.length; i++) {
        const colType = columns[i]['type'];
        const columnKey = columns[i]['header'];
        // todo convert types to constants
        if (colType!=='href') {
          const columnValue = row[columnKey];
          // we have to check typeof because number is of type string from switch
          // TODO switch should have a type number
          if (colType==='string' && typeof columnValue === 'string') {
            rowArray.push(columnValue.replace(/[#,]/g, ' '));
          } else {
            rowArray.push(columnValue);
          }
        }
      }
      row = rowArray.join(SEPARATOR);
      csvContent += row + '\r\n'; // add carriage return
    });


    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);

    if ('export' in element.details) { // TODO verify properties existence
      link.setAttribute('download', this._processExportFileNameTemplate(element.details['export']['csv']['filename']));
    } else {
      link.setAttribute('download', element.defaultValue + '.csv');
    }

    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named this.e.defaultValue".csv".
  }
  
  const containsPartialMatch=(mainString, searchString, minMatchLength)=> {
    // Replace underscores with spaces in both strings
    const modifiedMainString = mainString.replace(/_/g, ' ').toLowerCase();
    const modifiedSearchString = searchString.replace(/_/g, ' ').toLowerCase();
  
    // Iterate over the main string and search string, checking for matches
    for (let i = 0; i <= modifiedMainString.length - minMatchLength; i++) {
      const mainSubstring = modifiedMainString.substring(i, i + minMatchLength);
      
      for (let j = 0; j <= modifiedSearchString.length - minMatchLength; j++) {
        const searchSubstring = modifiedSearchString.substring(j, j + minMatchLength);
     
        // Check if the current substrings match
        if (mainSubstring === searchSubstring) {
          return true; // A match is found
        }
      }
    }
  
    return false; // No match found
  }


  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    
    loadData();
  }, [page, limit]);

  useEffect(() => {
    if (dataListElementRef.current) {
      const datalistElement = dataListElementRef.current;

      // Pass rows and columns to the datalist-element
      datalistElement.columns = columns;
      datalistElement.rows = rows;
      datalistElement.data = data
      datalistElement.limit = limit
      datalistElement.totalElements = elementCount;
      datalistElement.page = 1;
      datalistElement.refresh = refresh;
      datalistElement.updateParams = updateParams;
      datalistElement.deleteParamKeys = deleteParamKeys
      datalistElement.totalPages = totalPages
      datalistElement.message = "There is no data to preview at this time"
      datalistElement.loadData = loadData
      datalistElement.isDscLoading = isDscLoading
      datalistElement.setLimitFunc = setLimit
      datalistElement.e = element
      datalistElement.selectedRows = selectedRows;

    }

   
  }, [columns, rows,data,selectedRows]);
  
  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection); // Update the selected rows
  };
  
  
const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .no-rows-primary': {
    fill: '#3D4751',
    ...theme.applyStyles('light', {
      fill: '#AEB8C2',
    }),
  },
  '& .no-rows-secondary': {
    fill: '#1D2126',
    ...theme.applyStyles('light', {
      fill: '#E8EAED',
    }),
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={96}
        viewBox="0 0 452 257"
        aria-hidden
        focusable="false"
      >
        <path
          className="no-rows-primary"
          d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
        />
        <path
          className="no-rows-secondary"
          d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
        />
      </svg>
      <Box sx={{ mt: 2 }}>There is no data to preview at this time</Box>
    </StyledGridOverlay>
  );
}

const handleRequest = () => {
  if (fromDate && toDate) {
    const formattedfromDate = dayjs(fromDate).format("YYYY-MM-DD");
    const formattedtoDate = dayjs(toDate).format("YYYY-MM-DD");

    let filter_param = {
      [selectedCol.propertyPath]: `${formattedfromDate},${formattedtoDate}`
    };

      mergeParams(filter_param);
      setDateFilter(true);
    setOpen(false); // Close the modal after sending the request
  } else {
    alert("Please fill in both dates.");
  }
};




  return (
    <>
     {errorMessage && (
      <div style={{ color: 'red', margin: '10px 0' }}>
        <strong>Error:</strong> {errorMessage}
      </div>
    )}

      {isDscLoading ? (
       <div className="has-text-centered"> <CircularProgress size="30px" /></div>
      ) : (
        <>
        {element.details &&  element.details.type != "table" ?  
      <Card className="datalist-card" variant="outlined" style={{ borderRadius: 'var(--CornerSmall)', max: '100%' }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item  xs={12} sm={6} style={{ display: "flex",alignItems: "center"}}>
        <Typography
          variant="h7"
          className="mb-0"
          sx={{ color: "#8E8E93", display: "flex", textTransform: 'capitalize !important' }} // Added textTransform for capitalization
        >
          {element.name}
        </Typography>

        </Grid>
       
        <Grid item xs={12} sm={6}>
        
        <div class="columns is-multiline is-mobile" style={{overflow:"visible"}}>
        <div className={`column is-full-mobile ${section_size === '24' || element_size === '24'  ? 'is-three-quarter-tablet' : 'is-full-tablet'}`}>        <div className="search-container">
<Grid container spacing={2} justifyContent="flex-end" alignItems="center">
<Grid item  xs={4} sm={4}>
<select
  value={filter.value}
  onChange={(event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
      setFilter({
        prop: selectedOption.getAttribute('data-prop'),
        value: event.target.value
      });
    
 
  }}
  className="datalist-filter"
>
  <option data-prop="all" value="all" >All</option>
  {columns && columns
    .filter(col => col.filter === true)
    .map((col, index) => (
      <option key={index} data-prop={col.propertyPath} value={col.header}>
        {col.header}
      </option>
    ))}
</select>


</Grid>
<Grid item  xs={8} sm={8}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        className="datalist-search"
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            if(event.target.value == ""){
              alert("fill filter field first")
              return
            }
            let filter_param
            
            if(filter.prop == "all"){
              
              if (localStorage.getItem('stepParams') || sessionStorage.getItem('stepParams') ) {
                // Remove stepParams from localStorage
                localStorage.removeItem('stepParams');
                sessionStorage.removeItem('stepParams');
            
              }

              filter_param = {
                q: event.target.value,
              };
            }
            else{
              filter_param = {
                [filter.prop]:  event.target.value,
              };
            }       
            mergeParams(filter_param);
          }
        }}
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end">
        //       <SearchIcon
        //         onClick={() => {
        //           let filter_param = {
        //             q: document.querySelector('.datalist-search input').value,
        //             filter: filter
        //           };
        //           mergeParams(filter_param);
        //         }}
        //       />
        //     </InputAdornment>
        //   ),
        // }}
      />
      </Grid>
      </Grid>
    </div>
  </div>
  <div class="column is-full-mobile" style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px',overflow: "visible" }}>
 
  <div
      className={`dropdown ${isDropdownOpen ? 'is-active' : ''}`}
      style={{ width: "auto" }}
      ref={dropdownRef}
    >
      <div className="dropdown-trigger" style={{ width: "100%" }}>
        <button
          disabled={rows && !rows.length}
          style={{
            background: "none",
            color: "var(--primary-text)",
            borderRadius: "var(--CornerSmall)",
            display: "flex",
            justifyContent: "space-around",
            cursor:"pointer"
          }}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={(event) => {
            event.preventDefault(); // Prevent page reload
            toggleDropdown();
          }}
        >
          <adaptive-ui-icon style={{ marginRight: "10%" }} dataColor="var(--primary-text)" icon="icons:MdCloudDownload"></adaptive-ui-icon>
          Export
        </button>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div style={{ cursor: "pointer" }} onClick={() => { handleExport("PDF"); setDropdownOpen(false); }} className="dropdown-item">PDF</div>
            <div style={{ cursor: "pointer" }} onClick={() => { handleExport("CSV"); setDropdownOpen(false); }} className="dropdown-item">CSV</div>
          </div>
        </div>
      )}
    </div>
  

  <Button 
    onClick={() => {
      refresh()}} 
    variant="contained" 
    style={{ borderRadius: "var(--CornerSmall)" }}
  >
    <adaptive-ui-icon dataColor="#fff" icon={'icons:MdOutlineRefresh'}></adaptive-ui-icon>
  </Button>
</div>



</div>


</Grid>

      </Grid>

      {/* Menu for href columns */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        menuId={menuId}
      >
    
        {hrefColumns.map((col,index) => (
  
          <MenuItem id={col.value} key={col.value} onClick={() => {
            // Find the row that matches the selected column ID
        
          const selectedMenuItem = data.filter(dat=>dat[columns[0].property]===menuId);
          const links=selectedMenuItem[0].links;

        links && links.forEach((link,index)=>{
              const item_title = link.title;
              const item_service = link.service;            
              if(containsPartialMatch(item_title,col.value,5)){
                const item_param =link.params;
                _dialog(item_service,item_param)
              }
          })
          
            setAnchorEl(null);

          }}>
            {col.label}
          </MenuItem>
        ))}

      </Menu>

      <DataGrid
       slots={{
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      rows={rows}
      columns={dataGridColumns}
      paginationMode="server"
      pageSizeOptions={[5, 10, 25, 50]}
      rowCount={elementCount}
      page={paginationModel.page} 
      pageSize={paginationModel.pageSize}
      paginationModel={paginationModel}
      onPaginationModelChange={handlePaginationModelChange}
      autoHeight
      disableSelectionOnClick
      loading={isDscLoading}
      onSelectionModelChange={handleSelectionChange}
      initialState={{
      pagination: {
        paginationModel: {
          pageSize: limit, // Use the current limit for initial page size
        },
},
}}
checkboxSelection={element.details?.selectable} // Enable checkbox selection based on condition
/>



{element ? <datalist-element ref={dataListElementRef}></datalist-element> : <></>}


    </Card>
    
    :
    <>
{element ? <datalist-element ref={dataListElementRef}></datalist-element> : <></>}

    </>
      }
        </>
      )}

<Modal
        open={open}
        onClose={() => setOpen(false)} // Close modal on outside click
        aria-labelledby="date-filter-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  {/* From Date Picker */}
  <DatePicker
    label="From Date"
    format="DD-MM-YYYY"
    value={fromDate}
    minDate={selectedCol && dayjs(selectedCol.choices[0])}
    maxDate={selectedCol && dayjs(selectedCol.choices[1])}
    onChange={(newDate) => {
      
      if (newDate) {
        setFromDate(newDate);  // Update state
      }
    }}
    renderInput={(params) => <TextField {...params} />}
  />

  {/* To Date Picker */}
  <DatePicker
    label="To Date"
    format="DD-MM-YYYY"
    value={toDate}
    minDate={fromDate ? dayjs(fromDate) : (selectedCol && dayjs(selectedCol.choices[0]))}
    maxDate={selectedCol && dayjs(selectedCol.choices[1])}
    onChange={(newDate) => {
      if (newDate && (fromDate || dayjs(newDate).isSameOrAfter(dayjs(fromDate)))) {
        setToDate(newDate);  // Update state
      } else {
        alert('To Date must be the same or after From Date');
      }
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>



          <Button variant="contained" onClick={handleRequest}>
            Apply Filter
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default withDataSource(withTemplate(DataListElementWrapper));
