import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* Utilizado para declararmos as variáveis de cores da aplicação */
:root {
    --red: #e52e4d;
    --blue:#5429CC;
    --green:#33CC95 ;

    --blue-light:#6933FF;
    
    --text-title:#363F5F;
    --text-body:#969CB3;
    
    --background:#f0f2f5;
    --shape:#FFFFFF;
}

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 /*
    Responsividade da fonte para utilizarmos REM durante a aplicação --> 1rem = font-size
    Utilizamos o font-size em % para caso o usuário opte por fontes maiores ou menores no aparelho, nossa aplicação irá respeitar isso 
 */
 html {
    @media (max-width:1080px) {
        font-size: 93.75%; //15 pixels
    }
    @media (max-width:720px) {
        font-size: 87.5%; //14 pixels
    }
 }

 body { 
     background: var(--background);
     //Para detalharmos a fonte nos browsers
     -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
     font-family:'Poppins', sans-serif;
     font-weight: 400;
 }

 h1,h2,h3,h4,h5,h6, strong {
     font-weight: 600;
 }

 button { 
     cursor: pointer;
 }

 [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
 }

 .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
 }

 .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--background);

    padding:3rem;

    position: relative;

    border-radius: 0.25rem;
 }
`;
