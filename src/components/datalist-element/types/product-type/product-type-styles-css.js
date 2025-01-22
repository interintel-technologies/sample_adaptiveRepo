import { css } from 'lit-element';

export const ProductTypeStyles = css`
    .image {
        width: 180px;
        height: 150px;
        object-fit: contain;
    }

    .radio {
        position: relative;
        display: inline-block;
        padding-left:30px;
        cursor:pointer;
    }

    .radio input[type="radio"] {
        display:none;

    }

    .radio span {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 3px solid var(--app-default-color);
        display:block;
        position: absolute;
        left:0;
        top:-18px;
    }

    .radio span:after {
        content:"";
        height: 11px;
        width: 11px;
        background: var(--app-default-color);
        display:block;
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%) scale(0);
        border-radius:50%;
        transition: 300ms ease-in-out 0s;

    }

    .radio input[type="radio"]:checked ~ span:after {
        transform: translate(-50%,-50%) scale(1);

    }
    tbody tr{
    background-color:var(--input-background-color) !important;
 
}
.table-container{
    max-height: 80vh;
     overflow-y: auto;
}

.table-container table.dt-table tr td{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
}

tr td::before{
    margin-right:5px;
}

th{
    background-color:var(--input-background-color);
    color:var(--grey-darker) !important;
    justify-content:center;
    font-family:var(--family-sans-serif),sans-serif !important;
    border-bottom:1px solid var(--input-border-color) !important;
    border-top:1px solid var(--input-border-color) !important;
}
paper-checkbox #checkbox{
    border-color:var(--input-border-color) !important;

}
paper-checkbox #checkbox.checked{
    background-color: var(--link) !important;
    border-color: var(--link) !important;
}
@media(max-width:1024px){
    paper-checkbox{
        transform:translateY(-1.7rem) translateX(-2.1rem) !important;
        margin-right:-1.2rem;
    }
}
.table-header-buttons .search_box .dropdown{
		flex:1;
		color: var(--grey-darker);
		position: relative;
		cursor: pointer;
		border-radius:0px;
		border-top-right-radius:0px;
		border-bottom-right-radius:0px;
		background-color:var(--input-background-color);
		font-family:var(--family-sans-serif),sans-serif !important;
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
		background-color:var(--app-secondary-color);	
		color:var(--link--color-invert)
		
	}
	.actionCol{
		justify-content: flex-end;
		padding-left:0.45rem;
		padding-right:0.95rem;
	}
	.clearBtn{
		background-color:var(--app-secondary-color);
		color:var(--link--color-invert) !important;
	}
	.submitBtn{
		background-color:var(--link);
		color:var(--link--color-invert);
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
   
`