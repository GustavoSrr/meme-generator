import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;

  margin: 30px 0;

  form {
    width: 30%;

    display: flex;
    gap: 5px;

    input {
      width: 100%;

      padding: 10px 15px;
      border: 0;

      color: var(--textColor);
      background-color: var(--darkerColor);

      &:focus {
        outline: 0;
      }
    }
  }
`
