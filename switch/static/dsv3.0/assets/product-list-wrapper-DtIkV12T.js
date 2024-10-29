import{i as s,h as l,r as n,g as d,k as a,a as i,j as o}from"./index-C2PWchud.js";import{w as c}from"./datasource-mixin-DMQBE4lo.js";const h=s`
.content{
    font-family:var(--family-sans-serif);
    background-color:var(--md-sys-color-surfaceBright);
    border-radius: var(--CornerLarge) !important;
    padding:.75rem;
}

.content table td{
    border:none;
}
.container{
    padding:.75rem;
}


.scroll-container {
    max-height: 120px; /* Adjust the height as needed */
    overflow-y: auto;
    scrollbar-color: var(--primary);
}

table {
    width: 100%;
    border-collapse: collapse;
}
thead th,tr th {
    width: 33%; /* Adjust the percentage based on the number of columns */
}

tbody td {
    width: 33%; /* Adjust the percentage based on the number of columns */
}
thead th{
    font-weight:400;
    font-size:14px;
}

tbody tr td:last-child{
    text-align:right;
}
tbody tr td:nth-child(2){
    text-align:right;
}
.empty-message {
    text-align: center;
}

#total{
    font-weight: 400;
    text-align:right;
}
#totalVal{
    text-align:right;
    color:var(--primary);
}
#subTotalHdr{
    text-align:right;
}
#quantityHdr{
    text-align:right;
}

//scrollbar
/* WebKit browsers: Chrome, Safari, Edge */
::-webkit-scrollbar {
  width: 12px;  /* Width of the scrollbar */
  height: 12px; /* Height of the horizontal scrollbar */
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--primary) !important;  /* Color of the scroll thumb */
  border-radius: 6px;  /* Roundness of the scroll thumb */
}

.scroll-container::-webkit-scrollbar-track {
  background: var(--primary) !important;  /* Background of the scrollbar track */
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary) !important;  /* Hover effect for the scroll thumb */
}

/* Firefox */
.scroll-container {
  scrollbar-width: thin;  /* Set width to thin or auto */
  scrollbar-color: var(--primary) !important;  /* Thumb color, Track color */

}

/* Internet Explorer and Edge (older versions, IE 10+) */
body {
  -ms-overflow-style: -ms-autohiding-scrollbar; /* Auto-hiding scrollbar for IE */
}





#btnDiv{
    display: flex;
    justify-content: flex-end;
}
.addBtn{
    background-color:var(--md-sys-color-secondaryContainer);
    box-shadow:var(--mui-shadows-3);
    height:56px;
    border-radius:var(--CornerExtra-large);
    align-items:center;
    display:flex;
    text-align:center;
    justify-content:center;
    font-weight:500;
    font-size:14px;
    line-height:20px;
    letter-spacing:.1px;
    color:var(--primary);
    width:50%;
}
.addBtn:hover{
    cursor:pointer;
    transform:scale(1.01);
}

@media(max-width:768px){
    .addBtn{
        width:75%;
    }
}


`;class u extends l{static get styles(){return[n(d),h]}static get properties(){return{data:{type:Array}}}constructor(){super(),this.items=[]}updated(t){t.has("data")&&(Array.isArray(this.data)?console.log("data is ",this.data):console.error("data is not an array:",this.data))}get total(){return this.data.reduce((t,r)=>t+(r.Price*r.Qty||0),0)}onBtnClickHandler(t){console.log("service dispatched",t),this.dispatchEvent(new CustomEvent("service-call",{detail:{service:t},bubbles:!0,composed:!0}))}static get is(){return"product-list"}render(){return a`
        <div class="container">
            <p class="mb-2 ml-1">${this.element.name}</p>
            <div class="content px-3">
                <strong>${this.element._0}</strong>
                ${this.data.length===0?a`
                    <div class="empty-message">There are no products.</div>
                `:a`
                  
                    <div>
                    
                        <table>
                            <!-- Define table headers -->
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th id="quantityHdr">Qty</th>
                                    <th id="subTotalHdr">Subtotal</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="scroll-container py-2">
                            <table>
                                <!-- Define table body -->
                                <tbody class="py-2">
                                ${this.data.map(t=>a`
                                        <tr>
                                            <td>${t.Item}</td>
                                            <td>${t.Qty}</td>
                                            <td>${t.Price*t.Qty}</td>
                                        </tr>
                                    `)}
                                   
                                </tbody>
                            </table>
                        </div>
                        <table>
                        <tr class="pt-2">
                        <th></th>
                        <th id="total">Total</th>
                        <th id="totalVal">${this.total}</th>
                        </tr>
                        </table>
                        <div class="pt-5" id="btnDiv">
                            <div class="btn addBtn px-2" @click=${()=>this.onBtnClickHandler(this.element.details.service)}>
                                <adaptive-ui-icon dataColor="var(--primary)" class="mr-3" icon="add"></adaptive-ui-icon>
                                Add Product  to List
                            </div>
                        </div>
                    </div>
                `}
            </div>
        </div>
           
        `}}customElements.define("product-list",u);const p=({data:e,element:t})=>{const r=i.useRef();return i.useEffect(()=>{r.current&&e&&(r.current.data=e,r.current.element=t)},[e]),o.jsx(o.Fragment,{children:e?o.jsx("product-list",{ref:r}):o.jsx("p",{children:"Loading data..."})})},g=c(p);export{g as default};
