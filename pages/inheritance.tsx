import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.p`
  color: blue;
  font-weight: bold;
`

const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
  color: red;
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Text</Text>
      <BorderedText>Bordered Text</BorderedText>
    </div>
  )
}

export default Page;