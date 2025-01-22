import { html, css, unsafeCSS, LitElement } from 'lit-element';
import '@polymer/paper-button/paper-button';
import { ReceiptElementStyles } from './receipt-element-css'
import { ReceiptElementBase } from '../../base/elements/receipt-element'
import globalStyles from '../../App.css?raw';
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import "./Montserrat-Regular-normal";
class ReceiptElement extends LitElement {
  static get styles() {
    return [
      unsafeCSS(globalStyles),
      ReceiptElementStyles,
      css`
            :host {
              display: block;
            }
          `
    ];
  }

  static get properties() {
    return {
      items: Array,
      e: { type: Object }, // Assuming 'e' is passed as a property
      cols: { type: Array }, // Add 'cols' property
      rows: { type: Array },  // Add 'rows' property
      bgColor: { type: String }, 

    };
  }

  constructor() {
    super();
    this.items = [];
    this.rows = [];
    this.cols = [];
    this.e = null;
    this.bgColor='';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('e') || changedProperties.has('rows') || changedProperties.has('cols')) {
      this.items = [...this.rows.map(row => Object.fromEntries(row.map((rowValue, index) => [this.cols[index].label, rowValue])))];
      
      // const theme=useTheme();
      // const bgColor=hexToRgbA(theme.palette.primary.main);
      const bg=this.shadowRoot.querySelector('.modal-background');
      console.log(this.items);

      bg.style.backgroundColor=(this.bgColor);
    }
  }

 

  async loadImageAsBase64(imagePath) {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  
  async fetchFont(fontUrl){
    const response = await fetch(fontUrl);
    const fontBlob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]); // Base64 part
      reader.readAsDataURL(fontBlob);
    });
  };


  async generatePDFHandler () {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });
  
        
      const fontList=doc.getFontList();
      console.log(fontList)
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
    
      // Convert the background image to Base64 (example here assumes you have the Base64 string)
      const backgroundImage =  await this.loadImageAsBase64("https://i.postimg.cc/N0N4ZDqq/A4-1-background.png"); // Replace with your Base64 image
    
      // Add the background image
      doc.addImage(backgroundImage, "PNG", 0, 0, pageWidth, pageHeight);
     
      let yOffset = 20;
      // Add logo image
      const logo = await this.loadImageAsBase64("https://i.postimg.cc/y8BLwW5K/logointro-3-1.png"); // Replace with your base64-encoded image or a path
      const logoWidth = 120; // Adjust logo width
      const logoHeight = 120; // Adjust logo height
      const logoXOffset = 40;  // Left margin for logo
    
      doc.addImage(logo, "PNG", logoXOffset, yOffset, logoWidth, logoHeight);
      
      // Align title and tagline to the right
      const titleXOffset = pageWidth / 2 + 20; // Center offset + padding to move right
      const taglineXOffset = titleXOffset; // Align tagline with the title

      // Add title
      doc.setFontSize(46);
      doc.setTextColor(50, 50, 50);
      doc.setFontType('bold');
      doc.setFont("Montserrat-Regular");
      doc.text("Nikobizz", titleXOffset-28, yOffset + 50, { align: "left" });
   

      // Add tagline
      doc.setFontSize(16);
      doc.setTextColor(112, 120, 129);
      doc.setFont("Montserrat-Regular");
      doc.text("Redefine your online experience",taglineXOffset-30,yOffset + 70,{ align: "left" });
      yOffset += logoHeight; // Adjust yOffset for the next section

      // Extract details dynamically
      this.items.forEach((detail) => {
        Object.entries(detail).forEach(([key, value]) => {
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0);
          doc.setFont("Montserrat-Regular");
          doc.text(`${key}: ${value}`, titleXOffset, yOffset);
          yOffset += 10;
        });
      });

      yOffset += 20;

   
      // Add a timestamp icon and payment time
      doc.setFont("Montserrat-Regular");
      doc.setFont("Montserrat-Regular");
      doc.text(`${this.items[0]["Payment Time"]}`, titleXOffset, yOffset);
      yOffset += 50;

      // Add a table of items
      const tableData = [
        ["Item", "Quantity", "Amount"],
        ["Safaricom Airtime", "500", "500"],
        ["Tax", "20", "20"],
        ["Total", "", "520"],
      ];

      autoTable(doc, {
        head: [tableData[0]],
        body: tableData.slice(1, tableData.length - 1),
        foot:[tableData[tableData[0].length]],
        startY: yOffset+50,
        theme: "grid",
        styles: { fontSize: 14, halign: "center",font:"Montserrat-Regular" },
        headStyles: {
          fillColor: [247,249,255], // Slightly darker background for header
          textColor: [24, 28, 32],
          fontSize:14,
          lineWidth:1, // Border thickness for header
          lineColor: [207, 231, 255], // Darker border for header
          fontStyle:"bold"
        },
        bodyStyles: {
          textColor: [24, 28, 32],
          lineWidth: 0, // Border thickness for body
          fontStyle:"normal",
          lineColor: [220, 220, 220], // Light border for body
          fillColor: null
        },
        columnStyles: {
          0: { halign: "left"},
          1: { halign: "center" },
          2: { halign: "center" },
        },
        footStyles: {
          fillColor: null, // Slightly darker background for header
          textColor: [24, 28, 32],
          fontSize:14,
          lineWidth: 1, // Border thickness for header
          lineColor: [207, 231, 255], // Darker border for header
          fontStyle:"bold"
        }
      });

      yOffset = doc.lastAutoTable.finalY + 20;

      // Add footer text
      doc.setFontSize(14);
      doc.setTextColor(52, 142, 201);
      doc.setFont("Montserrat-Regular");
      doc.text("Thank you for using our services!", pageWidth / 2, yOffset+180, {
        align: "center",
      });

      // Save the PDF
      doc.save("receipt.pdf");
    };



  openModal() {
    const modal = this.shadowRoot.querySelector(".modal");
    modal.classList.add("is-active");
    
  }

  closeModal() {
    const modal = this.shadowRoot.querySelector(".modal");
    modal.classList.remove('is-active');
    modal.style.display="none";
  }


  static get is() {
    return 'receipt-element';
  }

  render() {
    return html`
    <div class="">
      <div class="modal is-active">
      <div class="modal-background content"></div>
      <div class=" ">

        
          <div class="card">
            <div class="header">
                <div class="circle">
                    <adaptive-ui-icon dataColor="green" icon="MdCheckCircle"></adaptive-ui-icon>
                </div>
               
                
            </div>
            <div class="hdr-content">
                <h6>Payment Success!</h6>
                <p>Your payment has been successfully done.</p>
            </div>
            <hr>
            <div class="total-content">
                <p>Total Payment</p>
                <h5 class="mt-3">Ksh ${this.e.details.total}</h5>
            </div>
            <div id="items" class="columns is-mobile is-multiline">
               ${this.items.map(item => html`
                ${Object.entries(item).map(([key, val]) => html`
                  <div class="column is-5-desktop is-5-tablet is-5-mobile item mx-2 my-2">
                      <p>${key}</p>
                      <h5 class="mt-3">${val}</h5>
                  </div>
                `)}
              
                `)}
            </div>
            <div class="print-div my-5" @click=${(e) => this.generatePDFHandler(e)}>
            <adaptive-ui-icon class="mt-2 mr-2" dataColor="var(--primary-text)" icon="MdDownloadForOffline"></adaptive-ui-icon>
            <h5 class="mt-3">Get PDF Receipt</h5>
            </div>
            <div class="btnDiv my-5">
              <button id="closeBtn" @click=${()=>this.closeModal()}>${this.e.details.caption}</button>
            </div>
        </div>
        
    </div>
    
  </div>

</div>
    `;
  }
}

customElements.define(ReceiptElement.is, ReceiptElement);
