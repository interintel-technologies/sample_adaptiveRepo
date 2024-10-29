import{i as r,r as l,g as m,k as t,a as o,j as s}from"./index-C2PWchud.js";import{S as d}from"./section-pelement-CNE2fsyL.js";import{b as c}from"./nikobizz4-DYskRzIA.js";import{w as h}from"./datasource-mixin-DMQBE4lo.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const p=r`
  .section-body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;

  }
.inner-section {
  width: 95%;
  overflow: hidden;
}
    .main-heading2 {
      font-size: 35px !important;
      color: #000;
      font-weight: bold;
      margin-bottom: 30px;
      text-transform:uppercase;
      margin-bottom: 0.171em;
      }
      .content h2{
        margin-bottom: 0.1714em  !important;
      }
      .sub-heading2{
        margin-bottom: 30px;
        width:70%;
        font-size: 28px  !important;

    }

    .image {
        height:200px;
        object-fit:contain;
        margin:auto;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .button {
        width: fit-content;
    }
    #textCol{
        padding-left:9rem;
    }
    #imgCol{
      background-color: var(--primary--light-color);
      border-radius: 100px 50px;
      width: 25%;
    }

    @media (max-width: 768px) {
        .inner-section {
            width: 90%;
            margin:0px auto;
        }
      .main-heading2 {
        font-size: 36px !important;
        margin-bottom: 20px;
      }
      .sub-heading2{
        font-size: 28px !important;
        margin-bottom: 20px;
        width:100%
    }
    #textCol{
        padding-left:.5rem;
        margin-top:1rem;
    }
    #imgCol{
      width:90%;
    }
    }

    /* Adjust styles for .main-heading on screens with a maximum width of 480px (mobile) */
    @media (max-width: 480px) {
      .main-heading2 {
        font-size: 26px !important;
        margin-bottom: 10px;
      }
      .sub-heading2{
        font-size: 14px !important;
        margin-top: 20px !important;
        margin-bottom: 30px !important;
        width:100%;
        line-height: 24px;

    }
      .hero-body{
        width: 100%;
        margin:0px auto;
    }
    }


`;class a extends d{static get styles(){return[l(m),p]}getColumnsFlexDirection(){if(this.e)switch(this.e.details.imagePosition){case"top":return"column";case"right":return"row-reverse";case"bottom":return"column-reverse";case"left":return"row";default:return"row"}}static get is(){return"section-element"}render(){return t`
            <section class="section-body">
                <div class="inner-section columns m-0" style="flex-direction: ${this.getColumnsFlexDirection()}">
                    <div id="imgCol" class="column is-4-desktop is-12-mobile  px-4 is-flex">
                    ${this.e&&this.e.details.image?t`
                        <img class="image" src="${this.e&&this.e.details.image}"/>
                    `:t`
                        <img class="image" src="${c}"/>
                    `}
                        
                        
                    </div>
                    <div id="textCol" class="column is-8-desktop is-12-mobile content">
                        <h2 class="main-heading2 ${this.e&&this.e.details.imagePosition==="top"||this.e&&this.e.details.imagePosition==="bottom"?"has-text-centered":""}">${this.e&&this.e.name}</h2>
                        <p class="sub-heading2 ${this.e&&this.e.details.imagePosition==="top"||this.e&&this.e.details.imagePosition==="bottom"?"has-text-centered":""}">${this.e&&this.e.defaultValue}</p>
                       ${this.e&&this.e.details.points?t`
                        <ul class="ml-4" style="list-style: ${this.e.details.listStyle}">
                                ${this.e&&this.e.details.points.map(i=>t`
                                        <li>
                                            <h6>${i.title}</h6>
                                            <p>${i.description}</p>
                                        </li>
                                    `)}
                            </ul>
                       `:t`
                            <p>${this.e&&this.e.details.description}</p>
                       `}
                       
                        ${this.e&&this.e.details.link?t`
                                <a href="${this.e&&this.e.details.link.path}" class="button is-link px-6">${this.e&&this.e.details.link.label}</a>
                            `:""}
                    </div>
                </div>
            </section>
        `}}customElements.define(a.is,a);const g=({element:e})=>{const i=o.useRef(null);return o.useEffect(()=>{const n=i.current;n&&e&&(n.e=e)},[e]),s.jsx("div",{children:e?s.jsx("section-element",{id:"section-element",ref:i}):s.jsx("p",{children:"Loading data..."})})},y=h(g);export{y as default};
