// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setLogin } from "../redux/state";
// import { loginUser } from "../services/AuthService";

// const LoginPage = () => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const loggedIn = await loginUser(email, password);

// 			if (loggedIn) {
// 				dispatch(
// 					setLogin({
// 						user: loggedIn.user,
// 						token: loggedIn.token,
// 					})
// 				);
// 				navigate("/");
// 			}
// 		} catch (err) {
// 			console.log("Login failed:", err.message);
// 			alert("Invalid credentials, please try again.");
// 		}
// 	};

// 	return (
// 		<div
// 			className="w-screen h-screen flex justify-center items-center 
// 			bg-[url('/assets/register.jpg')] bg-center bg-cover relative"
// 		>
// 			{/* Overlay */}
// 			<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

// 			{/* Login Card */}
// 			<div
// 				className="relative z-10 flex flex-col gap-6 w-[400px] md:w-[500px] 
// 				p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg
// 				border border-white/20"
// 			>
// 				<h2 className="text-3xl font-bold text-white text-center">
// 					Welcome Back 
// 				</h2>
// 				<p className="text-center text-gray-200">
// 					Please log in to continue
// 				</p>

// 				<form
// 					className="flex flex-col items-center gap-6"
// 					onSubmit={handleSubmit}
// 				>
// 					<input
// 						type="email"
// 						placeholder="Enter your email"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						required
// 						className="w-full px-4 py-3 rounded-lg bg-white/20 
// 						text-white placeholder-gray-300 outline-none 
// 						border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 					/>
// 					<input
// 						type="password"
// 						placeholder="Enter your password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						required
// 						className="w-full px-4 py-3 rounded-lg bg-white/20 
// 						text-white placeholder-gray-300 outline-none 
// 						border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 					/>
// 					<button
// 						type="submit"
// 						className="w-full mt-2 px-10 py-3 rounded-xl 
// 						bg-gradient-to-r from-cyan-400 to-blue-500 
// 						text-white font-semibold text-lg tracking-wide
// 						transition-all duration-300 ease-in-out
// 						hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
// 						hover:from-blue-500 hover:to-cyan-400">
// 						Log In
// 					</button>
// 				</form>

// 				<a
// 					href="/register"
// 					className=" text-m text-center hover:underline mt-2"
// 				>
// 					Don’t have an account?{" "}
// 					<span className="text-cyan-400 font-semibold">
// 						Sign Up Here
// 					</span>
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export default LoginPage;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../redux/state";
import { loginUser } from "../services/AuthService";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const loggedIn = await loginUser(email, password);

			if (loggedIn) {
				dispatch(
					setLogin({
						user: loggedIn.user,
						token: loggedIn.token,
					})
				);
				navigate("/");
			}
		} catch (err) {
			console.log("Login failed:", err.message);
			alert("Invalid credentials, please try again.");
		}
	};

	return (
		<div
			className="w-screen h-screen flex justify-center items-center 
			bg-[url('/assets/register.jpg')] bg-center bg-cover relative"
		>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-gray-900/80 to-black/70 backdrop-blur-md"></div>

			{/* Login Card */}
			<div
				className="relative z-10 flex flex-col gap-6 w-[380px] md:w-[450px] 
				p-10 bg-white/5 backdrop-blur-2xl rounded-3xl 
				shadow-[0_0_50px_rgba(0,25,255,0.15)]
				border border-white/20 hover:shadow-[0_0_50px_rgba(0,25,255,0.3)]
				transition-all duration-500"
			>
				<h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600 drop-shadow-lg">
					Welcome Back 
				</h2>
				<p className="text-center text-gray-300 text-lg">
					Log in to continue your journey
				</p>

				<form className="flex flex-col items-center gap-6 " onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 rounded-xl bg-white/10 
						text-white placeholder-gray-400 outline-none 
						border border-white/30 focus:ring-2 focus:ring-indigo-600
						transition-all duration-300 focus:scale-[1.02]"
					/>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-3 rounded-xl bg-white/10 
						text-white placeholder-gray-400 outline-none 
						border border-white/30 focus:ring-2 focus:ring-indigo-600
						transition-all duration-300 focus:scale-[1.02]"
					/>
					<button
						type="submit"
						className="w-full mt-2 px-10 py-3 rounded-xl 
						bg-gradient-to-r from-cyan-400 to-blue-500 
						text-white font-semibold text-lg tracking-wide
						shadow-[0_0_10px_rgba(0,25,255,0.4)]
						transition-all duration-500 ease-in-out
						hover:scale-105 hover:shadow-[0_0_15px_rgba(0,25,200,0.8)]
						hover:from-blue-500 hover:to-cyan-400"
					>
						Log In
					</button>
				</form>

				<a href="/register" className=" text-center mt-3 ">
					<span className="text-white">Don’t have an account?</span>{" "}
					<span className="text-indigo-500 font-semibold hover:underline">
						Sign Up Here
					</span>
				</a>
			</div>
		</div>
	);
};

export default LoginPage;

