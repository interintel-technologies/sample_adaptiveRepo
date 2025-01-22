import { css } from 'lit-element';

export const SectionStyles = css`
:root{
  --header-color: #00c6ff;
  --light-pink: #fcf0e3;
  --dark-pink: #f36b7f;
  --main-color: #333333;
  --cta-color: #2566F2;
  --lighter-blue: #edf3ff;
  --light-blue: #9fbfff;
  --yellow: #f8cf61;
  --golden-yellow: #f8d21c;
  --primary-blue: #0040bf;
  --deep-sky-blue: #157cf8;
}
.center, .content{
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.landing-btn{
  outline: none;
  color: #fff;
  width: 170px;
  transition: all 0.5s;
  background-color: var(--cta-color);
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
  padding: 13px;
}
.landing-btn-borderd{
  border: 2px solid var(--dark-pink)!important;
  background: transparent!important;
  border-radius: 5px;
  font-size: 16px!important;
  line-height: 1.5;
  padding: 15px 50px!important;
  color: var(--dark-pink)!important;
}
.section.coffee-break{
background-color: #fcf0e3;
position: absolute;
width: 100%;
padding: 270px 0 100px 0;
}
.section.coffee-break-2{
background-color: #f9d9eb;
position: relative;
width: 100%;
padding: 270px 0 100px 0;
}
.section .section-content{
padding: 0 15px;
margin-bottom: 20px;
}
.section .section-content .section-sub-title p{
font-size: 20px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.2;
letter-spacing: 1px;
color: #f36b7f;
}
.section .section-content .heading .title{
font-size: 56px;
margin: 40px 0;
}
.padd a{
margin-top: 30px;
width: 50%;
padding: 13px 70px;
}

.section.landing-tiles{
padding: 140px 0;
/* margin-top: 767px; */
}
.section .custom-card{
border-radius: 10px;
padding: 20px;
border: 0 solid transparent!important;
box-shadow: 0 0 0 transparent!important;
}
.section .custom-card.card-1{
background-color: var(--lighter-blue);
}
.section .custom-card.card-2{
background-color: #daa2d8;
}
.section .custom-card.card-3{
background-color: var(--golden-yellow);
}
.section .custom-card .card-header{
border: 0 solid transparent;
box-shadow: 0 0 0 transparent;
}
.section .custom-card .card-header .icon-container{
width: 78px;
height: 78px;
border-radius: 50%;
margin: 30px;
}
.section .custom-card .card-header .icon-container.icon-1{
background-color: #157cf8

}
.section .custom-card .card-header .icon-container.icon-2{
background-color: #f8cf61
}
.section .custom-card .card-header .icon-container.icon-3{
background-color: #2566F2
}
.section-3-description p{
font-weight: bold;
font-size: 24px;
margin-top: 40px;
}
.icon-pair{
margin-bottom: 30px;
}
.icon-content-circle{
width: 40px;
height: 40px;
background-color: var(--dark-pink);
border-radius: 50%;
margin: 0 10px 0 0;
}
.section.blue-section{
color: #fff;
background-color: #75c5e2;
padding: 100px 0 100px 0;
}
.section.blue-section .blue-user .profile-content .profile-name{
font-size: 24px;
font-weight: bold;
line-height: 1.33;
}
.section.blue-section .blue-user .profile-content .profile-text{
opacity: .5;
font-size: 16px;
line-height: 1.5;
}
.communication-title-content .communication-title{
font-size: 56px;
font-weight: bold;
color: #333333;
line-height: 1.14;
}
.communincation-content .sub{
font-size: 20px;
color: #333333;
line-height: 1.6;
padding: 32px 0 23px 0;
width: 364px;
}
.communincation-content .content-text{
font-size: 16px;
color: #333333;
line-height: 1.5;
opacity: .5;
}
.section-menu ul li{
font-size: 16px;
font-weight: normal;
line-height: 1.5; 
text-align: right;
padding: 12px 0;
}
.section-menu ul li a{
opacity: .5;
color: #333333;
}
.break-line{
width: 100%;
height: 2px;
background-color: #000000;
opacity: 0.1;
}
.stats{
padding: 85px 0;
color: #333333;
}
.stats .stat-column .num{
font-size: 56px;
font-weight: bold;
}
.stats .stat-column .stat-desc{
font-size: 24px;
font-weight: bold;
}
.cards .card{
margin-bottom: 40px;
border-radius: 8px!important;
border: 0 solid transparent!important;
box-shadow: 0 0 0 transparent!important;
}
.card .content{
display: block;
align-content: flex-start;
align-items: flex-start;
justify-content: flex-start;
margin: 0;
}
.card .content .title{
font-size: 24px;
color: #333333;
font-weight: bold;
}
.section-text{
padding-top: 109px;
}
.section-text p{
opacity: .5;
font-size: 16px;
color: #333333;
line-height: 1.5;
margin-bottom: 40px;
}
/* .portfolio-image{
position: absolute;
top: -88px;
} */
.portfolio-name .title{
margin: 4px;
}
div.scroll{
margin-top: 58px;
}
div.scroll .dial{
width: 50px;
height: 50px;
border: 2px solid var(--dark-pink);
border-radius: 50%;
margin-right: 15px;
}
div.card-img{
border-radius: 8px;
width: 100%;
}
.blog-content .sub p{
font-size: 12px;
font-weight: bold; 
color: #333333;
line-height: 2;
padding-bottom: 15px;
padding-top: 10px;
}
.blog-content .title h1{
color: #333333;
line-height: 1.33;
font-size: 24px;
font-weight: bold;
}
.blog-content > p{
font-size: 16px;
opacity: .5;
color: #333333;
line-height: 1.5;
}
footer .footer-top{
background-color: #157cf8;
padding: 30px 0;
}
footer .footer-top .subscribe{
padding: 15px;
}
footer .footer-top .subscribe .title{
color: white;
font-weight: bold;
font-size: 40px;
line-height: 1.2;
margin-bottom: 2px;
}
footer .footer-top .subscribe .sub{
opacity: 0.5;
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
color: #fff;
padding: 0;
margin-top: 3px 0;
}
footer .footer-top .input{
margin-top: 35px;
padding: 21px 24px;
font-size: 14px;
}
footer .footer-top .btn button{
display: flex;
align-items: center;
color: #fff;
background-color: #0040bf;
font-size: 16px;
border-radius: 6px;
border: 0;
position: relative;
top: 39px;
left: 20px;
}
footer .footer-top .icons{
margin-top: 39px;
}
footer .footer-top .icons .icon{
border: 2px solid #fff;
border-radius: 50%;
width: 50px;
height: 50px;
margin-right: 10px;
}
footer .bottom-footer{
background-color: #0040bf;
padding: 40px 0;
color: #fff;
padding: 100px 0 0 0;
}
footer .bottom-footer .branding h1{
color: inherit;
font-size: 40px;
font-weight: bold;
text-transform: uppercase;
}
footer .bottom-footer .footer-links-content .title{
margin-bottom: 24px;
font-size: 16px;
color: inherit;
font-weight: bold;
}
footer .bottom-footer .footer-links-content .footer-links ul li a{
opacity: 0.5;
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
}
.footer-links ul li{
margin-bottom: 8px;
}
footer .sub-footer{
display: flex;
align-items: center;
justify-content: flex-end;
height: 115px;
}
footer .sub-footer a{
font-size: 16px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.5;
letter-spacing: normal;
text-align: right;
opacity: 1!important;
}
`;
