import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --backgroundColor: #181818;
    --darkerColor: #131313;
    --darkerColorHover: #101010;
    --textColor: #f0f0f0;
    --buttonTextColor: #d0d0d0;
  }

  body {
    color: var(--textColor);
    background-color: var(--backgroundColor);
    font-family: 'Anton', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`
