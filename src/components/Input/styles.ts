import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;

  form {
    width: 100%;

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

export const ColorPickerDiv = styled.div`
  .react-colorful {
    width: 180px;
    height: 180px;
  }

  .react-colorful__saturation {
    border-radius: 3px;

    box-shadow: none;
  }

  .react-colorful__last-control {
    margin-top: 10px;
    border-radius: 3px;
  }

  .react-colorful__pointer {
    height: 25px;
    width: 25px;

    border-radius: 3px;
    border: 1px solid var(--textColor);

    box-shadow: none;
  }
`
