import React from "react";
import { Home } from "./pages";
import { BrowserRouter, Link } from "react-router-dom";
import { logo } from "./assets";

function App() {
	return (
		<BrowserRouter>
			<header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
				<Link to="/">
					<img src={logo} alt="logo" className="w-28 object-contain" />
				</Link>
				<Link
					to="/create-post"
					className="font-inter font-medium bg-[#0C0D0D] text-white px-4 py-2 rounded-md"
				>
					Create
				</Link>
			</header>

			<main className="sm:p-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
				Main part
			</main>
		</BrowserRouter>
	);
}

export default App;