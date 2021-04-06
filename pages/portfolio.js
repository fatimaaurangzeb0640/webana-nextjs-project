import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import CardImage from "../src/components/Main-Components/CardImage"

function portfolio() {
     
    const images = [
        { id: 1, src: "/images/portfolio/Portfolio1.png", alt:"Portfolio Image 1"},
        { id: 2, src: "/images/portfolio/Portfolio2.png", alt:"Portfolio Image 2" },
        { id: 3, src: "/images/portfolio/Portfolio3.png", alt:"Portfolio Image 3" },
        { id: 4, src: "/images/portfolio/Portfolio4.png", alt:"Portfolio Image 4" },
        { id: 5, src: "/images/portfolio/Portfolio5.png", alt:"Portfolio Image 5" },
      ]
    return (
        <div>
            <h1>Portfolio</h1>
            {images.map((image) => <CardImage key={image.id} imageSrc={image.src} imageAlt={image.alt} type={"portfolio"} height={480} width={330}></CardImage>)}
        </div>
    )
}

export default portfolio