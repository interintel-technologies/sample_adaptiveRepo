
import {css} from 'lit-element';

export const GroupedSelectStyles = css`
	.center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.account-select{
		position: relative;
		-moz-user-select: none; 
		-webkit-user-select: none; 
		-ms-user-select:none; 
		user-select:none;
		-o-user-select:none;
	}
	.account-select .account-header{
		background-color: var(--input-background-color);
		padding:0 20px 0 10px;
		position: relative;
		display:inline-block;
		cursor: pointer;
		width: 100%;
		height:40px;
		border-radius: 4px;
	}
	.account-header p span{
		color: #6c7a89;
	}
	.account-select .account-header::after{
		content: '';
		width: 8px;
		height: 8px;
		border-left: 2px solid #4a4a4a;
		border-bottom: 2px solid #4a4a4a;
		border-right: 2px solid transparent;
		border-top: 2px solid transparent;
		position: absolute;
		transform: rotate(-43deg);
		top: 15px;
		right:15px;
	}
	.account-item{
		padding: 7px;
	}
	.account-item .profile-pic img{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.account-item .accout-details p{
		font-size: 14px;
		font-weight: 500;
	}
	.account-item .accout-details p span{
		font-weight: lighter;
	}
	.account-body{
		background: var(--md-sys-color-surfaceContainerLowest);;
		display: none;
		position:absolute;
		padding: 10px 20px 10px 10px;
		width: 100%;
		z-index:5;
		box-shadow:var(--global-box-shadow);
	}
	h5,h6 {
		margin: 0 10px!important;
	}
	.account-body ul li{
		cursor: pointer;
		border-bottom: 1px solid #ececec;
		list-style: none;
	}
	.list-active h6{
		color: var(--link);
	}
	.list-active adaptive-ui-icon{
		fill:var(--link);
	}
	.account-body ul li:last-child{
		border-bottom: 0 solid transparent;
	}
`;
