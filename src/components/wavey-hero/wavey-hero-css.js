import {css} from 'lit-element'
export const WaveyHeroElementStyles = css`
.wave-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--md-sys-color-onPrimary);
  /* background: linear-gradient(to bottom right, var(--primary) 20%,var(--md-sys-color-onPrimary) 100%,var(--primary) 50%); */
  background:radial-gradient(circle at 1% 10%, var(--primary), transparent 25%),
              radial-gradient(circle at 50% 70%, var(--md-sys-color-onPrimary), transparent 95%),
              radial-gradient(circle at 95% 95%, var(--primary), transparent 25%);
  padding-top: 2rem;

}

.wave {
  display: block;
  position: relative;
  height: 40px;
  width: 100%;
  background: rgb(57, 27, 112);
  transform: scale(1, 1);
}

.wave:before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: white;
  right: -25%;
  top: 20px;
}

.wave:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: rgb(57, 27, 112);
  left: -25%;
  top: -240px;
  clip-path: ellipse(100% 15% at -15% 100%);
}

.hero-titles{
    /* width: 567px; */
    padding: 70px;
}
.hero-title{
  font-family:var(--family-sans-serif) !important;
    font-size: 3rem!important;
    font-weight: 700!important;
    line-height: 58px!important;
    letter-spacing: 0em;
    text-align: left;
}
.hero-subtitle {
  font-family:var(--family-sans-serif) !important;
    font-size: 1.5rem!important;
    font-weight: 400!important;
    line-height: 29px!important;
    letter-spacing: 0em;
    text-align: left;
}
.hero-button{
    border-radius:40px;
    font-weight:700;
    background-color:var(--primary);
    color:var(--white);
    border:none;
    padding-left:2rem;
    padding-right:2rem;
}
.hero-button:hover{
  color:var(--white);
}
.is-vcentered{
  margin-top:auto;
  margin-bottom:auto;
  max-height: 85vh;
}
.image{
  width:95%;
  object-fit:contain;
}
.content h2 {
  margin-bottom:3.5rem;
}
#imgCol{
  padding:2.5rem;
}
@media(max-width:768px){
  .wave-container {
    padding-top:0;
  }
 
  .is-vcentered{
    max-height: none;
    height:auto !important;
  }
  .hero-titles {
    padding:4.5rem 1.5rem 0 1.5rem !important;

  }
  .image{
    width:100%;
    margin-top: -3rem;
    margin-left:-2rem;
  }
  #imgCol{
    padding-top:0 !important;
  }
}
`