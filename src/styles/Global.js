import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.9) transparent;
       
    }
    
    body {
        background-color: #05182c !important;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        width: 100vw;

    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        border: transparent;
    }

        
}

`
export default GlobalStyles;