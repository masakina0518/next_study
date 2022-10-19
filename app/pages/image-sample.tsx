import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import BibleImage from '../public/images/bible.png'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imageタグで表示</p>
            {/* @next/next/no-img-element */}
            <img src="/images/bible.png" alt="test" />
            <p>imageコンポーネントで表示</p>
            
            <Image src={BibleImage} alt="test" />
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
        </div>
    )
}

export default ImageSample