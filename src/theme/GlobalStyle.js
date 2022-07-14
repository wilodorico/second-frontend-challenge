import { createGlobalStyle } from 'styled-components';
import {colors} from './colors'

const GlobalStyle = createGlobalStyle`

*, ::before, ::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-size: 15px;
      font-family: 'Overpass', sans-serif;
      color: ${colors.white};
      background-color: ${colors.veryDarkBlue};
   }

   li {
      list-style: none;
   }
`;
 
export default GlobalStyle;
