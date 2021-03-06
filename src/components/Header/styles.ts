import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--darkerColor);

  h1 {
    margin: 0;
    padding: 15px;

    font-weight: normal;
    font-size: 25px;
    cursor: default;
  }
`
