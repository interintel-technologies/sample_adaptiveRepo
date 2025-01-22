
import {css} from 'lit-element';

export const DatalistCalenderStyles = css`
	#from-date-title{
		border-bottom: 2px solid var(--info);
		padding-bottom: 4px;
		cursor:pointer;
	}
	#to-date-title{
		border-bottom: 2px solid var(--link);
		padding-bottom: 4px;
		cursor:pointer;
	}
	.from-arrow-down{
		display:block;
		margin-right: 22px;
		padding-left: 22px;
	}
	.from-arrow-right{
		display:none;
		margin-right: auto;
		padding-left: 5px;
		margin-left: auto;
	}
	#date-title{
		text-align: center;
	}
	.date-range{
		display:flex;
		justify-content:space-between;
		flex-direction:row;
	}
	.is-hidden{
		display:none;
	}
	.calender-block{
		position: absolute;
		display: none;
		top: 5%;
		padding: 0;
		width: 25%;
		right: .5rem;
		background: #fff;
		z-index: 1;
		box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-o-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-ms-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
	}
	.days li.active {
		color: white !important;
		padding: 0px;
	}
	.datalist-title{
		position: relative;
		padding: 4px;
	}
	.datalist-column-header{
		position: relative;
		margin-bottom:8px;
	}
	.datalist-title::after{
		position: absolute;
		content: '';
		width: 5px;
		height: 5px;
		border-left: 2px solid rgb(108, 122, 137);
		border-bottom: 2px solid rgb(108, 122, 137);
		transform: rotate(-45deg);
		right: 15px;
		top: 1px;
	}
	.datalist-dropdown{
		// width: 258px;
		position: absolute;
		display: none;
		top: 81px;
		padding: 0;
		background: #fff;
		box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-o-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
		-ms-box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);
	}
	.datalist-dropdown ul{
		list-style-type: none;
		width: 100%;
	}
	.datalist-dropdown ul li{
		width: 100%;
		padding: 0!important;
		padding-inline-start: 40px;
	}
	.datalist-dropdown ul li a{
		padding: 10px 15px;
		color: rgb(108, 122, 137);
		width: 88%;
		display: inline-block;
	}
	.datalist-dropdown ul li:hover{
		background: var(--app-default-color);
	}
	.datalist-dropdown ul li:hover a{
		color: #fff;
	}
	.active{
		background: var(--info);
		color: #fff!important;
	}
	.from-active{
		background-color:var(--info);
		color: #fff!important;
	}
	.to-active{
		background-color:var(--link);
		color: #fff !important;
	}
	.no-select{
		cursor: not-allowed !important;
	}
	.calender-block{
		position: absolute;
		display:none
	}
	#date-title{
		text-align:center!important;

	}
	.date-range{
		display: flex;
		justify-content: space-evenly;
	
	}
	.calendar-select{
		border: 1px solid #e5e5e5;
		border-radius: 6px;
		position: relative;
	}
	.calendar-select-header{
		width: 100%;
		background: #fff;
		padding: 10px;
		position: relative;
		cursor: pointer;
		border-radius: 6px;
	}
	.arrow{
		position: relative;
	}
	.calendar-select-header::after{
		content: '';
		width: 8px;
		height: 8px;
		border-left: 2px solid #4a4a4a;
		border-bottom: 2px solid #4a4a4a;
		border-right: 2px solid transparent;
		border-top: 2px solid transparent;
		position: absolute;
		transform: rotate(-43deg);
		top: 13px;
		right: 23px;
	}
	.calendar-select-header p{
		font-size: 14px;
		font-weight: 500;
	}
	.calendar-select-body{
		margin-top: 15px;
		border-radius: 6px;
		display: block;
		z-index: 9999;
		border: 1px solid #e5e5e5;
		position: absolute;
	}/
	.calendar-select-body.cal-active{
		display: block;
	}
	.calendar-select-body .month {
		padding: 10px 15px;
		width: 100%;
		background: #fff;
	}

	.calendar-select-body .month ul {
		margin: 0;
		padding: 0;
	}

	.calendar-select-body .month ul li {
		color: #013243;
		font-size: 14px;
		text-transform: capitalize;
		letter-spacing: 3px;
		font-weight: 500;
	}
	.weekdays {
		margin: 0;
		padding: 10px 0;
		background-color: #fff;
	}
	.weekdays li {
		display: inline-block;
		width: 13%!important;
		color: #013243;
		font-size: 10px;
		text-align: center;
	}
	.days {
		padding: 10px 0;
		background: #fff;
		margin: 0;
	}
	.days li, .weekdays li {
		list-style-type: none;
		display: inline-block;
		width: 13.5%;
		text-align: center;
		margin-bottom: 5px;
		font-size:12px;
		color: #013243;
		cursor: pointer;
	}
	.days li.active {
		background: var(--info);
		color: white !important;
	}
	.next, .prev {
		cursor: pointer;
	}
	.monthAndYear {
		cursor: pointer;
	}
	.month-calender {
		padding: 10px 0;
		background: #fff;
		margin: 0;
		display:none;
	}
	.month-calender li {
		list-style-type: none;
		display: inline-block;
		width: 13.5%;
		text-align: center;
		margin-bottom: 5px;
		font-size:12px;
		color: #013243;
		cursor: pointer;
	}
	#calender-start{
		padding: 10px 8px;
	}
	.prev{
		margin-right: 10px;
	}
	.month-calender li.active {
		padding: 5px;
		background:var(--info);
		color: white !important;
		/* border-radius: 50%; */
	}
	/* Add media queries for smaller screens */
	@media screen and (max-width:720px) {
		.weekdays li, .days li {
			width: 12.1%;
		}
	}
	@media screen and (max-width:522px) {
		.weekdays li, .days li {
			width: 11.1%;
		}
	}
	@media screen and (max-width:522px){
		.days li{
			width: 12.1%;
		}
	}

	@media screen and (max-width: 420px) {
		.weekdays li{
			width: 10.5%!important;
		}
		.days li {
			width: 12.5%;
		}
		.days li .active {
			padding: 2px;
		}
	}
	@media screen and (max-width: 320px) {
		.weekdays li{
			width: 10%!important;
		}
	}
	@media screen and (max-width: 360px) {
		.weekdays li{
			width: 10.4%!important;
		}
	}
	@media screen and (max-width: 290px) {
		.weekdays li, .days li {
			width: 12.2%;
		}
	}
	@media screen and (min-width: 426px){
		.weekdays li{
			width: 11.1%!important;
		}
	}
	@media screen and (min-width: 722px){
		.weekdays li{
			width: 12.5%!important;
		}
	}
	@media screen and (min-width: 1025px){
		.weekdays li{
			width: 13%!important;
		}
	}
`;
