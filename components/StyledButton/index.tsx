import styled, { css } from 'styled-components';

const variants = {
  primary: {
    color: 'white',
    backgroundColor: '#1D3461',
    border: 'none',
  },
  success: {
    color: '#ffffff', 
    backgroundColor: '#5AB203', 
    border: 'none', 
  }, 
  transparent: {
    color: '#111111',
    backgroundColor: 'transparent',
    border: '1px solid black',
  }, 
} as const

type StyledButtonProps = {
  variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    const style = variants[variant];
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
      padding: 8px 16px;
      border-radius: 4px;
    `;
  }}

  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

`