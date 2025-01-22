
import {css} from 'lit-element';

export const AboutSectionStyles = css`
		.column{
			overflow:visible;	
		}
		
	.about-img-cont{
		position: relative;
	}

	.about-section {
		padding-top: 180px !important;
		padding-bottom: 180px !important;
		background-color: var(--paper);
	}
	
	.section {
		padding: 3rem 1.5rem;
	}

	.about-img-cont .dec-bg{
		width: 500px;
		height: 500px;
		background-color: var(--primary);
		opacity: .4;
		border-radius: 20px;
		position: absolute;
	}
	.about-img-cont .dec-img_fg {
		opacity: 1;
		/* top: -30px; */
		left: 68px;
		width: 472px;
		height: 435px;
		background-color: var(--primary);
		/* opacity: .4; */
		border-radius: 20px;
		position: absolute;
	}
	
	
	
	.about-img-cont .dec-img_fg img{
		object-fit: cover;
		height: 100%;
		border-radius: 20px;
	}
	.about-cont{
		align-items: center;
		height: 500px;
	}
	.about-cont .cont{
		margin-top: 30px;
		color:#4e4e4e;
	}

	/*animations*/

	.animate1{
		opacity:0;
		transform:translateX(-40px);
		transition:0.7s all ease-in-out;
	}
	.animate1-appear{
		opacity: 1;
		transform:translateX(0px);
	}
	.animate2 {
		opacity: 0;
		transform: translateY(40px);
		transition: 1s all ease-in-out;
	}
	.animate2-appear{
		opacity: 1;
		transform:translateY(0px);
	}

	.animate3{
		opacity:0;
		transform:translateX(80px);
		transition:1s all ease-in-out;
	}
	.animate3-appear{
		opacity: 1;
		transform:translateX(0px);
	}
	@media screen and (max-width: 1370px){
		.about-img-cont .dec-img_fg{
			width: 400px;
			height: 400px;
			left: 70px;
		}
		.about-img-cont .dec-bg {
			width: 400px;
			height: 400px;
		} 
	}
	@media screen and (max-width: 1030px){
		/* .about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
			position: relative;
		}
		.about-img-cont .dec-bg{
			display: none;
		} */
		.about-img-cont .dec-img_fg{
			width: 300px;
			height: 300px;
			left: 70px;
		}
		.about-img-cont .dec-bg {
			width: 300px;
			height: 300px;
		} 
		.about-cont{
			margin-top: 89px;
			padding: 0px 65px;
		}
	}
	@media screen and (max-width: 500px){
		.about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
			position: relative;
		}
		.about-img-cont .dec-bg{
			display: none;
		}
		.about-img-cont .dec-img_fg{
			left: 0px;
			top: 0;
		}
		.section {
			padding: 1rem 0.5rem !important;
		}
		.about-cont {
			margin-top: 20px;
			padding: 0 10px;
			align-items: flex-start;
			height: fit-content;
		}
		#column2 {
			padding: 0;
		}
	}
`;
