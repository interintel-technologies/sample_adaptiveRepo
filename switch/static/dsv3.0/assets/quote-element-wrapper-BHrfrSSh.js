import{i as n,r as l,g as d,k as o,a,j as i}from"./index-C2PWchud.js";import{S as c}from"./section-pelement-dsc-IEIjnxOK.js";import{w as u}from"./datasource-mixin-DMQBE4lo.js";import"./base-element-5lxvCIHt.js";import"./utils-mixins-2-CV_UYnIr.js";const p=n`
  .quotes-section {
    background-color: var(--card-background-color);
  }
  .quotes-section h2 {
    width: 50%;
    margin: 0 auto;
  }
  .wrap {
    width: 100%;
    overflow: hidden;
  }
  .quotes-container {
    display: flex;
    height: 250px;
    width: 100%;
    max-width: 1020px;
    flex: 0 0 auto;
    position: relative;
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
  }
  .quotes {
    display: inline-block;
    height: 100%;
    width: 100%;
    max-width: 1020px;
    position: relative;
    width: 100%;
    text-align: center;
    flex-direction: column;
  }

  .dots {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    display: block;
    z-index: 3333;
    height: 12px;
  }

  .dots .dot {
    list-style-type: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .dots .dot.active,
  .dots .dot:hover {
    background: var(--primary);
    border-color: var(--primary);
  }

  .dots .dot.active {
    -webkit-animation: testim-scale 0.5s ease-in-out forwards;
    -moz-animation: testim-scale 0.5s ease-in-out forwards;
    -ms-animation: testim-scale 0.5s ease-in-out forwards;
    -o-animation: testim-scale 0.5s ease-in-out forwards;
    animation: testim-scale 0.5s ease-in-out forwards;
  }
  .arrow {
    display: block;
    position: absolute;
    color: var(--primary);
    cursor: pointer;
    font-size: 2em;
    top: 30%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 5px;
    z-index: 22222222;
  }

  .arrow:before {
    cursor: pointer;
  }

  .arrow.left {
    left: 221px;
  }

  .arrow.right {
    right: 270px;
  }
  @media screen and (max-width: 768px) {
    .quotes-container {
      height: auto;
    }
    .arrow.right {
      right: 69px;
      top: 357px;
    }
    .arrow.left {
      left: 45px;
      top: 361px;
    }
  }
`;class r extends c{static get styles(){return[l(d),p,n`
        :host {
          display: block;
        }
      `]}firstUpdated(){const t=this.shadowRoot.querySelector(".columns");let e=0;setInterval(()=>{e=(e+1)%t.children.length,t.style.transform=`translateX(-${e*75}%)`},3e3)}static get is(){return"quote-element"}render(){return o`
      <section class="section quotes-section">
        <div class="container quote-wrapper">
          <h2 class="title is-2 has-text-centered mb-6">${this.e.name}</h2>
          <span id="right-arrow" class="icon arrow left">
            <i class="fa-solid fa-quote-left"></i>
          </span>
          <span id="left-arrow icon" class="icon arrow right">
            <i class="fa-solid fa-quote-right"></i>
          </span>
          <div class="wrap">
            <div class="columns is-mobile">
              ${this.e.details.quotes.map(t=>o`
                  <!-- <ul id="testim-dots" class="dots">
                <li class="dot active"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
              </ul> -->
                  <div class="column is-half is-offset-one-quarter">
                    <div class="quotes-container">
                      <div class="quotes">
                        <p class="quote mb-5">${t.quote}</p>
                        <p class="author has-text-weight-bold">
                          - ${t.author}
                        </p>
                        <p class="author-title is-size-7">
                          ${t.authorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </section>
    `}}customElements.define(r.is,r);const m=({element:s})=>{const t=a.useRef(null);return a.useEffect(()=>{const e=t.current;e&&s&&(e.e=s)},[s]),i.jsx("div",{children:s?i.jsx("quote-element",{id:"quote-element",ref:t}):i.jsx("p",{children:"Loading data..."})})},g=u(m);export{g as default};
