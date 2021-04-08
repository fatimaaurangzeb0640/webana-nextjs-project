import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import CardImage from "../src/components/Main-Components/CardImage"

function portfolio() {
     
    const images = [
        { id: 1, src: "/images/portfolio/Portfolio1.png", alt:"Portfolio Image 1"},
        { id: 2, src: "/images/portfolio/Portfolio2.png", alt:"Portfolio Image 2" },
        { id: 3, src: "/images/portfolio/Portfolio3.png", alt:"Portfolio Image 3" },
        { id: 4, src: "/images/portfolio/Portfolio4.png", alt:"Portfolio Image 4" },
        { id: 5, src: "/images/portfolio/Portfolio5.png", alt:"Portfolio Image 5" },
      ]
    const Portfolio = styled.div`
    position: relative;
    left: ${props => props.count===0? '210px' : props.count===1? '480px': props.count===2? '750px':props.count===3?'1020px':'1290px'};
    top: ${props => props.count===0? '170px' : props.count===1? '-245px': props.count===2? '-661px':props.count===3?'-1076px':'-1492px'}; 
   /* border: 1px black solid;*/
    /*margin-left: 15px;*/

      @media (max-width: 1600px) {
        left: ${props => props.count===0? '155px' : props.count===1? '405px': props.count===2? '655px':props.count===3?'905px':'1155px'};
    }

      @media (max-width: 1450px) {
        left: ${props => props.count===0? '135px' : props.count===1? '365px': props.count===2? '595px':props.count===3?'825px':'1055px'};
      }

       @media (max-width: 1300px) {
        left: ${props => props.count===0? '115px' : props.count===1? '325px': props.count===2? '535px':props.count===3?'745px':'955px'};
      }
     @media (max-width: 1180px) {
        left: ${props => props.count===0? '105px' : props.count===1? '295px': props.count===2? '485px':props.count===3?'675px':'865px'};
      }
      @media (max-width: 1070px) {
        left: ${props => props.count===0? '100px' : props.count===1? '270px': props.count===2? '440px':props.count===3?'610px':'780px'};
      }
     
       @media (max-width: 960px) {
        left: ${props => props.count===0? '75px' : props.count===1? '235px': props.count===2? '395px':props.count===3?'555px':'715px'};
      }
      @media (max-width: 890px) {
        left: ${props => props.count===0? '65px' : props.count===1? '215px': props.count===2? '365px':props.count===3?'515px':'665px'};
      }
      @media (max-width: 825px) {
        left: ${props => props.count===0? '55px' : props.count===1? '195px': props.count===2? '335px':props.count===3?'475px':'615px'};
      }
      @media (max-width: 770px) {
        
        left: ${props => props.count===0? '90px' : props.count===1? '200px': props.count===2? '310px':props.count===3?'420px':'530px'};
        top: ${props => props.count===0? '170px' : props.count===1? '-244px': props.count===2? '-659px':props.count===3?'-1073px':'-1488px'}; 

      }
      @media (max-width: 660px) {
        left: ${props => props.count===0? '75px' : props.count===1? '175px': props.count===2? '275px':props.count===3?'375px':'475px'};
      }
      @media (max-width: 590px) {
        left: ${props => props.count===0? '70px' : props.count===1? '160px': props.count===2? '250px':props.count===3?'340px':'430px'};
      } 
      @media (max-width: 590px) {
        left: ${props => props.count===0? '70px' : props.count===1? '150px': props.count===2? '230px':props.count===3?'310px':'390px'};
      } `
      
    return (
        <div  style={{  backgroundImage: "url(/images/Background2.png)", 
                        height:"100%", backgroundRepeat:"no-repeat", 
                        backgroundPosition:"center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        marginTop:"-30px"}}>
            <h1 css={css`color: green`}>
              Portfolio
            </h1>
            
            {images.map(function(image, i) {
                return(
                <Portfolio key={image.id} count={i}> 
                {console.log(i)}
                    <CardImage key={image.id} imageSrc={image.src} imageAlt={image.alt} type={"portfolio"} height={410} width={260} imageId={image.id}></CardImage>
                </Portfolio>);
            })}
        </div>
    )
}

export default portfolio