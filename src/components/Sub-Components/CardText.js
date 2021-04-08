import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const caseStudy = css`
                /*border: 1px black solid;*/
                width: 350px;
                margin-left: 40px;
                padding-left: 30px;
                font-size:18px;
                color: white;
                @media (max-width: 1600px) {
                  width: 330px;
                  padding-left: 20px;
                  margin-left: 30px;
                }
                
                @media (max-width: 1500px) {
                  width: 310px;
                }
                
                @media (max-width: 1400px) {
                  width: 280px;
                  margin-left: 25px;
                }

                @media (max-width: 1300px) {
                  width: 250px;
                }

                @media (max-width: 1200px) {
                  width: 230px;
                }
                
                @media (max-width: 1050px) {
                  margin-left: 23px;
                  width: 200px;
                }
                @media (max-width: 870px) {
                  width: 170px;
                }

                @media (max-width: 700px) {
                  width: 150px;
                }
                @media (max-width: 600px) {
                  width: 120px;
                  margin-left: 15px;
                }
              `
  const blogs = css`
              /*border: 1px black solid;*/
              width: 350px;
              margin-left: 40px;
              padding-left: 30px;
              font-size:18px;
              color: white;
              
              @media (max-width: 1600px) {
                width: 330px;
                padding-left: 20px;
                margin-left: 30px;
              }
              
              @media (max-width: 1500px) {
                width: 310px;
              }
              
              @media (max-width: 1400px) {
                width: 280px;
                margin-left: 25px;
              }

              @media (max-width: 1300px) {
                width: 250px;
              }

              @media (max-width: 1200px) {
                width: 230px;
              }
              
              @media (max-width: 1050px) {
                margin-left: 23px;
                width: 200px;
              }
              @media (max-width: 900px) {
                width: 170px;
              }

              @media (max-width: 750px) {
                width: 150px;
              }
              @media (max-width: 600px) {
                width: 120px;
                margin-left: 15px;
              }
              `
function CardText(props) {
	return (
		<div>
			{ props.type === "caseStudy" ?
        <p css={caseStudy}>
            {props.text}
        </p>:
        props.type === "blogs"?
        <p css={blogs}>
            {props.text}
        </p>:
        <p>Text not found.</p>
      }
      
		</div>
	);
}

export default CardText;
