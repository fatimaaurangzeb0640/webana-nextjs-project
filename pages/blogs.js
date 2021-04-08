import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import CardImage from "../src/components/Main-Components/CardImage"
import CardText from "../src/components/Sub-Components/CardText"

function blogs() {
     
    const images = [
        { id: 1, src1: "/images/blogs/Blog.png", src2: "/images/blogs/Blog-border.png", alt:"Image 1", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna"},
        { id: 2, src1: "/images/blogs/Blog.png", src2: "/images/blogs/Blog-border.png", alt:"Image 2", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
        { id: 3, src1: "/images/blogs/Blog.png", src2: "/images/blogs/Blog-border.png", alt:"Image 3", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet magna" },
      ]
    

      const Blogs = styled.div`
      position: relative;
      left: ${props => props.count===0? '180px' : props.count===1? '640px': '1100px'};
      top: ${props => props.count===0? '249px' : props.count===1? '-278px': '-805px'}; 
      /*border: 1px white solid;*/
      /*margin-left: 15px;*/

        @media (max-width: 1600px) {
            left: ${props => props.count===0? '120px' : props.count===1? '590px': '1060px'};
          }

        @media (max-width: 1500px) {
          left: ${props => props.count===0? '110px' : props.count===1? '530px': '950px'};
          top: ${props => props.count===0? '249px' : props.count===1? '-295px': '-840px'}; 
        }

        @media (max-width: 1400px) {
          
          left: ${props => props.count===0? '105px' : props.count===1? '490px': '880px'};
        }
        @media (max-width: 1300px) {
         
          left: ${props => props.count===0? '70px' : props.count===1? '430px': '790px'};
        }
        @media (max-width: 1200px) {
         
          left: ${props => props.count===0? '60px' : props.count===1? '400px': '740px'};

        }
        @media (max-width: 1050px) {
          
          left: ${props => props.count===0? '50px' : props.count===1? '350px': '650px'};
          top: ${props => props.count===0? '249px' : props.count===1? '-316px': '-881px'}; 
        }
        @media (max-width: 900px) {
          
          left: ${props => props.count===0? '30px' : props.count===1? '270px': '510px'};
        }
        @media (max-width: 750px) {
          
          left: ${props => props.count===0? '10px' : props.count===1? '200px': '390px'};
          top: ${props => props.count===0? '249px' : props.count===1? '-354px': '-956px'}; 
        }
        @media (max-width: 600px) {
          
          left: ${props => props.count===0? '10px' : props.count===1? '160px': '310px'};
          top: ${props => props.count===0? '249px' : props.count===1? '-394px': '-1036px'}; 
        }  

                  `
    return (
        <div  style={{  backgroundImage: "url(/images/Background2.png)", 
              height:"100%", backgroundRepeat:"no-repeat", 
              backgroundPosition:"center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              marginBottom: "-20px"
              }}>

            {images.map(function(image, i){
        return (
                <Blogs key={image.id} count={i} >
                    <CardImage imageSrc={image.src1} imageAlt={image.alt} imageId={image.id}  width={400} height={200} type={"blogs"} ></CardImage>
                    <CardImage imageSrc={image.src2} imageAlt={image.alt} imageId={image.id}  width={410} height={240} type={"blogs-background"} ></CardImage>
                    <CardText text={image.text} type={"blogs"} ></CardText>
                </Blogs>
                    );
    })}
        </div>
    )
}

export default blogs;