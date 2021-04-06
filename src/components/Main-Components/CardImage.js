import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Link from "next/link"

const portfolio = css`margin-left: 10px;
                      float:left; 
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
					@media (max-width: 1600px) {
						width: 380px;
					}
					@media (max-width: 1500px) {
						width: 340px;
					}
					@media (max-width: 1400px) {
						width: 310px;
					}
					@media (max-width: 1300px) {
					width: 280px;
					}
					@media (max-width: 1200px) {
					width: 260px;
					}
					@media (max-width: 1050px) {
					width: 230px;
					}
					@media (max-width: 870px) {
					width: 200px;
					}
					
					@media (max-width: 700px) {
					width: 170px;
					}

					@media (max-width: 600px) {
						width: 140px;
						}
					`

const blogs = css`margin-left: 30px;

			&:hover {
			border:5px green solid;
			}
			@media (max-width: 1600px) {
				width: 380px;
			}
			@media (max-width: 1500px) {
				width: 340px;
			}
			@media (max-width: 1400px) {
				width: 310px;
			}
			@media (max-width: 1300px) {
			width: 280px;
			}
			@media (max-width: 1200px) {
			width: 260px;
			}
			@media (max-width: 1050px) {
			width: 230px;
			}
			@media (max-width: 900px) {
			width: 200px;
			}
			
			@media (max-width: 750px) {
			width: 170px;
			}

			@media (max-width: 600px) {
				width: 140px;
				}
	`
	
	
function CardImage(props) {
	const imageId = props.imageId;
	return (
		<div>
			 {
				props.type==="portfolio"?
				<img css={portfolio}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />:
				props.type==="caseStudy"?
				<img css={caseStudy}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />:
				props.type==="blogs"?
				<Link href="/blog">
				<img css={blogs}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width}  />
				</Link>:
				<p>Image not found</p>
			 }
		</div>
	);
}

export default CardImage;
