import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px;
  border-radius: 3px;
  border: 1px solid transparent;

  font-weight: bold;
  background-color: var(--darkerColor);
  color: var(--buttonTextColor);
  transition: 0.2s;
  cursor: pointer;

  svg {
    fill: var(--buttonTextColor);
  }

  &:hover {
    color: var(--textColor);
    background-color: var(--darkerColorHover);

    svg {
      fill: var(--textColor);
    }
  }

  &:active {
    filter: brightness(0.8)
  }
`
