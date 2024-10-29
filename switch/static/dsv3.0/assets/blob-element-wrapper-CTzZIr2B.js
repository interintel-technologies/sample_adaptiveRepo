import{i as n,h as a,r as d,g as c,k as p,a as l,j as i}from"./index-C2PWchud.js";const h=n`
.content{
    padding-top:2vh;
    padding-bottom:3vh;
    padding-right:1.5rem;
    font-family:'Montserrat';
}
.title-container{
text-align: center;
height: 100%;
align-items: center;
display: flex;
}

.circle{
border:1px solid rgba(159,141,130,.5);
height:105px;
width:105px;
display:flex;
justify-content:center;
border-radius:50%;
/* margin-right: auto;
margin-left: auto; */
z-index: 2;
/* top: -38px; */
position:relative;
background-color: var(--md-sys-color-surfaceContainerLowest);
box-shadow: 0px 1px 3px 1px rgba(159,141,130,.5);
/* box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3); */

}

.blob{
position: relative;
display:block;
text-align:left;
background-color: var(--md-sys-color-surfaceContainerLowest);
}

.blobDiv{
display:flex;
justify-content:center;
cursor:pointer;
align-items:center;
position: relative;
border-radius: 28px;
box-shadow: var(--mui-shadows-3);
background: var(--paper);
height: 170px;
margin-right: auto;
margin-left: auto;
width:90%;

}
.circleCol{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:2em;
}
.descCol{
display:flex;
justify-content:center;
font-weight:600 !important;
padding-left:2em;
}
.descCol h3{
    /* Services */

width: 192px;
height: 40px;
font-weight: 400;
font-size: 32px;
line-height: 40px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}
.descCol p{
    font-size:1em !important;
    font-weight:400 !important;
}
a{
    color:var(--grey-darker) !important;
    text-decoration:none;
}
a:hover{
    color: var(--link) !important;
}

@media(max-width:480px){
    .content h3{
        font-size:1.5em !important;
  
    }
}
p{
    text-decoration:none;
}
.blobDiv{
    width:100%;
}
`;class m extends a{static get properties(){return{details:{type:Object}}}constructor(){super(),this.details={}}static get styles(){return[d(c),h]}firstUpdated(e){super.firstUpdated(e),this.e&&(this.e.details=this.e.details)}render(){var e,s,o,r;return p`
      <div class="content">
        <a target="_blank" href="${this.details&&((e=this.details.link)==null?void 0:e.path)}" title="${this.details&&((s=this.details.link)==null?void 0:s.label)}">
          <div class="blobDiv columns">
            
            <div class="column is-6 descCol">
              <div class="blob">
                <h3>${this.details&&((o=this.details.link)==null?void 0:o.title)}</h3>
                <p>${this.details&&((r=this.details.link)==null?void 0:r.subtitle)}</p>
              </div>
            </div>
            <div class="column is-6 circleCol">
              <div class="circle">
                <img src="https://i.postimg.cc/k5ZLTHK9/fcf475bc-7cf6-411d-9276-c98bf7a22a83-removebg-preview.png">
              </div>
            </div>
          
            <!-- <div class="inward-semicircle"></div> -->
           
          </div>
        </a>
      </div>
    `}}customElements.get("blob-element")||customElements.define("blob-element",m);const g=({details:t})=>{const e=l.useRef(null);return l.useEffect(()=>{e.current&&t&&(e.current.details=t)},[t]),i.jsx("div",{children:t?i.jsx("blob-element",{id:"blob-element",ref:e}):i.jsx("p",{children:"Loading data..."})})};export{g as default};
