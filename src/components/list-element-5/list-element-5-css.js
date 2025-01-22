import { css } from 'lit-element';

export const ListElement5Styles = css`
.card{
    box-sizing: border-box;
    padding: 20px;
    gap: 18px;
    border-radius: 20px;
    box-shadow:var(--mui-shadows-3);
    border-radius: var(--CornerLarge) !important;
    background-color:var(--paper);
}

.content h4{
    margin-bottom: 0 !important;
}
.round-background {
    width: 64px;
    height: 64px;
    background: var(--primary);
    border-radius: 50%;
}

.media-content{
    justify-content: space-between;
    height: 60px;
}
.media-content h5{
    margin-bottom:0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color:var(--grey-darker);
}
.card-header-title{
    font-style: normal;
    font-weight: var(--mui-typography-h6-fontWeight) !important;
    font-size: var(--mui-typography-h6-fontSize);
    line-height: var(--mui-typography-h6-lineHeight);

}
.card-header-link{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    color:var(--grey-darker);
}
.card-header-subtitle{
    font-size: 12px;
    line-height: 16px;
    font-weight: 400 !important;
    cursor:pointer;
}

.media-content div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.media-content .right-align {
    display: flex;
    align-items: end;
}
.media:first-child{
    border-top:1px solid var(--md-sys-color-surfaceVariant);
    padding-top:1.5rem;
}
.media + .media {
    border-top:1px solid var(--md-sys-color-surfaceVariant) !important;
}

a{
    color:var(--primary)
}
a:hover{
    color: var(--primary);
}
small {
    font-size: 12px !important;
    line-height:16px;
    margin-top:.75rem;
   color:var(--md-sys-color-outline);
}

`;