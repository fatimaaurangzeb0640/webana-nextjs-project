import Header from "../Global-components/Header";
import Footer from "../Global-components/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
