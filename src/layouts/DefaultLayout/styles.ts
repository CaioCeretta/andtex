import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100rem;

  padding: 0 2.5rem;

  background: ${(props) => props.theme['gray-50']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  min-height: 100vh
`

export const Main = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`