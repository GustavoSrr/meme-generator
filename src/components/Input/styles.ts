import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;

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

    @media only screen and (max-width: 1500px) {
      width: 50%;
    }

    @media only screen and (max-width: 800px) {
      width: 70%;
    }

    @media only screen and (max-width: 580px) {
      width: 80%;
    }
  }
`

export const ButtonDiv = styled.div`
  width: 100%;

  display: flex;
  gap: 5px;

  #SendButton {
    width: 100%;
  }

  #DownloadButton {
    width: fit-content;

    padding: 15px;
  }
`
