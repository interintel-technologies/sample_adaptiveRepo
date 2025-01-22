import { css } from 'lit-element';

export const AppointmentElementStyles = css`


.appointment-area .appointment-form {
	position: relative;
	z-index: 1;
}
.appointment-area .appointment-form label {
	display: block;
	font-size: 16px;
	margin-bottom: 10px;
}
.appointment-area .appointment-form input {
	display: block;
	width: 100%;
	border: 1px solid #e8edf1;
	height: 50px;
	padding: 0 15px;
}
.appointment-area .appointment-form input:focus {
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}
.appointment-area .appointment-form textarea {
	display: block;
	width: 100%;
	border: 1px solid #e8edf1;
	padding: 15px 15px;
	height: 150px;
	margin-bottom: 50px;
}
.appointment-area .appointment-form .form-group {
	margin-bottom: 25px;
}
.appointment-area form {
	margin-top: 24px;
	display: inline-block;
	width: 100%;
}
.appointment-area .card {
	border: none;
	border-radius: 0;
}
.appointment-area .card .card-header {
	border-radius: 0;
	border: none;
}
.appointment-area .card .card-header:first-child {
	border-radius: 0;
}
.appointment-area .card .btn-link.collapsed {
	border-bottom: 1px solid #e9ecef;
	font-weight: 400;
	font-size: 16px;
	width: 100%;
	text-align: left;
	box-shadow: none;
	white-space: normal;
	transition: all 300ms linear 0s;
}
.appointment-area .card .btn-link.collapsed:hover {
	text-decoration: none;
}
@media (max-width: 1199px) {
	.appointment-area .card .btn-link.collapsed {
		font-size: 14px;
	}
}
.appointment-area .card .card-body {
	font-weight: 300;
	font-size: 14px;
	line-height: 27px;
}
.appointment-area .card .card-header {
	padding: 0;
}
.appointment-area .card .btn-link {
	font-weight: 400;

	font-size: 16px;
	width: 100%;
	text-align: left;
	padding: 25px 0;
	white-space: normal;
	transition: all 300ms linear 0s;
}
.appointment-area .card .btn-link:hover {
	text-decoration: none;
}
@media (max-width: 1199px) {
	.appointment-area .card .btn-link {
		font-size: 14px;
	}
}
.appointment-area h3 {
	font-size: 24px;
	
	text-transform: capitalize;
	margin-bottom: 35px;
}
.appointment-area .appointment-inner {
	padding: 65px 2%;
	box-shadow: 3.517px -8.285px 30px 0px rgba(12, 58, 132, 0.15);
	background:var(--paper);

	z-index: 11;
	position: relative;
}
@media (max-width: 991px) {
	.appointment-area .appointment-inner {
		padding: 65px 30px;
	}
}

@media (max-width: 1199px) {
	.appointment-inner .accordion {
		margin-bottom: 50px;
	}
}
.appointment-area .card h5 .btn.collapsed::after {
	font-family: 'themify';
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	right: 6px;
	position: absolute;
	top: 30px;
}
@media (max-width: 600px) {
	.appointment-area .card h5 .btn.collapsed::after {
		display: none;
	}
}

.appointment-area .card h5 .btn::after {
	
	font-family: 'themify';
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	right: 6px;
	position: absolute;
	top: 30px;
}
@media (max-width: 600px) {
	.appointment-area .card h5 .btn::after {
		display: none;
	}
}















`;