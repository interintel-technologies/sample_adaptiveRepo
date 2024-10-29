import{i as o,r,g as d,k as c,a as n,j as e}from"./index-C2PWchud.js";import{S as l}from"./section-pelement-CNE2fsyL.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const p=o`
.quick-links-container {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between; 
}
.quick-cards {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 calc(45% - 10px); 
    margin-bottom: 20px;
    background-color: #fff;
}
.card-title, .card-title + p{
    text-align: center;
}

.card-icon{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    background-color: #F4A14F;
}

.card-icon i, .card-icon adaptive-ui-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 60px;
    color: #fff;
}
`;class a extends l{static get styles(){return[r(d),p]}static get is(){return"quick-links"}render(){return c`
            <div class="content">
                <h3>${this.e.name}</h3>
                <div class="quick-links-container columns is-flex px-3">
                    ${this.pageGroup.pages.map((t,s)=>c`
                            <div class="column">
                                <a href="${window.location.pathname+window.location.search}#/${this.pageGroupIndex}/${s}/">
                                    <div class="card column quick-cards">
                                        <div class="icon card-icon">
                                            <adaptive-ui-icon icon=${t.icon||"icons:info"}></adaptive-ui-icon>
                                        </div>
                                        <div class="media-content mt-3">
                                            <h4 class="card-title has-text-centered">${t.title}</h4>
                                            <!-- <p>Deposit money into your account and use for various purposes</p> -->
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `)}
                </div>
            </div>
        `}}customElements.define(a.is,a);const f=({element:i})=>{const t=n.useRef(null);return n.useEffect(()=>{const s=t.current;s&&i&&(s.e=i)},[i]),e.jsx("div",{children:i?e.jsx("quick-links",{id:"quick-links",ref:t}):e.jsx("p",{children:"Loading data..."})})},g=u(f);export{g as default};
