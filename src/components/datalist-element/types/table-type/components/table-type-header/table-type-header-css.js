
import {css} from 'lit-element';

export const TableTypeHeaderStyles = css`
span{
	color:var(--md-sys-color-outline) !important;
}
.contol{
	margin-right:2rem;
}
	.active_item{
		background-color: var(--link);
	}
	.search_ul{
		border: 1px solid lightgrey;
		border-radius: 5px;
		box-shadow: var(--input-border-color) 9px 11px 49px -21px;
		background-color:var(--input-background-color) !important;
		color:var(--grey-darker);
		font-family:var(--family-sans-serif),sans-serif !important;
	}
	.search_ul li:hover{
		color:var(--grey-darker);
		background-color:var(--link);
	}
	.column {
		padding:0.85rem;
	}
	.buttons {
		padding-top:35px;
		margin: 0 auto !important;
		justify-content: flex-end;
		width:100%;
	}
	.button {
	padding: 7px 20px;
	}

	#search_area{
		align-items: center!important;
	}
	.table-header-buttons {
		position: sticky;
		background-color: var(--card-background-color);
		top: 0;
		z-index: 2;
	}
	.table-header-buttons .columns{
		padding:0.625rem;
	}
	.table-header-buttons .columns .button{
		font-family:var(--family-sans-serif),sans-serif;
	}
	.table-header-buttons .search_box{
		border: 1px solid rgb(183, 181, 181);
		background: #fff;
		border-radius: 6px; 
		display: flex;
		flex:2;
		margin-right: 10px;
		/* width: 200px; */
		/* box-shadow: 0 8px 6px -10px #b3c6ff; */
	}
	#search-btns {
		display:flex;
		flex:1;
	}
	.table-header-buttons .search_box .dropdown{
		flex:1;
		border-right: 2px solid #dde2f1;
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		border-top-right-radius:0px;
		border-bottom-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
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
		
	}
	.table-header-buttons .search_box .dropdown ul{
		display: none;
		position: absolute;
		top: 50px;
		left: 0px;
		background: #fff;
		width: 150px;
		-webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		-moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
		z-index: 999;
	
	}
	.table-header-buttons .search_box .dropdown ul li{
		padding-bottom: 20px;
		padding: 10px;
		font-weight:500;
	}
	.table-header-buttons .search_box .dropdown ul li:hover{
		background-color: var(--link);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}
	.search_field input{
		border-color: transparent;
		font-size: 16px;
		height:inherit;
		padding:0 7px 0 7px;
		box-shadow:none;
		border-radius:0 6px 6px 0;
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
	#refresh-button{
		margin-bottom: 11px;
		margin-left: 12px;
	}
	.actionCol{
		justify-content: flex-end;
		padding-left:0.45rem;
		padding-right:0.95rem;
	}
	@media screen and (max-width: 600px) {
		
		#pdf-btn{
			margin-right:0.5rem!important;
		}
		#search_area {
			flex-wrap: wrap;
			justify-content: center;
			flex-wrap:wrap;
		}
		.search_box {
			min-width: 100%;
		}
		.buttons {
			padding-top:0;
		}
		#search-btns {
			margin-top:20px;
			width:100%;
			display:flex;
		}
		.button {
			flex:1;
		}
		.table-header-buttons .search_box{
			margin-right:0px;   
		}
		.button {
			margin:5px;
		}
		#refresh-button{
			margin-top:7px !important;
		}
	}


	@media screen and (max-width: 1250px) {
		.d-none-mobile{
			display:none !important
		}
	}



`;
