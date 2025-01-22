import {css} from 'lit-element';

export const ProductListStyles = css`
.content{
    font-family:var(--family-sans-serif);
    background-color:var(--md-sys-color-surfaceBright);
    border-radius: var(--CornerLarge) !important;
    padding:.75rem;
}

.content table td{
    border:none;
}
.container{
    padding:.75rem;
}


.scroll-container {
    max-height: 120px; /* Adjust the height as needed */
    overflow-y: auto;
    scrollbar-color: var(--primary);
}

table {
    width: 100%;
    border-collapse: collapse;
}
thead th,tr th {
    width: 33%; /* Adjust the percentage based on the number of columns */
}

tbody td {
    width: 33%; /* Adjust the percentage based on the number of columns */
}
thead th{
    font-weight:400;
    font-size:14px;
}

tbody tr td:last-child{
    text-align:right;
}
tbody tr td:nth-child(2){
    text-align:right;
}
.empty-message {
    text-align: center;
}

#total{
    font-weight: 400;
    text-align:right;
}
#totalVal{
    text-align:right;
    color:var(--primary);
}
#subTotalHdr{
    text-align:right;
}
#quantityHdr{
    text-align:right;
}

//scrollbar
/* WebKit browsers: Chrome, Safari, Edge */
::-webkit-scrollbar {
  width: 12px;  /* Width of the scrollbar */
  height: 12px; /* Height of the horizontal scrollbar */
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--primary) !important;  /* Color of the scroll thumb */
  border-radius: 6px;  /* Roundness of the scroll thumb */
}

.scroll-container::-webkit-scrollbar-track {
  background: var(--primary) !important;  /* Background of the scrollbar track */
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary) !important;  /* Hover effect for the scroll thumb */
}

/* Firefox */
.scroll-container {
  scrollbar-width: thin;  /* Set width to thin or auto */
  scrollbar-color: var(--primary) !important;  /* Thumb color, Track color */

}

/* Internet Explorer and Edge (older versions, IE 10+) */
body {
  -ms-overflow-style: -ms-autohiding-scrollbar; /* Auto-hiding scrollbar for IE */
}





#btnDiv{
    display: flex;
    justify-content: flex-end;
}
.addBtn{
    background-color:var(--md-sys-color-secondaryContainer);
    box-shadow:var(--mui-shadows-3);
    height:56px;
    border-radius:var(--CornerExtra-large);
    align-items:center;
    display:flex;
    text-align:center;
    justify-content:center;
    font-weight:500;
    font-size:14px;
    line-height:20px;
    letter-spacing:.1px;
    color:var(--primary);
    width:50%;
}
.addBtn:hover{
    cursor:pointer;
    transform:scale(1.01);
}

@media(max-width:768px){
    .addBtn{
        width:75%;
    }
}


`;