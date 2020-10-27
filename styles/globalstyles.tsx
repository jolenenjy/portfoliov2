import { createGlobalStyle } from "styled-components";
import theme from "../styles/theme";

const GlobalStyles = createGlobalStyle`

html{
    background: hsl(240, 60%, 5%);
    color: ${theme.colors.lightgrey2};
}


@media (max-width: ${theme.breakpoint[0]}){
  body:before, body:after{ 
    max-width: 90vw;
    background: -webkit-linear-gradient(0deg,#242A2E 1px,transparent 0px) 0 0 / calc(90vw/4) auto;
  }
}

@media (max-width: ${theme.breakpoint[1]}){
body:before, body:after{ 
    background: -webkit-linear-gradient(0deg,#191D20 1px,transparent 0px) 0 0 / calc(90vw/2) auto;
  }
}

h1 {
    font-size: 60px;
    letter-spacing: -0.02em;
    line-height: 80px;
    font-weight: ${theme.fontWeights.bold};
}

@media (max-width: ${theme.breakpoint[1]}){
h1 {
    font-size: 50px;
    letter-spacing: -0.02em;
    line-height: 60px;
    font-weight: ${theme.fontWeights.bold};
}
}

@media (max-width: ${theme.breakpoint[2]}){
h1 {
    font-size: 30px;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-weight: ${theme.fontWeights.bold};
}
}

h2 {
    font-size: ${theme.fontSizes[1]};
    letter-spacing: -0.014em;
    line-height: 40px;
    font-weight: ${theme.fontWeights.semibold};
}

h3 {
    font-size: ${theme.fontSizes[2]};
    letter-spacing: -0.012em;
    line-height: 30px;
}

h4 {
    font-size: ${theme.fontSizes[4]};
    letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${theme.fontWeights.regular};
}

h5 {
    font-size: ${theme.fontSizes[5]};
    letter-spacing: -0.008em;
    line-height: 24px;
}

h6 {
    font-size: ${theme.fontSizes[6]};
    letter-spacing: -0.002em;
    line-height: 20px;
    font-weight: ${theme.fontWeights.semibold};
}

p {
    font-size: ${theme.fontSizes[4]};
     letter-spacing: -0.010em;
    line-height: 28px;
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.textSecondary};
}

span {
    font-size: ${theme.fontSizes[6]};
    letter-spacing: -0.004em;
    line-height: 20px;
    font-weight: ${theme.fontWeights.regular};
}

a {
    font-size: ${theme.fontSizes[5]};
    letter-spacing: -0.006em;
    line-height: 28px;
    font-weight: ${theme.fontWeights.regular};
    color: rgb(64,156,255);
}

`;

export default GlobalStyles;
