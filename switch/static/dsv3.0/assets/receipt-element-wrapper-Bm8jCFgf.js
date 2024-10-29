import{i as _,N as w,r as C,g as S,k as y,a as E,j as T}from"./index-C2PWchud.js";import"./jspdf.min-D4P-jdMk.js";import{B as I}from"./base-element-5lxvCIHt.js";import{u as A}from"./utils-mixin-D5aAiqNi.js";import"./iron-flex-layout-C17s8gyg.js";import"./polymer-legacy-CVdXdTHq.js";import"./paper-material-styles-CABhO1-r.js";import"./shadow-R2NCNWlE.js";import"./paper-ripple-CP-IWaVj.js";import"./paper-ripple-behavior-Bi9iYOcF.js";/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/const D=_`

:host {
    display: block;
}


.invoice-box {
    max-width: 800px;
    margin: auto;
    padding: 30px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    font-size: 16px;
    line-height: 24px;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color: #555;
}

.invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
}

.invoice-box table td {
    padding: 5px;
    vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
    text-align: right;
}

.invoice-box table tr.top table td {
    padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
}

.invoice-box table tr.information table td {
    padding-bottom: 40px;
}

.invoice-box table tr.heading td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}

.invoice-box table tr.details td {
    padding-bottom: 20px;
}

.invoice-box table tr.item td{
    border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
    border-bottom: none;
}

.invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
}

@media only screen and (max-width: 600px) {
    .invoice-box table tr.top table td {
        width: 100%;
        display: block;
        text-align: center;
    }

    .invoice-box table tr.information table td {
        width: 100%;
        display: block;
        text-align: center;
    }
}

/** RTL **/
.rtl {
    direction: rtl;
    font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
}

.rtl table {
    text-align: right;
}

.rtl table tr td:nth-child(2) {
    text-align: left;
}


`,N=class extends A(I){constructor(){super(),this.e={};const s=window.parsed_payload;this.seller={name:s.name,logo:s.logo},this.buyer={name:s.profile?s.profile.firstName+" "+s.profile.lastName:"Customer"},this.items=[]}static get is(){return"receipt-element"}static get properties(){return{items:Array,sums:Object,invoice:Number,reference:String,created:String,seller:Object,buyer:Object,e:{type:Object}}}updated(s){if(s.has("e")){const n=this;for(var i={},e=[],r=0;r<dsc.rows.length;r++){for(var a={},o=[],t=0;t<dsc.cols.length;t++)if(dsc.cols[t].value==="cart_item__total"&&(i[dsc.cols[t].value]||(i[dsc.cols[t].value]={name:dsc.cols[t].label,value:0}),i[dsc.cols[t].value].value+=parseInt(dsc.rows[r][t])),dsc.cols[t].type==="href"){var l=n.cols[t].links;for(var d in l){var x=l[d],m={};m.service=x.service,m.icon=x.icon,m.params={};for(var b in x.params){var c=x.params[b];m.params[b]=a[c]}o.push(m)}}else a[dsc.cols[t].label]=dsc.rows[r][t];a.links=o,e.push(a)}if(n.items=e,n.sums=i,n.items.length&&(n.created=w(new Date(n.items[0].created),"dd/MM/yyyy")),n.service=this.e.service,this.e.defaultValue){const p=this.e.defaultValue.split("=");n.invoice=p[1]}n.reference=this.e.kind||""}}print(){this.printPdf(!0)}save(){this.printPdf(!1)}dscDataName(){return this.e.defaultValue}_getOverallTotal(s){return s&&s.cart_item__total?s.cart_item__total.value:0}_getColumnTotal(s){return this.sums?this.sums[s].value:0}printPdf(s){const i=this;var e=new jsPDF("p","mm","a3");let r=210,a=0,o=0;o+=5,a+=60;const t=7;o+=20,e.setFontType("bold"),e.text(a,o,i.seller.name),e.setFontType("normal"),o+=20,a=20,e.setTextColor(0,0,255),e.setFontSize(30),e.text(a,o,"INVOICE"),e.setFontSize(16),e.setTextColor(31,8,34);const l=200;o+=t,e.setFontType("bold"),e.text(a,o,"BILL TO"),e.setFontType("normal"),e.text(a+l,o,"Receipt #"+i.invoice),o+=t,e.text(a,o,i.buyer.name),e.text(a+l,o,"DATE "+i.created),o+=t,e.text(a+l,o,"TERMS Due on receipt"),o+=t,e.text(a,o,"Kenya"),o+=10,e.setLineWidth(1.5),e.line(a,o,290,o),o+=20,e.setFillColor(222,234,242),e.rect(a,o,290,10,"F"),o+=10;const d=.4,x=.2,m=.2;o-=4,r=300,e.setTextColor(77,150,202);const b=a;e.text(b,o,"ITEM");const c=b+d*r;e.text(c,o,"QTY");const n=c+x*r;e.text(n,o,"RATE");const p=n+m*r;e.text(p,o,"AMOUNT"),e.setTextColor(31,8,34),o+=10;for(var u=0;u<i.items.length;u++){const f=i.items[u];o+=t,e.setFontType("bold"),e.text(b,o,f.name),e.setFontType("normal"),e.text(c,o,f.quantity.toString()),e.text(n,o,f.unit_price.toString()),e.text(p,o,f.sub_total.toString())}o+=20,e.setDrawColor(255,0,0),e.setLineWidth(1.3),this.dottedLine(e,a,o,300,o,8),o+=t,e.text(b,o,"Final amount for order ."),o+=10;const h=200;if(e.text(h,o,"PAYMENT"),e.text(h+50,o,String(i._getColumnTotal("cart_item__total"))),o+=t,e.text(h,o,"BALANCE DUE"),e.setFontType("bold"),e.text(h+50,o,"$0.00"),e.setFontType("normal"),e.setFontSize(60),e.setTextColor(0,255,0),e.text(100,140,"PAID",null,35),s){e.autoPrint();var v=this.qs("#iframe");v.src=e.output("dataurlstring")}else e.save("Invoice"+i.reference+".pdf")}dottedLine(s,i,e,r,a,o){for(var t=Math.abs(r-i),l=Math.abs(a-e),d=Math.sqrt(Math.pow(t,2)+Math.pow(l,2)),x=d/o,m=Math.floor(x)%2===0?d/Math.ceil(x):d/Math.floor(x),b=m*(t/d),c=m*(l/d),n=i,p=e;n<=r&&p<=a;)s.line(n,p,n+b,p+c),n+=2*b,p+=2*c}};class F extends N{static get styles(){return[C(S),D,_`
            :host {
              display: block;
            }
          `]}constructor(){super()}render(){return y`


    <div  class="invoice-box" >

        <paper-button @tap="${this.save}">Save</paper-button>
        <paper-button @tap="${this.print}">Print</paper-button>
        <!--<canvas id="canvas" style="border: 1px solid crimson;margin: auto;display: block;width: 100%;height: 100%">-->
        <!--<p>Please download a modern browser to view this content</p>-->
        <!--</canvas>-->

        <table id="invoice" cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="/media/${this.seller.logo}" alt="logo" style="width:100%; max-width:200px;">
                            </td>
                            <td>
                                Receipt #: ${this.invoice}<br>
                                <!--<br>-->
                                Ref: ${this.reference}<br>
                                Created: ${this.created}
                                <!--Due: -->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                ${this.seller.name}.<br>
                                <!--12345 Sunny Road<br>-->
                                <!--Sunnyville, CA 12345-->
                            </td>

                            <td>
                                ${this.buyer.name}<br>
                                <!--John Doe<br>-->
                                <!--john@example.com-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!--<tr class="heading">-->
                <!--<td>-->
                    <!--Payment Method-->
                <!--</td>-->

                <!--<td>-->
                    <!--Check #-->
                <!--</td>-->
            <!--</tr>-->

            <!--<tr class="details">-->
                <!--<td>-->
                    <!--Check-->
                <!--</td>-->

                <!--<td>-->
                    <!--1000-->
                <!--</td>-->
            <!--</tr>-->

            <tr class="heading">
                <td>
                    Item
                </td>

                <td>
                    Quantity
                </td>

                <td>
                    Price
                </td>
            </tr>
            
            ${this.items.map(i=>y`
                <tr class="item">
                    <td>
                        ${i.name}
                    </td>

                    <td>
                        ${i.quantity}
                    </td>

                    <td>
                        ${i.unit_price}
                    </td>
                </tr>`)}


            <!--<tr class="item">-->
                <!--<td>-->
                    <!--Hosting (3 months)-->
                <!--</td>-->

                <!--<td>-->
                    <!--$75.00-->
                <!--</td>-->
            <!--</tr>-->


            <!--<tr class="item last">-->
                <!--<td>-->
                    <!--Domain name (1 year)-->
                <!--</td>-->

                <!--<td>-->
                    <!--$10.00-->
                <!--</td>-->
            <!--</tr>-->

            <tr class="total">
                <td></td>

                <td>
                    Total: ${this._getOverallTotal(this.sums)}
                </td>
            </tr>
        </table>
    </div>

    <iframe id="iframe" style="display:none"></iframe>

        `}firstUpdated(i){super.firstUpdated(i)}printPdf(i){const e=this;var r=new jsPDF("p","mm","a3");let a=210,o=0,t=0;t+=5,o+=60;const l=7;t+=20,r.setFontType("bold"),r.text(o,t,e.seller.name),r.setFontType("normal"),t+=20,o=20,r.setTextColor(0,0,255),r.setFontSize(30),r.text(o,t,"INVOICE"),r.setFontSize(16),r.setTextColor(31,8,34);const d=200;t+=l,r.setFontType("bold"),r.text(o,t,"BILL TO"),r.setFontType("normal"),r.text(o+d,t,"Receipt #"+e.invoice),t+=l,r.text(o,t,e.buyer.name),r.text(o+d,t,"DATE "+e.created),t+=l,r.text(o+d,t,"TERMS Due on receipt"),t+=l,r.text(o,t,"Kenya"),t+=10,r.setLineWidth(1.5),r.line(o,t,290,t),t+=20,r.setFillColor(222,234,242),r.rect(o,t,290,10,"F"),t+=10;const x=.4,m=.2,b=.2;t-=4,a=300,r.setTextColor(77,150,202);const c=o;r.text(c,t,"ITEM");const n=c+x*a;r.text(n,t,"QTY");const p=n+m*a;r.text(p,t,"RATE");const u=p+b*a;r.text(u,t,"AMOUNT"),r.setTextColor(31,8,34),t+=10;for(var h=0;h<e.items.length;h++){const g=e.items[h];t+=l,r.setFontType("bold"),r.text(c,t,g.name),r.setFontType("normal"),r.text(n,t,g.quantity.toString()),r.text(p,t,g.unit_price.toString()),r.text(u,t,g.sub_total.toString())}t+=20,r.setDrawColor(255,0,0),r.setLineWidth(1.3),this.dottedLine(r,o,t,300,t,8),t+=l,r.text(c,t,"Final amount for order ."),t+=10;const v=200;if(r.text(v,t,"PAYMENT"),r.text(v+50,t,String(e._getColumnTotal("cart_item__total"))),t+=l,r.text(v,t,"BALANCE DUE"),r.setFontType("bold"),r.text(v+50,t,"$0.00"),r.setFontType("normal"),r.setFontSize(60),r.setTextColor(0,255,0),r.text(100,140,"PAID",null,35),i){r.autoPrint();var f=this.qs("#iframe");f.src=r.output("dataurlstring")}else r.save("Invoice"+e.reference+".pdf")}init(i,e){super.init(i,e)}}customElements.define(F.is,F);const W=({element:s})=>{const i=E.useRef(null);return E.useEffect(()=>{i.current&&s&&(i.current.e=s)},[s]),T.jsx("div",{children:s?T.jsx("receipt-element",{id:"receipt-element",ref:i}):T.jsx("p",{children:"Loading data..."})})};export{W as default};
