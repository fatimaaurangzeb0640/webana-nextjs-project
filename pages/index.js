import React from "react";
import Link from "next/link"

function Main({...props}) {
    return (
        <React.Fragment>
            <h1>Hi I am Webana!</h1>
            <h4>{props.title}</h4>
            <Link href="/sign-up">
               <a>Sign up</a>
            </Link>
        </React.Fragment>
    );
}

export async function getServerSideProps(context) {
    
   return {
        props:{title:"This is server prop"}
   }
}
export default Main;
