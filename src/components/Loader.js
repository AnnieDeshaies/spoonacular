import { FiLoader } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`

export const StyledLoader = styled(FiLoader)`
	font-size: 20px;
	animation: ${spin} 3s linear infinite;
`

const Loader = () => <StyledLoader />

export default Loader
