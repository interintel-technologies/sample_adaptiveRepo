import{i as d,h as n,k as a,a as s,j as i}from"./index-C2PWchud.js";const o=d`
  .columns {
    margin: 0 !important;
  }
  iframe {
    height: 50vh !important;
    width: 100% !important;
  }
  .underline {
    height: 7px;
    width: 70px;
    border-radius: 2px;
    border-width: 0px;
    background-color: var(--link);
  }
`;class r extends n{static get styles(){return[o,d`
        :host {
          display: block;
        }
      `]}static get is(){return"youtube-embed-element"}render(){return a`
      <div class="column content">
        <div class="hero-body columns is-4 is-variable">
          <div class="column is-6">
            <iframe
              id="player"
              type="text/html"
              width="640"
              height="590"
              src="http://www.youtube.com/embed/${this.e.details.videoId}?enablejsapi=1&origin=http://example.com"
              frameborder="0"
            >
            </iframe>
          </div>
          <div class="column is-6">
            <h3>${this.e.name}</h3>
            <hr class="underline" />
            <p>${this.e.defaultValue}</p>
          </div>
        </div>
      </div>
    `}}customElements.define(r.is,r);const l=({element:e})=>{const t=s.useRef(null);return s.useEffect(()=>{t.current&&e&&(t.current.e=e)},[e]),i.jsx("div",{children:e?i.jsx("youtube-embed-element",{id:"youtube-embed-element",ref:t}):i.jsx("p",{children:"Loading data..."})})};export{l as default};
