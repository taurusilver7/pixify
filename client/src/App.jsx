import React from "react";
import { CreatePost, Home } from "./pages";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { logo } from "./assets";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<BrowserRouter>
			<Toaster position="top-right" />
			<header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
				<Link to="/">
					<img src={logo} alt="logo" className="w-28 object-contain" />
				</Link>
				<Link
					to="/create"
					className="font-inter font-medium bg-[#0C0D0D] text-white px-4 py-2 rounded-md"
				>
					Create
				</Link>
			</header>

			<main className="sm:p-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<CreatePost />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
