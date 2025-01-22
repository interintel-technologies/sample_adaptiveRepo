
import {css} from 'lit-element';

export const LoaderElementStyles = css`
    .loader-wrapper{
        width: 100%;
        padding: 30px;
    }
    #loader{
        border: 9px solid transparent; 
        border-top: 9px solid #3498db; 
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
