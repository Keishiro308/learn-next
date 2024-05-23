import { NextPage } from "next";
import Image from "next/image";

import BibleImage from "../public/vercel.svg";

const ImageSample: NextPage = () => {
  return (
    <div>
      <h1>Image Component</h1>
      <p>imgタグで表示した場合</p>
      <img src="/vercel.svg" alt="Bible" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={BibleImage} alt="Bible" />
    </div>
  )
}

export default ImageSample;