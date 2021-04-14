import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import {MagnifyingGlass} from '@emotion-icons/entypo/MagnifyingGlass'

const MagnifyingGlassIcon = styled(MagnifyingGlass)`
            color: white;
            height: 1.5625rem;
            width: 1.5625rem;
            position: absolute;
            top: 43%;
            right: 45%;
            left: 45%;
            @media (max-width: 768px) {
                height: 1.75rem;
                width: 1.75rem;
                right: 48%;
                left: 48%;
            }
            /*border: 1px solid green;*/`


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

const gridItem = css`position: relative;
                     /*border: 1px solid white;*/
                     /*margin-right: 0.625rem;*/

                    @media (min-width: 768px) {
                        margin-right: 0.625rem;
                    }
                    @media (min-width: 1200px) {
                            margin-right: 0.625rem;
                    }`



const Div = styled.div`
                    /*border: 1px solid red;*/
                    margin-bottom: 1.875rem; 
                    
                    @media (min-width: 768px) {
                    /*margin-right: 0.625rem;*/
                    
                    /*margin-right: ${props => props.count==='5'? '20px' :'0625rem' };
                    margin-left: ${props => props.count==='4'? '70px' :'0px' };*/

                    }

                    @media (min-width: 1200px) {
                    /*margin-right: 0.625rem;*/
                    }
                        `
const img = css`    &:hover {
                                opacity: 0.5;
                        }` 

	
function PortfolioCard(props) {
    const [isShown, setIsShown] = useState(false);

	return (
        <div
        css={css`
        height: 93.75rem;
        @media (max-width: 768px) {
            height: 196.875rem;
            }
        /*border: 1px solid black;*/
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
                <div    css={gridItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                    <Div count='1'>
                        <Image css={img}  src="/images/portfolio/Portfolio1.png" alt="Portfolio Image 1" width={260} height={410} />
                    </Div>
                    {isShown && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>
              
                <div    css={gridItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                    <Div count='2'>
                        <Image css={img} src="/images/portfolio/Portfolio2.png" alt="Portfolio Image 2" width={260} height={410} />
                    </Div>
                    {isShown && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div    css={gridItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                    <Div count='3'>
                        <Image css={img} src="/images/portfolio/Portfolio3.png" alt="Portfolio Image 3" width={260} height={410} />
                    </Div>
                    {isShown && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div    css={gridItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                    <Div count='4'>
                        <Image css={img} src="/images/portfolio/Portfolio4.png" alt="Portfolio Image 4" width={260} height={410} />
                    </Div>
                    {isShown && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>

                <div    css={gridItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                    <Div count='5'>
                        <Image css={img}  src="/images/portfolio/Portfolio5.png" alt="Portfolio Image 5" width={260} height={410} />
                    </Div>
                    {isShown && (<MagnifyingGlassIcon></MagnifyingGlassIcon>)}
                </div>
            </div>

            

        </div>

	);
}

export default PortfolioCard;
