
import {css} from 'lit-element';

export const HeroElement13Styles = css`
.descriptionBox__content{
    padding: 0px;
    width: 100%;
    height: auto;
}
.content{
    flex-direction: column;
    align-items: center;
}
p {
    text-align: center;
    max-width:70%;
}
.image-container{
    width: 100%;
    margin-right:0px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
    display: flex;
    justify-content: center;
}
img {
    height:300px;
    object-fit:contain;
    margin:auto;
}
.ii__paragraph{
    width:70%;
    margin: 0 auto;
    text-align: center;
    font-size: 15px;
    margin-bottom: 100px
}

@media screen and (max-width: 400px) {
    p {
        max-width:90%;
    }
}
`