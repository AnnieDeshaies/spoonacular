import { createGlobalStyle } from 'styled-components'

// const rem = (pixels) => {
// 	const base16 = 16
// 	return `${pixels / base16}rem`
// }

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    position: relative;
    height: 100%;
    color: black;
    background-color: white;
    opacity: 1;
    transition: opacity 100ms linear;
    font-variant-numeric: tabular-nums;
  }

  input {
    padding: 8px 16px;
	  border-radius: 8px;
  }
`

export default GlobalStyles
