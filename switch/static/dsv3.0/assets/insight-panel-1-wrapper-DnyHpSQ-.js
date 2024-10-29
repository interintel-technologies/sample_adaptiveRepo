import{i as p,h as d,bn as f,a as l,j as n}from"./index-C2PWchud.js";import{h as r}from"./lit-html-dRijB2IX.js";const u=p`
.profile-initial{
    color: #fff;
    width: 48px;
    height: 48px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    background-color: var(--primary);
}
.profile-initial > p{
    top: 24%;
    font-weight: bold;
    position: relative;
}
`;class o extends d{static get styles(){return[u]}static get is(){return"insight-panel-1"}static get properties(){return{gateway:{type:Object},profile:{type:Object}}}constructor(){super(),this.gateway={},this.profile=null}updated(i){i.has("gateway")&&(this.profile=this.gateway.profile,console.log("this profile ",this.profile))}getInitials(i,t){return!i||!t?"":`${i[0]}${t[0]}`}logout(i){i.preventDefault(),window.location="/logout/"}render(){if(this.profile){const{first_name:i,last_name:t,profile_photo:s,access_level:e}=this.profile;return console.log("first name is ",i),r`
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            ${s?r`
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="${s}" alt="Profile image">
                            </figure>
                            `:r`
                            <div class="profile-initial is-rounded">
                                <p>${this.getInitials(i,t)}</p>
                            </div>
                            `}
                        </div>
                        <div class="media-content" style="overflow-y: hidden;">
                            <p class="title is-size-5">Welcome ${i}</p>
                            <p class="subtitle is-size-7">
                                ${e==="admin"||e==="administrator"?"Checkout":r`<div style="cursor: pointer" @click=${a=>this.logout(a)}>Sign Out</div>`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `}}}customElements.define(o.is,o);const h=({element:c,gatewayData:i,rows:t,cols:s})=>{const e=l.useRef(null);return l.useEffect(()=>{e.current&&(e.current.rows=t||[],e.current.cols=s||[],e.current.gateway=(i==null?void 0:i._response)||{})},[i,t,s]),n.jsx("div",{children:n.jsx("insight-panel-1",{ref:e})})},m=f(h);export{m as default};
