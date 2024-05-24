import { NextPage } from "next";
import styled, { css } from "styled-components";

type ButtonProps = {
  color: string;
  backgroundColor: string;
}

const text = css`
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  color: ${props => props.color};
  background: ${props => props.backgroundColor};
  border-radius: 16px;

  ${text}
`

const CustomButton: NextPage = () => {
  return (
    <div>
      <Button color="white" backgroundColor="red">Custom Button</Button>
      <Button color="#FF0000" backgroundColor="transparent">Hello</Button>
    </div>
  )
}

export default CustomButton;