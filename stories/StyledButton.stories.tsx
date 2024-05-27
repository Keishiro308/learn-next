import { Meta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';

export default {
  title: 'StyledButton',
  component: StyledButton,
} as Meta<typeof StyledButton>;

export const Primary = (props: any) => {
  return (
    <StyledButton variant="primary" {...props}>
      Primary
    </StyledButton>
  )
}

export const Success = (props: any) => {
  return (
    <StyledButton variant="success" {...props}>
      Success
    </StyledButton>
  )
}

export const Transparent = (props: any) => {
  return (
    <StyledButton variant="transparent" {...props}>
      Transparent
    </StyledButton>
  )
}