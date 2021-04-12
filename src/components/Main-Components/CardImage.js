import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Link from "next/link"


const portfolio = css`

                    height: 25.625rem;
					width: 16.25rem;
					/*&:hover {
						filter: blur(2px);
					}*/   

						/*@media (max-width: 1600px) {
						width: 240px;
						}
						@media (max-width: 1450px) {
						width: 220px;
						}
						@media (max-width: 1300px) {
						width: 200px;
						}
						@media (max-width: 1180px) {
						width: 180px;
						}
						@media (max-width: 1070px) {
						width: 160px;
						}
						@media (max-width: 960px) {
							width: 150px;
						}
						@media (max-width: 890px) {
							width: 140px;
						}
						@media (max-width: 825px) {
							width: 130px;
						}
						@media (max-width: 770px) {
							width: 100px;
						}
						@media (max-width: 660px) {
							width: 90px;
						}
						@media (max-width: 590px) {
							width: 80px;
						}
						@media (max-width: 560px) {
							width: 70px;
						}
						*/
						`
			
const caseStudy = css`
                   margin-left: 2px;
                    /*border-right: 5px green solid;
					border-left: 5px green solid;*/
					/*border-top: 5px green solid;*/
					/*display: inline-block;*/
                    position: relative;

					/*&:hover {
					border:5px green solid;
					}*/
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
const caseStudyBorders =css`
					/*border: 1px white solid;
					width: 417px;
					height 410px;
					position: relative;*/
					/*&:hover {
						border: 3px green solid;
						}*/
					/*margin: 20px;*/
					 /* &:before {
						content: '';
						width: 3px;
						height: 200px;
						background: green;
						position: absolute;
						left: -2px;
						top: 95px;
					  }*/
					/*&:after {
					content: '';
					width: 3px;
					height: 200px;
					background: green;
					position: absolute;
					right: -2px;
					top: 95px;
					}*/`

const blogs = css`margin-left: 30px;

			
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
   const BlogsBackground = styled.img`margin-left: 30px;
			position: relative;
			top: -220px;
			left: -5px;
							
			@media (max-width: 1600px) {
				width: 390px;
			}
			@media (max-width: 1500px) {
				width: 350px;
			}
			@media (max-width: 1400px) {
				width: 320px;
			}
			@media (max-width: 1300px) {
			width: 290px;
			}
			@media (max-width: 1200px) {
			width: 270px;
			}
			@media (max-width: 1050px) {
			width: 240px;
			}
			@media (max-width: 900px) {
			width: 210px;
			}
			
			@media (max-width: 750px) {
			width: 180px;
			}

			@media (max-width: 600px) {
				width: 150px;
				}`
	
	
function CardImage(props) {
	const imageId = props.imageId;
	const type = props.type;
	return (
		<div>
			 {
				props.type==="portfolio"?
				<img css={portfolio}
				src={props.imageSrc} alt={props.imageAlt}  />
				:
				props.type==="caseStudy"?
			<div css={caseStudyBorders}>
				<img css={caseStudy}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width} />
			</div>
			:
				props.type==="blogs"?
				<img css={blogs}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width}  />:
				props.type==="blogs-background"?
				<Link href="/blog">
				<BlogsBackground count={imageId}
				src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width}  />
				</Link>
				:
				<p>Image not found</p>
			 }
		</div>
	);
}

export default CardImage;
