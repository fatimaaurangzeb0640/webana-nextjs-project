import React from "react";
import Link from "next/link";

function Main() {
	return (
		<div>
			<h1>Main content comes here!!!</h1>
			<Link href="/sign-up">Sign-Up page is here</Link>
			<p><Link href="/portfolio">Click here to check the Portfolio section</Link></p>
			<p><Link href="/caseStudy">Click here to check the Case Study section</Link></p>
		</div>
	);
}

export default Main;
