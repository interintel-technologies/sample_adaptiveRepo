
import {css} from 'lit-element';

export const Table2TypeHeaderStyles = css`
	.active_item{
		background-color: var(--link);
	}
	.column {
		padding:0.85rem;
	}
	.buttons {
		margin: 0 auto !important;
		justify-content: flex-end;
		width:100%;
	}
	
	.button {
	padding: 7px 20px;
	border-radius:15px 15px 15px 15px !important;
	box-shadow:0 .075rem .15rem rgba(183,181,181,.45);
	border:none;
	font-family:var(--family-sans-serif);
	}

	.button:hover{
		transform:scaleX(1.01) scaleY(1.02);
		transition: 0.8s ease-out;
		color:var(--link--color-invert);
	}

	#tab_area{
		align-items: center!important;
		border-radius:15px 15px 15px 15px;
		background-color: var(--card-background-color);
		display:flex;
		flex:wrap;
		max-height:40px;
		
	}
	.tab{
		max-width:60px;
		max-height:20px;
	}
	.tab h5{
		color:var(--grey-darker);
	}
	.tab:hover{
		cursor:pointer;
	}
	.tab.active{
		background-color:var(--body-background-color);
		text-align:center;
		border-radius:15px 15px 15px 15px;
	}
	.itemCol{
		border:1px solid rgba(183,181,181,.5);
		border-radius:15px 15px 15px 15px;
		justify-content:center;
		display:flex;
		max-height:40px;
		margin-left:.5em;
		vertical-align:middle;
		background-color:var(--card-background-color);
	}
	.itemCol:hover{
		cursor:pointer;
	}
	.itemCol .icon i{
		color:var(--grey-darker);
	}
	.field .has-addons{
		border-radius:15px !important;
		background-color: var(--card-background-color) !important;
		color:var(--grey-darker);
		height:30px;
		
	}
	.field.has-addons .input{
		background-color:var(--card-background-color) !important;
		height:2.8em !important;
		border-top-right-radius:15px !important;
		border-bottom-right-radius:15px !important;
		border:2px solid rgba(183,183,181,.5);
	}
	.table-header-buttons {
		background-color: var(--body-background-color);
		top: 0;
		z-index: 2;
		border-radius:30px 30px 0 0;
		padding:1.5em 0 1.5em 0;
		border:2px solid rgba(183,181,181,.5);
		display:flex;
		flex-direction:row;
		width:auto !important;
	}
	.table-header-buttons .columns{
		padding:0.625rem;
		width:80vw;
	}
	.table-header-buttons .columns .button{
		font-family:var(--family-sans-serif),sans-serif;
	}
	.table-header-buttons .search_box{
		border-radius: 6px; 
		display: flex;
		flex:2;
	}
	#search-btns {
		display:flex;
		flex:1;
		padding-left:0;
	}

	.table-header-buttons .search_box .dropdown{
		flex:1;
		border: 2px solid rgb(183,181,181,.5);
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		height:45px;
		border-top-left-radius:15px;
		border-bottom-left-radius:15px;
		border-bottom-right-radius:0px;
		border-top-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
		vertical-align:middle;
	
	}
	.table-header-buttons .search_box .dropdown::before{
		content: '';
		position: absolute;
		top: 20px;
		right: 5px;
		border: 5px solid;
		border-color: #9B9B9B transparent transparent transparent;
	}
	.table-header-buttons .search_box .dropdown .default_option{
		padding: 13px 8px;
		font-size: 14px;
		position: static;
		top:0;
		font-weight: 500;
		overflow:hidden;
	}
	.table-header-buttons .search_box .dropdown ul{
		display: none;
		position: absolute;
		top: 50px;
		left: 0px;
		background: var(--card-background-color);
		width: 150px;
		-webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		-moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		z-index: 999 !important;
	
	}
	.table-header-buttons .search_box .dropdown ul li{
		padding-bottom: 20px;
		padding: 10px;
		font-weight:500;
	}
	.table-header-buttons .search_box .dropdown ul li:hover{
		background-color: var(--link);
		color:var(--link--color-invert);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}
	.search_item:hover{
		color:var(--link--color-invert);
	}
	.search_field input{
		font-size: 16px;
		height:inherit;
		padding:0 7px 0 7px;
		box-shadow:none;
	}

	.search_field input:hover{
		border-color: transparent;
	}
	.search_field input:focus-within{
		outline: none;
	}
	.search_field input:focus{
		outline: none;
		border-color: transparent;
	}
	.input {
		border-radius:none;
		border-color:none;
	}
	::placeholder{
		font-family:var(--family-sans-serif),sans-serif;
	}
	.table-header-buttons .column.is-8{
		width:42rem;
	} 
	#refresh-button{
		margin-bottom: 11px;
		margin-left: 12px;
		background-color:var(--info--dark-color);	
		color:var(--link--color-invert)
		
	}
	.searchBtn{
		background-color:var(--link);
		color:var(--link--color-invert) !important;
		height:30px;
		
	}
	.actionCol{
		display:flex;
		justify-content: center !important;
		padding-left:0.45rem;
		padding-right:0.95rem;
		margin-left:2em;		
	}
	
	.clearBtn{
		background-color:var(--app-secondary-color);
		color:var(--link--color-invert) !important;
		height: 30px !important;
	}
	.submitBtn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	#pdf-btn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	#csv-btn{
		background-color:var(--link);
		color:var(--link--color-invert);
	}
	@media(max-width:1024px){
		.table-header-buttons .search_box{
			min-width:100% !important;
		}
	}
	@media(max-width:768px){
		.table-header-buttons{
			/* height:15vh; */
			justify-content:center;
			
		}
		.actionCol {
			margin-left:0;
		}
		
		#tab_area{
			max-width:58vw;
			width:57vw;
			padding:.625em .625em .625em .625em;
			font-size:14px;
		}
		.field.has-addons .control{
			flex: 1 1 0%;
		}
		.field.has-addons .control .input{
			border-bottom-left-radius:0px !important;
			border-top-left-radius:0px !important;
			background-color: var(--card-background-color) !important;
			color:var(--grey-darker);
			height:2.8em !important;
		
		}
		.searchBtn{
			font-size:13px;
		}
		.clearBtn{
			font-size:13px;
		}
		.table-header-buttons .search_box{
			min-width:100%;
		}
		#search-btns{
			justify-content:flex-end;
			padding-left:.9rem !important;
		}
			
		#search-btns .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
			/* displaY:inline-flex; */
		}
		.is-right .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
		}
	}
	@media(min-width:768px) and (max-width:900px){
		#search-btns{
			justify-content:flex-start;
			padding-left:2.5rem;
		}
		

	}
	
	@media(max-width:600px){
		.table-header-buttons .columns{
			font-size:12px !important;
		}
		.table-header-buttons .column.is-8{
			max-width:40rem;
		}	
		/* #search-btns{
			justify-content:center;
		} */
		#search-btns .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
			/* displaY:inline-flex; */
		}
		.is-right .button{
			margin-right:auto;
			margin-left:auto;
			flex: 1 1 0%;
		}
		
	}
	@media(max-width:430px){
		.is-right .button{
			padding:4px 7px 4px 7px;
			font-size:10px !important;
			border-radius:10px 10px 10px 10px;
		}
	}
`;
