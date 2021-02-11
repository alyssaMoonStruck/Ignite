import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
        background: white;
    }
    }
    body {
        font-family: 'Rajdhani', sans-serif;
        width: 100%;

        background: linear-gradient(270deg, #242b66, #396624);
        background-size: 400% 400%;

        -webkit-animation: AnimationName 30s ease infinite;
        -moz-animation: AnimationName 30s ease infinite;
        animation: AnimationName 30s ease infinite;
    }

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    
    h2{
        font-size: 3rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: lighter;
        color: #f8f8ff;
        text-shadow: 10px 10px 10px 30px #000;
    }
    h3{
        background-color: rgba(240, 255, 240, 0.4);
        font-size: 1.3rem;
        color: #333;  
        padding: 1rem 0rem;
        }
        p{
            background-color: rgba(240, 255, 240, 0.4);
            font-size: 1.2rem;
            line-height: 200%;
            color: #696969;
        }
        a{
            text-decoration: none;
            color: #333;
        }
        img {
            display: block;
        }
        input{
            background-color: #f8f8ff;
            font-weight: bold;
            font-family: 'Rajdhani', sans-serif;
        }
        button{
            font-size: 1.5rem;
            border: none;
            padding: 0.5rem 2rem;
            cursor: pointer;
            background: #ff7676;
            color: #f8f8ff;
        }
        @media screen and (max-width: 600px) {
        .body {
            width: 100%;
        }
}
`

export default GlobalStyles
