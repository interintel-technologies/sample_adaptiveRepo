/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.

*/

import {html, css} from 'lit-element';

export const Reset = css`
/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */
blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*{box-sizing:inherit}:after,:before{box-sizing:inherit}audio,embed,img,object,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}html{background-color:#fff;font-size:14px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:Inconsolata,Consolas,Monaco,monospace}body{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}a{color:#00d1b2;cursor:pointer;text-decoration:none;-webkit-transition:none 86ms ease-out;transition:none 86ms ease-out}a:hover{color:#363636}code{background-color:#f5f5f5;color:#ff3860;font-size:.8em;font-weight:400;padding:.25em .5em .25em}hr{background-color:#dbdbdb;border:none;display:block;height:1px;margin:1.5rem 0}img{max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.8em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}pre{/*background-color:#f5f5f5*/;color:#4a4a4a;/*font-size:.8em*/;white-space:pre;word-wrap:normal}pre code{background:0 0;color:inherit;display:block;/*font-size:1.4em;*/overflow-x:auto;padding:1.25rem 1.5rem}
`;


export const InputStyles = html`
<style>
        .Basic-input-fields {
            width: 195px;
            height: 40px;
            font-family: TTNormsPro;
            font-size: 26px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.54;
            letter-spacing: normal;
            color: #013243;
        }

        .input-padding {
            /*height: 100%;*/
            padding: 8px 12px 12px 12px;

        }


        .input-margin {

            margin: 8px 0 12px 12px;

        }

        .default-2px {
            width: 249px;
            height: 40px;
            border-radius: 2px;
            border: solid 1px var(--pinkish-grey);

        }

        .active-2px {
            width: 249px;
            height: 40px;
            border-radius: 2px;
            border: solid 1px var(--pinkish-grey);
        }

        .success-2px {
            width: 249px;
            height: 40px;
            border-radius: 2px;
            border: solid 1px #2ecc71;
        }

        .error-4px {
            width: 249px;
            height: 40px;
            border-radius: 4px;
            border: solid 2px #e74c3c;
        }

        .Default-Behaviour {
            width: 99px;
            height: 16px;
            font-family: TTNormsPro;
            font-size: 12px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: #013243;


            /*added*/

            margin-right: 88px;

        }


        .complete {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }

        .warning {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }

        .icon {
            margin: 11px 11px 11px 0;
        }

        .icon-prefix {
            margin: 11px 0 11px 11px;
        }

        .Your-text {
            width: 88px;
            /* height: 20px;*/
            font-family: TTNormsPro;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: #013243;
        }

        .Username-or-Password {
            width: 186px;
            height: 13px;
            font-family: ProximaNova;
            font-size: 12px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: #d0021b;
        }

        .Label-Name {
            width: 77px;
            height: 18px;
            font-family: TTNormsPro;
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.43;
            letter-spacing: normal;
            color: #013243;
        }

        .phone {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }

        .Send-us-your-thought {
  width: 160px;
  height: 24px;
  font-family: TTNormsPro;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #013243;
}


        /**/

        .input-field {
            margin-bottom: 10px;
        }

</style>`;

export const Fonts = css`
/*     Generated by Zeplin
    Copyright (C) 2019 - present Zeplin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

.LargeDark172ptRegularCentre-alinged {
  font-family: HKGrotesk;
  font-size: 172px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6c7a89;
}

.LargeDark64ptBoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 64px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  color: #013243;
}

.LargeDark64ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 64px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.LargeWhite64ptBoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 64px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  color: var(--white);
}

.LargeWhite64ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 64px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.LargeDark54ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.LargeDark54ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.LargeWhite54ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.LargeWhite54ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.LargeDark54ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.LargeDark54ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.LargeWhite54ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.LargeWhite54ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 54px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H2DarkLeft-Alignment {
  font-family: Montserrat;
  font-size: 50px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.H2WhiteCentered {
  font-family: Montserrat;
  font-size: 50px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.LargeDark45ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #013243;
}

.LargeDark45ptSemi-Boldcentre-aligned-4 {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.LargeWhite45ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.24;
  letter-spacing: normal;
  color: var(--white);
}

.LargeWhite45ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.LargeDark45ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #013243;
}

.LargeDark45ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.LargeWhite45ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: var(--white);
}

.LargeWhite45ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 45px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H3DarkCentered {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-grey);
}

.H3DarkLeft-Alignment {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.H3WhiteLeft-Alignment {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: var(--white);
}

.H1Dark36ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.H1Dark36ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H1White36ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.H1White36ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H1Dark36ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H1White36ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.H1White36ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H1Dark36ptRegularLeft-aligned {
  font-family: TTNormsPro;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.H4DarkCentered {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-grey);
}

.H4WhiteCentered {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Black-Title-Left {
  font-family: NunitoSans;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: var(--black);
}

.H2Dark32ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #013243;
}

.H2Dark32ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H2White32ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: var(--white);
}

.H2White32ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H2Dark32ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  color: #013243;
}

.H2Dark32ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H2White32ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  color: var(--white);
}

.H2White32ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H5DarkLeft-Alignment {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.H5WhiteLeft-Alignment {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: var(--white);
}

.H3Dark26ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #013243;
}

.H3Dark26ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H3White26ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: var(--white);
}

.H3White26ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.H3Dark26ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #013243;
}

.H3Dark26ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.H3White26ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: var(--white);
}

.H3White26ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.TitleFont-1WhiteBoldBold---Centered {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.TitleFont-1WhiteBoldBold---Left-Alignment {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.TitleFont-2DarkRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.TitleFont-2WhiteRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.Black-Lead-Left-Default {
  font-family: Lato;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--dark);
}

.Body-LargeDark20ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #013243;
}

.Body-LargeDark20ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.Body-LargeWhite20ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: var(--white);
}

.Body-LargeWhite20ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Body-LargeDark20ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #013243;
}

.Body-LargeDark20ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.Body-LargeWhite20ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: var(--white);
}

.Body-LargeWhite20ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Black-Custom-Left {
  font-family: NunitoSans;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
}

.SubtitleFont-2WhiteBoldBold---Left-Alignment {
  font-family: Domine;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: var(--white);
}

.Heading-3 {
  font-family: Lato;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: 1px;
  color: var(--greyish-brown);
}

.H2WhiteBoldBold---Centered {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.SubtitleFont-2DarkRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.SubtitleFont-1WhiteRegularRegular---Left-Alignment {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: var(--white);
}

.Social-Media-AbbreviationsDark {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 1.2px;
  text-align: center;
  color: #013243;
}

.Social-Media-AbbreviationsWhite {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 1.2px;
  text-align: center;
  color: var(--white);
}

.Black-Bold-Default-Left-Default {
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark);
}

.White-Bold-Default-Center-Default {
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.ParagraphFont-1DarkBoldBold---Centered {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-grey);
}

.ParagraphFont-1DarkBoldBold---Left-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.ParagraphFont-1DarkBoldBold---Right-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: var(--dark-grey);
}

.ParagraphFont-1WhiteBoldBold---Centered {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.BodyDark16ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #013243;
}

.BodyDark16ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.BodyWhite16ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--white);
}

.BodyWhite16ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.ParagraphFont-1DarkMediumMedium---Left-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.ParagraphFont-2DarkRegularRegular---Centered {
  font-family: Domine;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-grey);
}

.ParagraphFont-2DarkRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.ParagraphFont-2WhiteRegularRegular---Centered {
  font-family: Domine;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.BodyDark16ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #013243;
}

.BodyDark16ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.BodyWhite16ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--white);
}

.BodyWhite16ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Black-Regular-Default-Center-Semi-transparent {
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: rgba(17, 15, 36, 0.4);
}

.Black-Regular-Default-Left-Default {
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark);
}

.Black-Regular-Default-Left-Semi-transparent {
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(17, 15, 36, 0.4);
}

.Paragraph-Normal {
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: 1px;
  color: var(--greyish-brown);
}

.ParagraphFont-1DarkRegularRegular---Left-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.ParagraphFont-1DarkRegularRegular---Right-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: var(--dark-grey);
}

.ParagraphFont-1WhiteRegularRegular---Centered {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.ParagraphFont-1WhiteRegularRegular---Left-Alignment {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--white);
}

.Button-Dim {
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--white);
}

.Button-Secondary {
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--greyish-brown);
}

header {
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: var(--greyish-brown);
}

.Sidebar-Body {
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: var(--white);
}

.Dropdown-ActiveDark14ptSemi-BoldrLeft-aligned-2 {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #013243;
}

.Form-Enter-TextDark14ptSemi-BoldrLeft-aligned {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #013243;
}

.Form-Enter-TextLight14ptRegularCentred-2 {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Form-Enter-TextWhite14ptSemi-BoldrLeft-aligned {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: var(--white);
}

.Form-Enter-TextDark14ptSemi-BoldrCentred {
  font-family: ProximaNova;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #6c7a89;
}

.DescriptionFont-1DarkMediumMedium---Left-Alignment {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.DescriptionFont-1WhiteMediumMedium---Left-Alignment {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--white);
}

.DescriptionFont-1WhiteMediumMedium---Right-Alignment {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: right;
  color: var(--white);
}

.DescriptionFont-2DarkRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.DescriptionFont-2WhiteRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--white);
}

.Form-Enter-TextDark14ptRegularCentred {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.Form-Enter-TextDark14ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #6c7a89;
}

.Black-Regular-M-Right-Semi-transparent {
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: right;
  color: rgba(17, 15, 36, 0.4);
}

.Body-Dim {
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: var(--greyish-brown);
}

.Body-Centered {
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--greyish-brown);
}

.Dropdown {
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: right;
  color: var(--greyish-brown);
}

.DescriptionFont-1DarkRegularRegular---Centered {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark-grey);
}

.DescriptionFont-1DarkRegularRegular---Left-Alignment {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.DescriptionFont-1WhiteRegularRegular---Centered {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.DescriptionFont-1WhiteRegularRegular---Left-Alignment {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--white);
}

.Grey-Description-Left {
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #9b9b9b;
}

.Dropdown-ActiveDark14ptSemi-BoldrLeft-aligned-3 {
  font-family: ProximaNova;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #6c7a89;
}

.Form-Enter-TextWhite14ptRegularLeft-aligned-2 {
  font-family: ProximaNova;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: var(--white);
}

.Label-Active {
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: var(--greyish-brown);
}

.Label-Error {
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: var(--grapefruit);
}

.Label-Centered {
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--greyish-brown);
}

.Sidebar-Label {
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: var(--white);
}

.Small-TextFont-1DarkBoldBold---Left-Alignment {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.ButtonDark12ptSemi-Boldcentre-aligned-3 {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.9px;
  text-align: center;
  color: #013243;
}

.ButtonWhite12ptSemi-Boldcentre-aligned-2 {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.9px;
  text-align: center;
  color: var(--white);
}

.TINY-10PTWhiteSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.TINY-10PTWhiteSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Very-SmallDark12ptSemi-BoldLeft-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.Very-SmallDark12ptSemi-Boldcentre-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.Small-TextFont-2DarkRegularRegular---Left-Alignment {
  font-family: Domine;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.83;
  letter-spacing: normal;
  color: var(--dark-grey);
}

.TINY-10PTWhiteRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--white);
}

.TINY-10PTWhiteRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}

.Very-SmallDark12ptRegularLeft-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #013243;
}

.Very-SmallDark12ptRegularcentre-aligned {
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #013243;
}

.Very-SmallError12ptRegularLeft-aligned-2 {
  font-family: ProximaNova;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #d0021b;
}

.TINY-10PTALL-CAPSDARKSEMI-BOLDLEFT-ALIGNED {
  font-family: HKGrotesk;
  font-size: 10px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  color: #013243;
}

.TINY-10PTALL-CAPSDARKSEMI-BOLDCENTRE-ALIGNED {
  font-family: HKGrotesk;
  font-size: 10px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
  color: #013243;
}

.TINY-10PTALL-CAPSDARKSEMI-BOLDRIGHT-ALIGNED {
  font-family: HKGrotesk;
  font-size: 10px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: right;
  color: #6c7a89;
}

.TINY-10PTALL-CAPSWHITESEMI-BOLDCENTRE-ALIGNED {
  font-family: HKGrotesk;
  font-size: 10px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
  color: var(--white);
}

.TINY-10PTALL-CAPSWHITESEMI-BOLDLEFT-ALIGNED {
  font-family: HKGrotesk;
  font-size: 10px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  color: var(--white);
}


`;
export const Colors = css`
/*     Generated by Zeplin
    Copyright (C) 2019 - present Zeplin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

:host {
  --dusk-blue: #2a57a0;
  --deep-sky-blue: #157cf8;
  --blue: #0040bf;
  --pinkish-grey: #b7b5b5;
  --bright-teal: #1aeec2;
  --warm-blue: #565bce;
  --pinky-red: #fc2249;
  --violet: #9013fe;
  --bright-sky-blue: #00c6ff;
  --white: #ffffff;
  --black: #000000;
  --very-light-blue: #e0edf9;
  --ice: #dffbf5;
  --ice-blue: #e3f9ff;
  --pale-lilac: #e6d2f8;
  --eggshell: #fcf6de;
  --light-pink: #ffd8df;
  --brownish-grey: #6f6f6f;
  --very-light-pink: #d5d5d5;
  --very-light-pink: #e7e7e7;
  --very-light-pink: #f3f3f3;
  --golden-yellow: #f8d21c;
  --lightblue: #75c5e2;
  --azure: #299ed8;
  --dark-sky-blue: #4ba9d4;
  --very-light-pink: #ededed;
  --amethyst: #a054c6;
  --charcoal-grey: #3d3d3f;
  --light-peach: #d4d3d3;
  --brown-grey: #acacac;
  --dusty-orange: #f2752e;
  --pale-lilac: #ececee;
  --dark-grey: #202124;
  --dark: #110f24;
  --white: #f6f6f6;
  --greyish-brown: #444444;
  --pale-grey: #f2f2f3;
  --greyish-brown-50: rgba(68, 68, 68, 0.5);
  --grapefruit: #e96a6a;
  --sky-blue-20: rgba(115, 169, 247, 0.2);
  --greyish-brown-10: rgba(68, 68, 68, 0.1);
  --maize: #edc84c;
  --dark: #283443;
  --soft-green: #67c892;
  --soft-green-20: rgba(103, 200, 146, 0.2);
  --green-teal: #11bf5a;
  --white-20: rgba(255, 255, 255, 0.2);
  --maize: #ffd543;
  --brownish-orange: #ce5b19;
  --white: #f9f9f9;
  --lipstick: #cb1c22;
  --blue-blue: #1e58bb;
}
`;

export const Grid = css`
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    
    margin-right: -15px;
    margin-left: -15px;
    
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}

.col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
}

.col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}

.col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

.col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}

.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}

.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}

.col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}

.col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}

.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

.order-first {
    -ms-flex-order: -1;
    order: -1;
}

.order-last {
    -ms-flex-order: 13;
    order: 13;
}

.order-0 {
    -ms-flex-order: 0;
    order: 0;
}

.order-1 {
    -ms-flex-order: 1;
    order: 1;
}

.order-2 {
    -ms-flex-order: 2;
    order: 2;
}

.order-3 {
    -ms-flex-order: 3;
    order: 3;
}

.order-4 {
    -ms-flex-order: 4;
    order: 4;
}

.order-5 {
    -ms-flex-order: 5;
    order: 5;
}

.order-6 {
    -ms-flex-order: 6;
    order: 6;
}

.order-7 {
    -ms-flex-order: 7;
    order: 7;
}

.order-8 {
    -ms-flex-order: 8;
    order: 8;
}

.order-9 {
    -ms-flex-order: 9;
    order: 9;
}

.order-10 {
    -ms-flex-order: 10;
    order: 10;
}

.order-11 {
    -ms-flex-order: 11;
    order: 11;
}

.order-12 {
    -ms-flex-order: 12;
    order: 12;
}

.offset-1 {
    margin-left: 8.333333%;
}

.offset-2 {
    margin-left: 16.666667%;
}

.offset-3 {
    margin-left: 25%;
}

.offset-4 {
    margin-left: 33.333333%;
}

.offset-5 {
    margin-left: 41.666667%;
}

.offset-6 {
    margin-left: 50%;
}

.offset-7 {
    margin-left: 58.333333%;
}

.offset-8 {
    margin-left: 66.666667%;
}

.offset-9 {
    margin-left: 75%;
}

.offset-10 {
    margin-left: 83.333333%;
}

.offset-11 {
    margin-left: 91.666667%;
}

@media (min-width: 576px) {
    .col-sm {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-sm-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }
    .col-sm-1 {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-sm-2 {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-sm-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-sm-5 {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-sm-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-sm-7 {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-sm-8 {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-sm-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-sm-10 {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-sm-11 {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-sm-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-sm-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-sm-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-sm-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-sm-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-sm-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-sm-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-sm-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-sm-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-sm-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-sm-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-sm-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-sm-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-sm-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-sm-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-sm-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-sm-0 {
        margin-left: 0;
    }
    .offset-sm-1 {
        margin-left: 8.333333%;
    }
    .offset-sm-2 {
        margin-left: 16.666667%;
    }
    .offset-sm-3 {
        margin-left: 25%;
    }
    .offset-sm-4 {
        margin-left: 33.333333%;
    }
    .offset-sm-5 {
        margin-left: 41.666667%;
    }
    .offset-sm-6 {
        margin-left: 50%;
    }
    .offset-sm-7 {
        margin-left: 58.333333%;
    }
    .offset-sm-8 {
        margin-left: 66.666667%;
    }
    .offset-sm-9 {
        margin-left: 75%;
    }
    .offset-sm-10 {
        margin-left: 83.333333%;
    }
    .offset-sm-11 {
        margin-left: 91.666667%;
    }
}

@media (min-width: 768px) {
    .col-md {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-md-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }
    .col-md-1 {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-md-2 {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-md-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-md-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-md-5 {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-md-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-md-7 {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-md-8 {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-md-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-md-10 {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-md-11 {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-md-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-md-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-md-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-md-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-md-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-md-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-md-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-md-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-md-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-md-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-md-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-md-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-md-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-md-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-md-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-md-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-md-0 {
        margin-left: 0;
    }
    .offset-md-1 {
        margin-left: 8.333333%;
    }
    .offset-md-2 {
        margin-left: 16.666667%;
    }
    .offset-md-3 {
        margin-left: 25%;
    }
    .offset-md-4 {
        margin-left: 33.333333%;
    }
    .offset-md-5 {
        margin-left: 41.666667%;
    }
    .offset-md-6 {
        margin-left: 50%;
    }
    .offset-md-7 {
        margin-left: 58.333333%;
    }
    .offset-md-8 {
        margin-left: 66.666667%;
    }
    .offset-md-9 {
        margin-left: 75%;
    }
    .offset-md-10 {
        margin-left: 83.333333%;
    }
    .offset-md-11 {
        margin-left: 91.666667%;
    }
}

@media (min-width: 992px) {
    .col-lg {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-lg-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }
    .col-lg-1 {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-lg-2 {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-lg-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lg-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-lg-5 {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-lg-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lg-7 {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-lg-8 {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-lg-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lg-10 {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-lg-11 {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-lg-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-lg-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-lg-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-lg-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-lg-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-lg-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-lg-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-lg-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-lg-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-lg-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-lg-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-lg-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-lg-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-lg-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-lg-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-lg-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-lg-0 {
        margin-left: 0;
    }
    .offset-lg-1 {
        margin-left: 8.333333%;
    }
    .offset-lg-2 {
        margin-left: 16.666667%;
    }
    .offset-lg-3 {
        margin-left: 25%;
    }
    .offset-lg-4 {
        margin-left: 33.333333%;
    }
    .offset-lg-5 {
        margin-left: 41.666667%;
    }
    .offset-lg-6 {
        margin-left: 50%;
    }
    .offset-lg-7 {
        margin-left: 58.333333%;
    }
    .offset-lg-8 {
        margin-left: 66.666667%;
    }
    .offset-lg-9 {
        margin-left: 75%;
    }
    .offset-lg-10 {
        margin-left: 83.333333%;
    }
    .offset-lg-11 {
        margin-left: 91.666667%;
    }
}

@media (min-width: 1200px) {
    .col-xl {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-xl-auto {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }
    .col-xl-1 {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }
    .col-xl-2 {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .col-xl-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-xl-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-xl-5 {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
    .col-xl-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-xl-7 {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-xl-8 {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-xl-9 {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-xl-10 {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-xl-11 {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-xl-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-xl-first {
        -ms-flex-order: -1;
        order: -1;
    }
    .order-xl-last {
        -ms-flex-order: 13;
        order: 13;
    }
    .order-xl-0 {
        -ms-flex-order: 0;
        order: 0;
    }
    .order-xl-1 {
        -ms-flex-order: 1;
        order: 1;
    }
    .order-xl-2 {
        -ms-flex-order: 2;
        order: 2;
    }
    .order-xl-3 {
        -ms-flex-order: 3;
        order: 3;
    }
    .order-xl-4 {
        -ms-flex-order: 4;
        order: 4;
    }
    .order-xl-5 {
        -ms-flex-order: 5;
        order: 5;
    }
    .order-xl-6 {
        -ms-flex-order: 6;
        order: 6;
    }
    .order-xl-7 {
        -ms-flex-order: 7;
        order: 7;
    }
    .order-xl-8 {
        -ms-flex-order: 8;
        order: 8;
    }
    .order-xl-9 {
        -ms-flex-order: 9;
        order: 9;
    }
    .order-xl-10 {
        -ms-flex-order: 10;
        order: 10;
    }
    .order-xl-11 {
        -ms-flex-order: 11;
        order: 11;
    }
    .order-xl-12 {
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-xl-0 {
        margin-left: 0;
    }
    .offset-xl-1 {
        margin-left: 8.333333%;
    }
    .offset-xl-2 {
        margin-left: 16.666667%;
    }
    .offset-xl-3 {
        margin-left: 25%;
    }
    .offset-xl-4 {
        margin-left: 33.333333%;
    }
    .offset-xl-5 {
        margin-left: 41.666667%;
    }
    .offset-xl-6 {
        margin-left: 50%;
    }
    .offset-xl-7 {
        margin-left: 58.333333%;
    }
    .offset-xl-8 {
        margin-left: 66.666667%;
    }
    .offset-xl-9 {
        margin-left: 75%;
    }
    .offset-xl-10 {
        margin-left: 83.333333%;
    }
    .offset-xl-11 {
        margin-left: 91.666667%;
    }
}
`;

export const TooltipStyles = html`
<style>
    /* copied from https://www.w3schools.com/howto/howto_css_tooltip.asp */
  /* TODO application of shared styles, what happens to :host*/ 
  :host {
    
  }

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 80%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  
}
  
  
  
</style>
`;
