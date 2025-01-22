import { css } from "lit-element"

export const QuickLinksStyles = css`
.quick-links-container {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between; 
}
.quick-cards {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 calc(45% - 10px); 
    margin-bottom: 20px;
    background-color: #fff;
}
.card-title, .card-title + p{
    text-align: center;
}

.card-icon{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    background-color: #F4A14F;
}

.card-icon i, .card-icon adaptive-ui-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 60px;
    color: #fff;
}
`