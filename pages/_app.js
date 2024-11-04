import "../styles/globals.css";
import React, { useEffect } from "react";
import Head from "next/head"; // import the Head component for appending elements to the head of the page
import favIcon from "../public/favicon/favicon.ico"; // import favIcon as local image so that it will be accessed during "next build"
import LayoutPage from "./components/LayoutPage";

function MyApp({ Component, pageProps }) {
	// Give warning to Internet Explorer (IE) users about compatibility issue
	// Use the useEffect Hook so that the browser objects such as "navigator" can be accessed
	useEffect(() => {
		// Check for "Trident/" for IE 11, check for "MSIE" for IE 10 and older
		let browserIsIE =
			navigator.userAgent.toUpperCase().indexOf("TRIDENT/") != -1 ||
			navigator.userAgent.toUpperCase().indexOf("MSIE") != -1;
		// console.log("Is IE Browser: " + browserIsIE);
		if (browserIsIE) {
			alert(
				"You are using Internet Explorer which isn't supported anymore, please use a modern browser such as Chrome, Firefox, Edge, Opera, and Safari."
			);
		}
	});

	return (
		<div>
			<Head>
				<meta charSet="utf-8" />

				{/* The following title and description will be used if it's not specified on individual pages */}
				<title>Daoxi Sun</title>
				<meta name="description" content="Welcome to my website." />

				{/* Add the favicon in Head, use the "src" property of the imported favIcon as the route */}
				<link rel="icon shortcut" href={favIcon.src} type="image/x-icon" />

				{/* For scaling and layout on mobile devices */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Optional metadata */}
				<meta name="author" content="Daoxi Sun" />
				<meta name="keywords" content="Daoxi Sun, portfolio, projects" />
			</Head>
			<LayoutPage>
				<Component {...pageProps} />
			</LayoutPage>
		</div>
	);
}

export default MyApp;
