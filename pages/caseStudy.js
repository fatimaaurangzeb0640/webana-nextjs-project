import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import CaseStudyCard from "../src/components/Main-Components/CaseStudyCard"


function caseStudy() {
          
    return (
        <div    style={{  backgroundImage: "url(/images/Background2.png)", 
                height:"100%", backgroundRepeat:"no-repeat", 
                backgroundPosition:"center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                }}>
            <CaseStudyCard></CaseStudyCard>
        </div>
    )
}

export default caseStudy;