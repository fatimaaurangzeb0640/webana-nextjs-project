import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const color = 'white'

function CaseStudyCard(props) {
	return (
		<div>
			<img
			 css={css`
			 margin-left: 10px;
             
			 &:hover {
				border:5px green solid;
                
			  }
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
			 
		   `}
			 src={props.imageSrc} alt={props.imageAlt} height={410} width={410} />
			
		</div>
	);
}

export default CaseStudyCard;
