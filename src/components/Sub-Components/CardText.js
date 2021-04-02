import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const caseStudy = css`
                /*border: 1px black solid;*/
                width: 350px;
                margin-left: 8%;
                padding-left: 7%;
                font-size:18px;
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
                }`

function CardText(props) {
	return (
		<div>
			{ props.type === "caseStudy" ?
        <p css={caseStudy}>
            {props.text}
        </p>:
        <></>
      }
      { props.type === "blogs" ?
        <p css={caseStudy}>
            {props.text}
        </p>:
        <></>
      }
		</div>
	);
}

export default CardText;
