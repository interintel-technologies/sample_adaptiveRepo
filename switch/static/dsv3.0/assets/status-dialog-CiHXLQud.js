import{i as r,h as o,k as e}from"./index-C2PWchud.js";const n=r`

.hdr{
    text-transform:capitalize;
    /* padding:4em 15% .5em 15%; */
    vertical-align:middle;
}
.title{
    margin-top:.5em;
}


.in-progress{
    color:rgb(183, 181, 181) !important;
}
.in-progressBg{
    background-color:rgb(183, 181, 181)!important;
}
.progressIcon{
    justify-content:center;
}

.progressIcon img{
    width:100px;
    height:100px;
}
.return-btn{
    color:var(--link--color-invert) !important;
    text-transform:capitalize;
    font-family:var(--family-sans-serif);
    margin-top:3.5em;
    border-radius:10px 10px 10px 10px;
}
.modal-content{
    width:30rem !important;
    border-radius:24px;
    max-height: calc(-30px + 50vh);
    margin-left:auto;
    margin-right:auto;
    background-color: var(--md-sys-color-surfaceContainerLowest);
}

.modal-card-head{
    justify-content:flex-end !important;
}

.head{
    display:flex;
    justify-content:flex-end;
}

.head .icon{
    cursor:pointer;
}

.statusBtn{
    width:100%;
    margin-top:-40px;
    border-radius:45px;
    font-weight:800;
    font-size:1.2rem;
    margin-top:.5em;
}

.in-progress{
    color:rgb(183, 181, 181) !important;
}

.in-progressBg{
    background-color:rgb(183, 181, 181)!important;
    color:var(--app-primary-color);
}

@media(max-width:768px){
    .modal-content{
        width:22rem !important;
    }
}
`;class a extends o{static get styles(){return[super.styles,n,r`
                :host {
                    display: block;
                }
            `]}static get properties(){return{status:Object}}firstUpdated(){this.status={type:"success",title:"success"}}firstUpdated(t){super.firstUpdated(t),typeof this.status=="string"&&(this.status=JSON.parse(this.status))}closeModal(){this.remove()}renderIconAndButton(){typeof this.status=="string"&&(this.status=JSON.parse(this.status));let t,s,i;if(this.status!=null){switch(this.status.type){case"success":t="success",s="fa-check-circle",i="Done";break;case"danger":t="danger",s="fa-exclamation-triangle",i="Done";break;case"warning":t="warning",s="fa-exclamation-triangle",i="Done";break;case"in-progress":t="info",s="",i="Done";break;default:throw new Error("This type does not exist")}return e`
                ${s?e`
                        <span class="icon py-2 mt-4 ">
                            <i class="fas fa-6x ${s} has-text-${t}" ></i>
                        </span>
                    `:e`
                    <div class="progressIcon pb-2">
                        <img src="https://i.postimg.cc/dVz4ZBrH/Spinner-1s-200px-1.png"/>
                    </div>
                `}
                <h5 class="title has-text-${t}">${this.status.title}</h5>
                <button class="button statusBtn is-${t} ${this.status?this.status.type=="in-progress"?"is-hidden":"":"hidden"}"  @click=${()=>this.closeModal()}>${i}</button>
            `}}static get is(){return"status-dialog"}render(){return e`
            <div class="modal modal-sm ${this.status?"is-active":"is-hidden"}" id="statusModal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <section class="modal-card-body">
                        <div class="head">
                            <span class="icon ${this.status?this.status.type=="in-progress"?"is-hidden":"":"is-hidden"}" @click=${()=>this.closeModal()}><i class="fa fa-x"></i></span>
                        </div>                 
                        <div class="hdr my-3 has-text-centered">
                            ${this.renderIconAndButton()}
                        </div>   
                    </section>   
                </div>  
            </div>
        `}}customElements.define(a.is,a);
