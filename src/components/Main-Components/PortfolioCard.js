import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"

const portfolioMain = css`text-align: center;
                        background-image: url('/images/Background2.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;`

const gridContainer = css`
                    /*border: 1px solid black;*/
                    display: grid;
                    grid-template-columns: 1fr;
                    margin-top: 9.375rem;
                    text-align: center;
                    
                    @media (min-width: 768px) {
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-left: 15%;
                    margin-right: 15%;
                    text-align: center;
                                        }

                    @media (min-width: 1200px) {
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    margin-left: 12%;
                    margin-right: 12%;
                    }
						`



const Div = styled.div`
                    /*border: 1px solid black;*/
                    margin-bottom: 1.875rem; 
                    
                    
                    @media (min-width: 768px) {
                    margin-right: 0.625rem;
                    
                    /*margin-right: ${props => props.count==='5'? '20px' :'0625rem' };
                    margin-left: ${props => props.count==='4'? '70px' :'0px' };*/

                    }

                    @media (min-width: 1200px) {
                    margin-right: 0.625rem;
                    }
                        `
	
function PortfolioCard(props) {
	return (
        <div
        css={css`
        /*border: 1px solid black;*/
        @media (min-width: 768px) {
         height: 93.75rem;
         }
        @media (min-width: 1200px) {
         height: 62.5rem;
         }
        `}>

            <div css={css`
              text-align: center;
              font-family: 'Green Lantern';
              color: #16f533;
              font-size: 2rem;
              padding: 0.5rem;
              `}>
                PORTFOLIO
            </div>

            <div css={gridContainer}>  
                <Div count='1'>
                    <Image  src="/images/portfolio/Portfolio1.png" alt="Portfolio Image 1" width={260} height={410} />
                </Div>

                <Div count='2'>
                    <Image  src="/images/portfolio/Portfolio2.png" alt="Portfolio Image 2" width={260} height={410} />
                </Div>

                <Div count='3'>
                    <Image  src="/images/portfolio/Portfolio3.png" alt="Portfolio Image 3" width={260} height={410} />
                </Div>

                <Div count='4'>
                    <Image  src="/images/portfolio/Portfolio4.png" alt="Portfolio Image 4" width={260} height={410} />
                </Div>

                <Div count='5'>
                    <Image  src="/images/portfolio/Portfolio5.png" alt="Portfolio Image 5" width={260} height={410} />
                </Div>
            </div>

        </div>

	);
}

export default PortfolioCard;
