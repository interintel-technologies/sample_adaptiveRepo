import{i as c,h as p,r as d,g as m,k as r,a as l,j as n}from"./index-C2PWchud.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";const f=c`
    .card {
        margin:16px;
        padding:16px;
        border-radius:3px;
    }
    .title {
        color: var(--primary);
    }
    ul {
        padding-left:5px;
        margin-top:10px;
    }
    li {
        margin-bottom:10px;
    }
`;class o extends p{static get styles(){return[d(m),f,c`
				:host {
					display: block;
				}
			`]}static get properties(){return{rows:{type:Array},e:{type:Object}}}constructor(){super(),this.searchText="",this.rows=[],this.e=null}static get is(){return"list-element"}updated(e){e.has("e")||e.has("rows")}identifyIconToDisplay(e){let t,s;return e==="increase"?(t="arrow-upward",s="green"):e==="decrease"&&(t="arrow-downward",s="red"),{icon:t,fill:s}}render(){return r`
			<div class="content">
				<div class="card">
					<h4 >${this.e.name}</h4>
					<ul>
						${this.rows.map(e=>r`
								<li class="is-flex">
									${e[3]!==""?r`
											<span class="icon">
												<adaptive-ui-icon icon="${this.identifyIconToDisplay(e[3]).icon}" style="fill:${this.identifyIconToDisplay(e[3]).fill}; margin-right:10px;"></adaptive-ui-icon>
											</span>
										`:r`
										<span style="margin-right:34px;"></span>
										`}
									<h6>${e[0]}:&emsp;</h6>
									<h6>${e[1]}</h6>
								</li>
							`)}
					</ul>
				</div>
			</div> 
		`}}customElements.define(o.is,o);const h=a=>{const{element:e,rows:t,paramsCallback:s}=a,i=l.useRef(null);return l.useEffect(()=>{i.current&&e&&(i.current.e=e,i.current.rows=t)},[e,t,a,s]),n.jsx("div",{children:e?n.jsx("list-element",{id:"list-element",ref:i}):n.jsx("p",{children:"Loading data..."})})},g=u(h);export{g as default};
