import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import BlogsCard from "../src/components/Main-Components/BlogsCard"

function blogs() {

    return (
        <div  style={{  backgroundImage: "url(/images/Background2.png)", 
                height:"100%", backgroundRepeat:"no-repeat", 
                backgroundPosition:"center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                }}>
            <BlogsCard></BlogsCard>
        </div>
    )
}

export default blogs;