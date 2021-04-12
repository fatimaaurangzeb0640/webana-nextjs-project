import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import CardImage from "../src/components/Main-Components/CardImage"
import PortfolioCard from "../src/components/Main-Components/PortfolioCard"

function portfolio() {
    return (
     <div 
     style={{  backgroundImage: "url(/images/Background2.png)", 
                        height:"100%", backgroundRepeat:"no-repeat", 
                        backgroundPosition:"center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        }}>
         <PortfolioCard></PortfolioCard>
     </div>
    )
}
export default portfolio