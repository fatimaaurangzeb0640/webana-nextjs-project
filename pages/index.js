import React from "react";
import Layout from "../src/components/Main-Components/Layout";
// import Link from "next/link"

function Main({ ...props }) {
	return (
		<>
			<Layout />
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { title: "This is server prop" },
	};
}
export default Main;
