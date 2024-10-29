import{N as C,i as F,r as _,g as w,k as y,a as E,j as T}from"./index-C2PWchud.js";import{a as S}from"./jspdf.min-D4P-jdMk.js";import{B as D}from"./base-element-5lxvCIHt.js";import{u as N}from"./utils-mixins-2-CV_UYnIr.js";import"./iron-flex-layout-C17s8gyg.js";import"./polymer-legacy-CVdXdTHq.js";import"./paper-material-styles-CABhO1-r.js";import"./shadow-R2NCNWlE.js";import"./paper-ripple-CP-IWaVj.js";import"./paper-ripple-behavior-Bi9iYOcF.js";const A=class extends N(D){constructor(){super();const i=window.PAYLOAD;this.seller={name:i.name,logo:i.logo},this.buyer={name:i.profile?i.profile.firstName+" "+i.profile.lastName:"Customer"},this.items=[]}static get is(){return"invoice-element"}static get properties(){return{items:Array,sums:Object,invoice:Number,reference:String,created:String,seller:Object,buyer:Object}}firstUpdated(i){super.firstUpdated(i);const a=this;this.loader.then(t=>{for(var o={},n=[],e=0;e<t.rows.length;e++){for(var r={},l=[],s=0;s<t.cols.length;s++)if(t.cols[s].value==="cart_item__total"&&(o[t.cols[s].value]||(o[t.cols[s].value]={name:t.cols[s].label,value:0}),o[t.cols[s].value].value+=parseInt(t.rows[e][s])),t.cols[s].type==="href"){var m=a.cols[s].links;for(var u in m){var p=m[u],d={};d.service=p.service,d.icon=p.icon,d.params={};for(var c in p.params){var x=p.params[c];d.params[c]=r[x]}l.push(d)}}else r[t.cols[s].label]=t.rows[e][s];r.links=l,n.push(r)}a.items=n,a.sums=o,a.items.length&&(a.created=C(new Date(a.items[0].created),"dd/MM/yyyy"))})}print(){console.log("I am about to print"),this.printPdf(!0)}save(){this.printPdf(!1)}dscDataName(){return this.e.defaultValue}_getOverallTotal(i){return i?i.cart_item__total.value:0}_getColumnTotal(i){return this.sums?this.sums[i].value:0}printPdf(i){const a=this;var t=new jsPDF("p","mm","a3");let o=210,n=0,e=0;e+=5,n+=60;const r=7;e+=20,t.setFontType("bold"),t.text(n,e,a.seller.name),t.setFontType("normal"),e+=20,n=20,t.setTextColor(0,0,255),t.setFontSize(30),t.text(n,e,"INVOICE"),t.setFontSize(16),t.setTextColor(31,8,34);const l=200;e+=r,t.setFontType("bold"),t.text(n,e,"BILL TO"),t.setFontType("normal"),t.text(n+l,e,"INVOICE #"+a.invoice),e+=r,t.text(n,e,a.buyer.name),t.text(n+l,e,"DATE "+a.created),e+=r,t.text(n+l,e,"TERMS Due on receipt"),e+=r,t.text(n,e,"Kenya"),e+=10,t.setLineWidth(1.5),t.line(n,e,290,e),e+=20,t.setFillColor(222,234,242),t.rect(n,e,290,10,"F"),e+=10;const s=.4,m=.2,u=.2;e-=4,o=300,t.setTextColor(77,150,202);const p=n;t.text(p,e,"ITEM");const d=p+s*o;t.text(d,e,"QTY");const c=d+m*o;t.text(c,e,"RATE");const x=c+u*o;t.text(x,e,"AMOUNT"),t.setTextColor(31,8,34),e+=10;for(var v=0;v<a.items.length;v++){const f=a.items[v];e+=r,t.setFontType("bold"),t.text(p,e,f.name),t.setFontType("normal"),t.text(d,e,f.quantity.toString()),t.text(c,e,f.unit_price.toString()),t.text(x,e,f.sub_total.toString())}e+=20,t.setDrawColor(255,0,0),t.setLineWidth(1.3),this.dottedLine(t,n,e,300,e,8),e+=r,t.text(p,e,"Final amount for order ."),e+=10;const b=200;if(t.text(b,e,"PAYMENT"),t.text(b+50,e,String(a._getColumnTotal("cart_item__total"))),e+=r,t.text(b,e,"BALANCE DUE"),t.setFontType("bold"),t.text(b+50,e,"$0.00"),t.setFontType("normal"),t.setFontSize(60),t.setTextColor(0,255,0),t.text(100,140,"PAID",null,35),i){t.autoPrint();var h=this.qs("#iframe");h.src=t.output("dataurlstring")}else t.save("Invoice"+a.reference+".pdf")}dottedLine(i,a,t,o,n,e){for(var r=Math.abs(o-a),l=Math.abs(n-t),s=Math.sqrt(Math.pow(r,2)+Math.pow(l,2)),m=s/e,u=Math.floor(m)%2===0?s/Math.ceil(m):s/Math.floor(m),p=u*(r/s),d=u*(l/s),c=a,x=t;c<=o&&x<=n;)i.line(c,x,c+p,x+d),c+=2*p,x+=2*d}init(i,a){super.init(i,a);var t=this;if(t.service=i.service,t.params=a.pl.paramsCopy(),i.defaultValue){const o=i.defaultValue.split("=");t.invoice=o[1]}t.reference=i.kind||"",t.loader=this.loadData()}},M=F`
  :host {
    display: block;
  }
  .invoice-box {
    max-width: 800px;
    margin: auto;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background:var(--paper)
    font-size: 16px;
    line-height: 24px;
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
    color: var(--grey-darker);
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
    border-bottom: 1px solid #ddd;
    font-weight: bold;
    color: var(--grey-darker);
  }

  .invoice-box table tr.details td {
    padding-bottom: 20px;
  }

  .invoice-box table tr.item td {
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
  }

  .rtl table {
    text-align: right;
  }

  .rtl table tr td:nth-child(2) {
    text-align: left;
  }
`;let I=class extends A{static get styles(){return[_(w),M,F`
        :host {
          display: block;
        }
      `]}firstUpdated(a){super.firstUpdated(a)}printPdf(a){const t=this;var o=new S.jsPDF("p","mm","a3");let n=210,e=0,r=0;r+=5,e+=60;const l=7;r+=20,o.setFontType("bold"),o.text(e,r,t.seller.name),o.setFontType("normal"),r+=20,e=20,o.setTextColor(0,0,255),o.setFontSize(30),o.text(e,r,"INVOICE"),o.setFontSize(16),o.setTextColor(31,8,34);const s=200;r+=l,o.setFontType("bold"),o.text(e,r,"BILL TO"),o.setFontType("normal"),o.text(e+s,r,"INVOICE #"+t.invoice),r+=l,o.text(e,r,t.buyer.name),o.text(e+s,r,"DATE "+t.created),r+=l,o.text(e+s,r,"TERMS Due on receipt"),r+=l,o.text(e,r,"Kenya"),r+=10,o.setLineWidth(1.5),o.line(e,r,290,r),r+=20,o.setFillColor(222,234,242),o.rect(e,r,290,10,"F"),r+=10;const m=.4,u=.2,p=.2;r-=4,n=300,o.setTextColor(77,150,202);const d=e;o.text(d,r,"ITEM");const c=d+m*n;o.text(c,r,"QTY");const x=c+u*n;o.text(x,r,"RATE");const v=x+p*n;o.text(v,r,"AMOUNT"),o.setTextColor(31,8,34),r+=10;for(var b=0;b<t.items.length;b++){const g=t.items[b];r+=l,o.setFontType("bold"),o.text(d,r,g.name),o.setFontType("normal"),o.text(c,r,g.quantity.toString()),o.text(x,r,g.unit_price.toString()),o.text(v,r,g.sub_total.toString())}r+=20,o.setDrawColor(255,0,0),o.setLineWidth(1.3),this.dottedLine(o,e,r,300,r,8),r+=l,o.text(d,r,"Final amount for order ."),r+=10;const h=200;if(o.text(h,r,"PAYMENT"),o.text(h+50,r,String(t._getColumnTotal("cart_item__total"))),r+=l,o.text(h,r,"BALANCE DUE"),o.setFontType("bold"),o.text(h+50,r,"$0.00"),o.setFontType("normal"),o.setFontSize(60),o.setTextColor(0,255,0),o.text(100,140,"PAID",null,35),a){o.autoPrint();var f=this.qs("#iframe");f.src=o.output("dataurlstring")}else o.save("Invoice"+t.reference+".pdf")}init(a,t){super.init(a,t)}renderDefault(){return y`
      <div class="invoice-box card content">
        <paper-button @tap="${this.save}" style="color: var(--grey-darker)"
          >Save</paper-button
        >
        <paper-button @tap="${this.print}" style="color: var(--grey-darker)"
          >Print</paper-button
        >

        <table id="invoice" cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="/media/${this.seller.logo}"
                      alt="logo"
                      style="width:100%; max-width:200px;"
                    />
                  </td>
                  <td>
                    Invoice #: ${this.invoice}<br />
                    Ref: ${this.reference}<br />
                    Created: ${this.created}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td>${this.seller.name}.<br /></td>

                  <td>${this.buyer.name}<br /></td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Item</td>

            <td>Quantity</td>

            <td>Price</td>
          </tr>

          ${this.items.map(a=>y` <tr class="item">
              <td>${a.name}</td>

              <td>${a.quantity}</td>

              <td>${a.unit_price}</td>
            </tr>`)}

          <tr class="total">
            <td></td>

            <td>Total: ${this._getOverallTotal(this.sums)}</td>
          </tr>
        </table>
      </div>

      <iframe id="iframe" style="display:none"></iframe>
    `}};customElements.define(I.is,I);const H=({element:i})=>{console.log("element is ",i);const a=E.useRef(null);return E.useEffect(()=>{a.current&&i&&(a.current.e=i,console.log("Element set in useEffect:",i))},[i]),T.jsx(T.Fragment,{children:i?T.jsx("invoice-element",{id:"invoice-element",ref:a}):T.jsx("p",{children:"Loading data..."})})};export{H as default};
