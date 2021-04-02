import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const color = 'white'

function PortfolioCard(props) {
	return (
		<div>
			<img
			 css={css`
			 margin-left: 10px;
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
			  }
			 
		   `}
			 src={props.imageSrc} alt={props.imageAlt} height={480} width={330} />
			
		</div>
	);
}

export default PortfolioCard;
