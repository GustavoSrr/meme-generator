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
    flex-direction: column;
    gap: 5px;

    input {
      width: 100%;

      padding: 10px 15px;
      border-radius: 3px;
      border: 1px solid var(--darkerColor);

      color: var(--textColor);
      background-color: transparent;
      transition: .2s;

      &:focus {
        outline: 0;
        border-color: var(--darkerColorHover);
      }
    }

    button {
      margin-top: 5px;
    }
  }
`
