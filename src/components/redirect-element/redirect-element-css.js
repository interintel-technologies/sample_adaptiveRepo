import {css} from 'lit-element';

export const RedirectElementStyles = css`
.text-container{
    padding:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.info-block{
    text-align:center;
}
.space-bottom {
    margin-bottom:16px;
}
.login {
    color:var(--info)!important;
    text-decoration:underline!important;
    transition: 1.0s;
}
.register {
    
    color:var(--link)!important;
    text-decoration:underline!important;
    transition: 1.0s;

}

.login:hover{
    text-decoration:none!important;
    color:var(--link)!important;


}
.register:hover{
    text-decoration:none!important;
    color:var(--info)!important;


}

.card{
    width: 30%;
    padding: 40px;
    background: #fff;
    border-radius: 10px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.image-block{
    width: 30%;
}

.or-block{
    width:22%;
}
hr{
    margin: 1.8rem 0!important;
}

hr.solid{
    border-top: 1px dashed #000!important;
}
.or-block p {
    text-align:center;
}

@media screen and (max-width: 1349px){

    .card{

        width: 50%;

    }
    
    
}

  @media screen and (max-width: 853px){
    .card{

        width: 70%;

    }
    
}

@media screen and (max-width: 640px){
    .card{

        width: 75%;

    }
    
}

@media screen and (max-width: 591px){
    .card{

        width: 100%;

    }
    
}

`;