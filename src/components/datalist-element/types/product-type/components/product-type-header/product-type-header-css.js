
import {css} from 'lit-element';

export const ProductTypeHeaderStyles = css`
	.columns {
		flex-direction:column;
	}
	.active_item{
		background-color: var(--link);
	}
	.search_ul{
		border: 1px solid lightgrey;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.75) 9px 11px 49px -21px;
	}
	.buttons {
		height: fit-content;
		width: 100%;
	}
	.fas {
		cursor:pointer;
	}
	.button {
		padding: 7px 20px;
		margin-right:20px;
	}
	.block {
		flex-wrap:wrap;
	}
	#counter {
		cursor:default;
		background-color: var(--link);
		border-color: var(--input-border-color);
		padding: 7px 20px;
		color:var(--link--color-invert);
	}
	#search_area{
		align-items: center!important;
		width:60%;
	}
	.table-header-buttons .search_box{
		border: 1px solid rgb(183, 181, 181);
		background: var(--input-background-color);
		border-radius: 6px; 
		display: flex;
		flex:2;
		margin-right: 10px;
		/* width: 200px; */
		/* box-shadow: 0 8px 6px -10px #b3c6ff; */
	}
	.table-header-buttons .search_box .dropdown{
		flex:1;
		border-right: 2px solid var(--input-border-color);
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
		background-color:var(--input-background-color);
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
		border-radius:5px;
		color:var(--link--color-invert);
	}
	.search_field{
		display:flex;
		flex: 3;
		position: relative;
	}

	::placeholder{
		font-family:var(--family-sans-serif),sans-serif;
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

	#refresh-button{
		cursor:pointer;
		color: var(--link--color-invert) !important;
		background-color:var(--app-secondary-color) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#refresh-button fa-icon{
		margin-bottom: 15%;
		margin-left: 50%;
		justify-content:center;
	}
	.searchBtn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		margin:5px;
		font-family:var(--family-sans-serif) !important;
    }
	.clearBtn{
		background-color:var(--app-secondary-color);
		margin:5px;
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#pdf-btn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#csv-btn{
		background-color:var(--link);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	#delete-btn{
		background-color:var(--app-secondary-color);
		color: var(--link--color-invert) !important;
		font-family:var(--family-sans-serif) !important;
	}
	
	@media screen and (max-width: 600px) {
		#pdf-btn{
			margin-right:0.5rem!important;
		}
		#search_area {
			flex-wrap: wrap;
			justify-content: center;
			min-width:100%;
			flex-wrap:wrap;
		}
		.search_box {
			min-width: 100%;
		}
		.searchBtn {
			margin-top:15px !important;
		}
		.clearBtn {
			margin-top:15px !important;
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
		.checkbox{
			margin-left:1.5%;
			margin-top:2.5%;
		}
	}

	@media(max-width:584px){
		#refresh-button{
			justify-content:center;
			display:flex;
		}
		#refresh-button fa-icon{
			margin-bottom:5%;   
			margin-left:45%;     	
			margin-right:auto;  
			justify-content:center;
		}
	}
`;
