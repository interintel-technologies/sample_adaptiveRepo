
import {css} from 'lit-element';

export const InboxTypeStyles = css`
	td {
		font-family: Raleway;
		font-size: 12px;
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: 0.86px;
		color: #6c4c9b;
	}
	#icon-delete {
		margin-left: -90px;
		margin-top: -10px;
	}
	#icon-message {
		margin-left: -120px;
	}
	#first-row {
		background-color: #fff;
	}
	.active-row {
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
		background-color: #fff; 
		border-left: 5px solid #419588;  
	}
	.active-color {
		color: #419588;
	}
	.normal-tr{
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
	}
	.default-start{
		fill: #6e6e36;
		height: 17px;
		width: 19px;
	}
	.hidden{
		display: none;
		visibility: hidden;
	}
	.visible {
		display: block;
		visibility: visible;
	}
	.overlay {
		background-color: rgba(170,170,170,0.6);
	}
	.pointer{
		cursor:pointer;
	}
	.hide-action{
		visibility: hidden;
	}
	.unhide-action{
		visibility: visible;
	}
`;