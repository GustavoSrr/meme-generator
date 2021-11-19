import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 30px 10px;

  img {
    max-width: 100%;
    height: auto;

    margin-bottom: 30px;
  }
`

export const ItemsDiv = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`
