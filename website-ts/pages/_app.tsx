import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	const AnyComponent = Component as any;

	return (
		<>
			<div className="background" />
			<AnyComponent {...pageProps} />
		</>
	);
}

export default MyApp;
