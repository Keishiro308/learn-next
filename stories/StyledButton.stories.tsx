import { Meta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

export default {
  title: 'StyledButton',
  component: StyledButton,
  // argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof StyledButton>;

const incrementAction = action('increment');

export const Primary = (props: any) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount(count + 1);
  }
  return (
    <StyledButton variant="primary" {...props} onClick={onClick}>
      Count: {count}
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