import React from "react";
import Link from "next/link"
import Button from "../src/components/buttons/button"
function SignUp() {
    return (
        <React.Fragment>
            <h1>Sign up</h1>
            <Link href="/">
               <a>Home</a>
            </Link>
            <Button name="Submit"/>
        </React.Fragment>
    );
}

export async function getServerSideProps(context) {
   return{
       props:{}
   }
}
export default SignUp;
