import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const portfolio = css`margin-left: 10px;
					float: left;
					&:hover {
					filter: blur(2px);
					}
					@media (max-width: 1700px) {
					margin-left: 5px;
					width: 280px;
					}
					@media (max-width: 1500px) {
					margin-left: 5px;
					width: 220px;
					}
					@media (max-width: 1200px) {
					margin-left: 5px;
					width: 170px;
					}
					@media (max-width: 1000px) {
					margin-left: 5px;
					width: 120px;
					}
					@media (max-width: 800px) {
					margin-left: 5px;
					width: 80px;
					}`
			
const caseStudy = css`margin-left: 10px;
             
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
					}`

function CardImage(props) {
	return (
		<div>
			{
				props.type==="portfolio"?
				<img css={portfolio}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />:
				<></>
			 }
			 {
				 props.type==="caseStudy"?
				 <img css={caseStudy}
				  src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />:
				<></>
			 }
			 {
				 props.type==="blogs"?
				 <img css={caseStudy}
				  src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />:
				<></>
			 }
			
		</div>
	);
}

export default CardImage;
