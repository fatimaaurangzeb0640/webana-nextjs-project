import Layout from "../src/components/Global-components/Layout";

// Add global style sheet
import "../styles/main.scss";

// eslint-disable-next-line react/prop-types

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
