import React from 'react'
import PortfolioCard from "../src/components/Main-Components/portfolioCard"

function caseStudy() {
     
    const images = [
        { id: 1, src: "/images/caseStudy/CaseStudy1.png", alt:"Image 1"},
        { id: 2, src: "/images/caseStudy/CaseStudy2.png", alt:"Image 2" },
        { id: 3, src: "/images/caseStudy/CaseStudy3.png", alt:"Image 3" },
      ]
    return (
        <div>
            <h1>Case Study</h1>
            {images.map(function(image, i){
        return <PortfolioCard imageSrc={image.src} imageAlt={image.alt} height={450} width={450} type={caseStudy}></PortfolioCard>;
    })}
        </div>
    )
}

export default caseStudy;