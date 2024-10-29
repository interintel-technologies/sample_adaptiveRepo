import{i as a,r as n,g as o,k as l,a as s,j as t}from"./index-C2PWchud.js";import{B as d}from"./base-element-5lxvCIHt.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const c=a`
.btn{
    margin: 20px 0;
    background: #f49e37;
    width: 200px;
    color: #fff;
}
.mipay-overview{
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #fff;
}

`;class r extends d{static get is(){return"overview-element"}static get styles(){return[n(o),c,a`
            :host {
              display: block;
            }
          `]}render(){return l`

        <div class="container mipay-overview">
            <div class="columns">
                <div class="column">this is the left side</div>
                <div class="column">
                    <div class="heading">
                        <h1 class="title">this is the title area</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>
                    <a href="$1" class="button is-link px-6">Get started</a>
                </div>
            </div>
        </div>
        `}}customElements.define(r.is,r);const m=({element:e})=>{const i=s.useRef(null);return s.useEffect(()=>{i.current&&e&&i.current.e!==e&&(i.current.e=e)},[e]),t.jsx(t.Fragment,{children:e?t.jsx("overview-element",{id:"overview-element",ref:i}):t.jsx("p",{children:"Loading data..."})})};export{m as default};
