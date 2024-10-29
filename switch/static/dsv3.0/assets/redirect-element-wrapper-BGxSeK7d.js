import{i as s,r as l,g as d,k as c,a,j as r}from"./index-C2PWchud.js";import{B as m}from"./base-element-5lxvCIHt.js";import{w as p}from"./datasource-mixin-DMQBE4lo.js";const h=s`
.text-container{
    padding:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.info-block{
    text-align:center;
}
.space-bottom {
    margin-bottom:16px;
}
.login {
    color:var(--info)!important;
    text-decoration:underline!important;
    transition: 1.0s;
}
.register {
    
    color:var(--link)!important;
    text-decoration:underline!important;
    transition: 1.0s;

}

.login:hover{
    text-decoration:none!important;
    color:var(--link)!important;


}
.register:hover{
    text-decoration:none!important;
    color:var(--info)!important;


}

.card{
    width: 30%;
    padding: 40px;
    background: #fff;
    border-radius: 10px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.image-block{
    width: 30%;
}

.or-block{
    width:22%;
}
hr{
    margin: 1.8rem 0!important;
}

hr.solid{
    border-top: 1px dashed #000!important;
}
.or-block p {
    text-align:center;
}

@media screen and (max-width: 1349px){

    .card{

        width: 50%;

    }
    
    
}

  @media screen and (max-width: 853px){
    .card{

        width: 70%;

    }
    
}

@media screen and (max-width: 640px){
    .card{

        width: 75%;

    }
    
}

@media screen and (max-width: 591px){
    .card{

        width: 100%;

    }
    
}

`;class o extends ThemeMixin(m){static get styles(){return[l(d),h,s`
            :host {
                display: block;
            }
            `]}static get is(){return"redirect-element"}getText(e){if(e!=null||e!=null){let[i,n]=e.split("|");return i}else return""}getLink(e){if(e!=null||e!=null){let[i,n]=e.split("|");return n}else return""}getImage(){let e=this.e.details.logo;return e!=null||(e="https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png"),e}render(){return c`
        <div class="content">
            <div class="text-container">
                <div class="card">

                        <div class="image-block">
                            <img src="${this.getImage()}" alt="gateway-logo" />
                        </div>
                        <div class="info-block space-bottom content">

                            <p >${this.e.name}</p>
                        
                        </div>
                        <div class="title-block space-bottom">
                            <h2 class="title"><a class="login" href="${this.getLink(this.e.defaultValue)}">${this.getText(this.e.defaultValue)}</a></h2>
                        </div>
                        <div class="or-block">
                            <hr class="solid">
                                <p>or</p>
                            <hr class="solid">
                        </div>

                        <div class="title-block2">
                            <h2 class="title"><a class="register" href="${this.getLink(this.e.kind)}">${this.getText(this.e.kind)}</a></h2>
                        </div>
                </div>
            </div>
        </div>
        `}}customElements.define(o.is,o);const g=({element:t})=>{const e=a.useRef(null);return a.useEffect(()=>{const i=e.current;i&&t&&(i.e=t)},[t]),r.jsx("div",{children:t?r.jsx("redirect-element",{id:"redirect-element",ref:e}):r.jsx("p",{children:"Loading data..."})})},v=p(g);export{v as default};
