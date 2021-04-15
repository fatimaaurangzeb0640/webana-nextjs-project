import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from "next/image"

const gridContainer = css` display: grid;
                            grid-template-columns: 1fr;
                            margin-top: 9.375rem;
                            text-align: center;
                            margin-left: 25%;
                            margin-right: 25%;
                            @media (min-width: 768px) {
                              grid-template-columns: 1fr 1fr 1fr;
                              margin-left: 10%;
                              margin-right: 10%;
                            }
          
                              @media (min-width: 1200px) {
                              grid-template-columns: 1fr 1fr 1fr;
                              margin-left: 12%;
                              margin-right: 12%;
                              }`

const gridItem = css`
                    
                      text-align: center;
                      margin-bottom: 1.875rem;
                      @media (min-width: 768px) {
                        margin-right: 1.125rem;
                      }
                      @media (min-width: 1200px) {
                        margin-right: 1.125rem;
                      }`

const image = css`/*border: 3px #16f533 solid;
                  
                  &:hover {
                  border-right: 2px #16f533 solid;
                  border-left: 2px #16f533 solid;
                  padding-left: 0%;
                  padding right: 0%;
                  }*/
                  `

const text = css`color: white;
                  margin-top: 0.75rem;
                  font-weight: bold;
                  font-size: 1.125rem;
                  padding-left: 1.875rem;
                  padding-right: 1.875rem;
                 /* width: 23.125rem;*/
                  text-align: center;
                  @media (max-width: 768px){
                    font-size: 1.25rem; 
                    margin-top: 0.9375rem;
                    margin-bottom: 0.9375rem;
                  }`


function CaseStudyCard(props) {
	return (
    
		<div css ={css`height: 93.75rem;
    @media (max-width: 768px) {
        height: 196.875rem;
        }`}>
		 	<div css={css`
              text-align: center;
              font-family: 'Green Lantern';
              color: #16f533;
              font-size: 2rem;
              padding: 0.5rem;
              `}>
        OUR CASE STUDIES
      </div>

      <div css={gridContainer}>

        <div css={gridItem}>

          <div css={image}><Image  src="/images/caseStudy/CaseStudy1.png" alt="Portfolio Image 1" width={410} height={410}></Image></div>

          <div css={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

        </div>

        <div css={gridItem}>

        <div css={image}><Image  src="/images/caseStudy/CaseStudy2.png" alt="Portfolio Image 2" width={410} height={410}></Image></div>

          <div css={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

        </div>

        <div css={gridItem}>

          <div css={image}><Image  src="/images/caseStudy/CaseStudy3.png" alt="Portfolio Image 3" width={410} height={410}></Image></div>

          <div css={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna</div>

        </div>

      </div>

		</div>
	);
}

export default CaseStudyCard;