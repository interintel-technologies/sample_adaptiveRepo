import{i as c,h as d,r as m,g as p,k as i,a as l,j as a}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const h=c`
    img {
        object-fit: contain;
        margin-bottom: 16px;
    }
    .columns {
        margin: 0 !important;
    }
    .card-header {
        box-shadow:  none;
    } 
    .card-content {
        padding: 10px;
    }
    .column.is-flex {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: #fff;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
    }
    .column.is-flex:hover {
        transform: scale(1.05);
    }
    .card-header-title {
        margin: 0 !important;
    }
    ul  {
        margin: 0 !important;
    }
    li {
        border-right: 1px solid rgb(183, 181, 181);
    }
    li:last-child {
        border: none !important;
    }
    @media screen and (max-width: 430px) {
        li {
            border-right: none;
            border-bottom: 1px solid rgb(183, 181, 181);
        }
    }
`;class o extends d{static get styles(){return[m(p),h,c` 
                :host{
                    display: block;
                }
            `]}static get properties(){return{items:Array,filters:Object,columns:{type:Array},rows:{type:Array},e:{type:Object}}}constructor(){super(),this.items=[],this.filters={},this.columns=[],this.rows=[],this.e=null}updated(e){(e.has("columns")||e.has("rows")||e.has("e"))&&(this.filters=this.e.details.filters,this.items=[...this.rows.map(s=>Object.fromEntries(s.map((t,r)=>[this.cols[r].label,t])))])}formatPrice(e){return new Intl.NumberFormat("en-KE",{style:"currency",currency:"KES"}).format(e)}onSelectChangeHandler(e,s){this.updateParams(s,e)}static get is(){return"top-selling-items"}render(){return i`
            <div class="content">
                <div class="column content">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-header-title">${this.e.name}</h4>
                            <div class="card-header-icon" aria-label="more options">
                                <div class="filters">
                                    ${Object.entries(this.filters).map(([e,s])=>i`
                                            <div class="select">
                                                <select @change=${t=>this.onSelectChangeHandler(t.target.value,e)}>
                                                    ${s.map(t=>i`
                                                            <option>${t}</option>
                                                        `)}
                                                </select>
                                            </div>
                                        `)}
                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <ul class="columns">
                                ${this.items.map(e=>i`
                                        <li class="column">
                                            <div class="column is-flex" title="${e.name}">
                                                <img src="${e.image}" alt="${e.name}"/>
                                                <h5>${e.name}</h5>
                                                <p>${this.formatPrice(e.price)}</p>
                                                <h6>${e.quantity} Psc</h6>
                                            </div>
                                        </li>
                                    `)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define(o.is,o);const f=({data:n,cols:e,rows:s,element:t})=>{const r=l.useRef();return l.useEffect(()=>{r.current?(r.current.data=n,r.current.e=t,r.current.cols=e,r.current.rows=s):console.log("topSellingItemsRef.current is not set")},[n,e,s,t]),a.jsx(a.Fragment,{children:t?a.jsx("top-selling-items",{ref:r}):a.jsx("p",{children:"Loading data..."})})},v=u(f);export{v as default};
