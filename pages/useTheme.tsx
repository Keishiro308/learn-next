import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSize[3]};
  margin: ${(props) => props.theme.space[3]};
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Styled text</Text>
    </div>
  )
}

export default Page;