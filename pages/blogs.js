import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import CardImage from "../src/components/Main-Components/CardImage"
import CardText from "../src/components/Sub-Components/CardText"

function caseStudy() {
     
    const images = [
        { id: 1, src: "/images/blogs/Blog.png", alt:"Image 1", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna"},
        { id: 2, src: "/images/blogs/Blog.png", alt:"Image 2", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
        { id: 3, src: "/images/blogs/Blog.png", alt:"Image 3", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
      ]
    return (
        <div>
            <h1>Latest Blog Post</h1>
            {images.map(function(image, i){
        return (
                <div css={css`
                    float: left;
                    margin-left: 15px;
                    @media (max-width: 1400px) {
                        width: 350px;
                      }
                      @media (max-width: 1200px) {
                        width: 300px;
                      }
                      @media (max-width: 1100px) {
                        width: 260px;
                      }
                      @media (max-width: 1000px) {
                        width: 230px;
                      }
                      @media (max-width: 800px) {
                        width: 200px;
                      }
                      @media (max-width: 670px) {
                        width: 170px;
                      }
        
                    `
                }>
                    <CardImage imageSrc={image.src} imageAlt={image.alt} width={400} height={200} type={"blogs"} ></CardImage>
                    <CardText text={image.text} type={"blogs"}></CardText>
                </div>
                    );
    })}
        </div>
    )
}

export default caseStudy;