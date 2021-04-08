import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import CardImage from "../src/components/Main-Components/CardImage"
import CardText from "../src/components/Sub-Components/CardText"

function caseStudy() {
     
    const images = [
        { id: 1, src: "/images/caseStudy/CaseStudy1.png", alt:"Image 1", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna"},
        { id: 2, src: "/images/caseStudy/CaseStudy2.png", alt:"Image 2", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
        { id: 3, src: "/images/caseStudy/CaseStudy3.png", alt:"Image 3", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
      ]

    const CaseStudyHeading = styled.h1`
    position: relative;  
   
    /*margin-left:20px;*/
      color: green;`
    
      const CaseStudy = styled.div`
        /*float: left;*/
        /*width: 450px;*/
        position: relative;
        left: ${props => props.count===0? '160px' : props.count===1? '660px': '1160px'};
        top: ${props => props.count===0? '90px' : props.count===1? '-401px': '-893px'}; 
        /*border: 1px black solid;*/
        /*margin-left: 15px;*/
          @media (max-width: 1600px) {
              /*width: 380px;*/
              left: ${props => props.count===0? '120px' : props.count===1? '590px': '1060px'};
            }

          @media (max-width: 1500px) {
            /*width: 340px;*/
            left: ${props => props.count===0? '110px' : props.count===1? '530px': '950px'};
            top: ${props => props.count===0? '90px' : props.count===1? '-421px': '-933px'}; 
          }

          @media (max-width: 1400px) {
            /*width: 300px;*/
            left: ${props => props.count===0? '105px' : props.count===1? '490px': '880px'};
          }
          @media (max-width: 1300px) {
            /*width: 150px;*/
            left: ${props => props.count===0? '70px' : props.count===1? '430px': '790px'};
          }
          @media (max-width: 1200px) {
            /*width: 200px;*/
            left: ${props => props.count===0? '60px' : props.count===1? '400px': '740px'};
            top: ${props => props.count===0? '90px' : props.count===1? '-422px': '-933px'}; 

          }
          @media (max-width: 1050px) {
            /*width: 170px;*/
            left: ${props => props.count===0? '50px' : props.count===1? '350px': '650px'};
            top: ${props => props.count===0? '90px' : props.count===1? '-444px': '-977px'}; 
          }
          @media (max-width: 870px) {
            /*width: 170px;*/
            left: ${props => props.count===0? '30px' : props.count===1? '270px': '510px'};
          }
          @media (max-width: 700px) {
            /*width: 170px;*/
            left: ${props => props.count===0? '50px' : props.count===1? '240px': '430px'};
            top: ${props => props.count===0? '90px' : props.count===1? '-483px': '-1055px'}; 
          }
          @media (max-width: 600px) {
            /*width: 170px;*/
            left: ${props => props.count===0? '20px' : props.count===1? '180px': '340px'};
            top: ${props => props.count===0? '90px' : props.count===1? '-520px': '-1131px'}; 
          }
          `
    return (
        <div  style={{  backgroundImage: "url(/images/Background2.png)", 
              height:"100%", backgroundRepeat:"no-repeat", 
              backgroundPosition:"center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              marginTop:"-30px"}}>
          <CaseStudyHeading> Case Study </CaseStudyHeading>
          
            {images.map(function(image, i){
        return (
                <CaseStudy key={image.id} count={i}>
                  {console.log(i)}
                    <CardImage imageSrc={image.src} imageAlt={image.alt} type={"caseStudy"} height={410} width={410}></CardImage>
                    <CardText text={image.text} type={"caseStudy"}></CardText>
                </CaseStudy>
                
                    );
    })}
        </div>
    )
}

export default caseStudy;