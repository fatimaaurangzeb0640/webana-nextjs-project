import React from "react";
import Header from "../Main-Components/Header";
import Main from "../Main-Components/Main";
import Footer from "../Main-Components/Footer";

function Layout({ children }) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

export default Layout;
