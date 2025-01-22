import {css} from 'lit-element';

export const HeroElement3Styles = css`
.hero-container {
    max-width: 100%;
    height: 100vh;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 80px;
    margin-top: 10px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative; /* Ensure hero container is relative to position children */
    overflow: hidden; /* Prevent overflow if necessary */
}

.container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative; /* Allow container content to layer on top of parallax */
}

.parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: 0px 3px 6px #00000029;
    filter: blur(7px);
}

.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--primary) !important;
    font-weight: bold;
    letter-spacing: .22px;
    font-size: 60px;
    max-width: 300px;
    text-align: left;
    line-height: 55px;
}

.mid-text {
    font-size:19px;
    font-weight: bold;
    margin-bottom:18px;
    color: var(--primary)!important;
}
.c-paragraph {
    font-size: 19px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
    max-width: 550px;
    text-align: left;
    color: #fff!important;
}
.str-btn {
    border-radius: 5px!important;
    color: #fff!important;
    margin-top: 30px;
    border: none!important;
    padding: 25px;
    font-size: 19px!important;
}

@media screen and (max-width: 414px) { 
    .c-title-xl {
        font-size: 65px;
    }
    .hero-column {
        margin-right: 66px !important;
    }
}

@media screen and (max-width: 375px) { 
    .c-title-xl {
        font-size: 55px;
    }
}

@media screen and (max-width: 360px) { 
    .c-title-xl {
        font-size: 50px;
    }
}

@media screen and (max-width: 320px) { 
    .c-title-xl {
        font-size: 45px;
    }
}
`;
