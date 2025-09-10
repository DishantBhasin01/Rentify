// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/AuthService";

// const RegisterPage = () => {
// 	const [formData, setFormData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 		confirmPassword: "",
// 		profileImage: null,
// 	});

// 	const [passwordMatch, setPasswordMatch] = useState(true);
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		setPasswordMatch(
// 			formData.password === formData.confirmPassword || formData.confirmPassword === ""
// 		);
// 	}, [formData.password, formData.confirmPassword]);

// 	const handleChange = (e) => {
// 		const { name, value, files } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: name === "profileImage" ? files[0] : value,
// 		});
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const register_form = new FormData();
// 			for (const key in formData) {
// 				register_form.append(key, formData[key]);
// 			}

// 			await registerUser(register_form);
// 			navigate("/login");
// 		} catch (err) {
// 			console.log("Registration failed", err.message);
// 		}
// 	};

// 	return (
// 		<div
// 			className="w-screen h-screen flex justify-center items-center 
// 			bg-[url('/assets/register.jpg')] bg-center bg-cover relative"
// 		>
// 			{/* Overlay */}
// 			<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

// 			{/* Register Card */}
// 			<div
// 				className="relative z-10 flex flex-col gap-6 w-[420px] md:w-[500px] 
// 				p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl
// 				border border-white/20"
// 			>
// 				<h2 className="text-3xl font-bold text-white text-center">Create Account</h2>
// 				<p className="text-center text-gray-200">Join us and start your journey</p>

// 				<form
// 					className="flex flex-col gap-5"
// 					onSubmit={handleSubmit}
// 				>
// 					{/* First & Last Name */}
// 					<div className="flex gap-4">
// 						<input
// 							placeholder="First Name"
// 							name="firstName"
// 							value={formData.firstName}
// 							onChange={handleChange}
// 							required
// 							className="w-1/2 px-4 py-3 rounded-lg bg-white/20 
// 							text-white placeholder-gray-300 outline-none 
// 							border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 						/>
// 						<input
// 							placeholder="Last Name"
// 							name="lastName"
// 							value={formData.lastName}
// 							onChange={handleChange}
// 							required
// 							className="w-1/2 px-4 py-3 rounded-lg bg-white/20 
// 							text-white placeholder-gray-300 outline-none 
// 							border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 						/>
// 					</div>

// 					<input
// 						placeholder="Email"
// 						name="email"
// 						type="email"
// 						value={formData.email}
// 						onChange={handleChange}
// 						required
// 						className="w-full px-4 py-3 rounded-lg bg-white/20 
// 						text-white placeholder-gray-300 outline-none 
// 						border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 					/>
// 					<input
// 						placeholder="Password"
// 						name="password"
// 						type="password"
// 						value={formData.password}
// 						onChange={handleChange}
// 						required
// 						className="w-full px-4 py-3 rounded-lg bg-white/20 
// 						text-white placeholder-gray-300 outline-none 
// 						border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 					/>
// 					<input
// 						placeholder="Confirm Password"
// 						name="confirmPassword"
// 						type="password"
// 						value={formData.confirmPassword}
// 						onChange={handleChange}
// 						required
// 						className="w-full px-4 py-3 rounded-lg bg-white/20 
// 						text-white placeholder-gray-300 outline-none 
// 						border border-white/30 focus:ring-2 focus:ring-cyan-400"
// 					/>

// 					{!passwordMatch && (
// 						<p className="text-red-500 text-sm text-center">⚠ Passwords do not match!</p>
// 					)}

// 					{/* File Upload */}
// 					<div className="flex flex-col items-center gap-2">
// 						<input
// 							id="image"
// 							type="file"
// 							name="profileImage"
// 							accept="image/*"
// 							className="hidden"
// 							onChange={handleChange}
// 							required
// 						/>
// 						<label
// 							htmlFor="image"
// 							className="flex flex-col justify-center items-center gap-2 
// 							cursor-pointer text-white text-sm hover:opacity-80 transition"
// 						>
// 							<img src="/assets/addImage.png" alt="add profile" className="w-10" />
// 							<p>Upload Your Photo</p>
// 						</label>

// 						{formData.profileImage && (
// 							<img
// 								src={URL.createObjectURL(formData.profileImage)}
// 								alt="profile preview"
// 								className=" rounded-full border border-cyan-400"
// 							/>
// 						)}
// 					</div>

// 					{/* Register Button */}
// 					<button
// 						type="submit"
// 						disabled={!passwordMatch}
// 						className="mt-2 w-full py-3 rounded-xl 
// 						bg-gradient-to-r from-cyan-400 to-blue-500 
// 						text-white font-semibold text-lg tracking-wide
// 						transition-all duration-300 ease-in-out
// 						hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
// 						hover:from-blue-500 hover:to-cyan-400
// 						disabled:opacity-50 disabled:cursor-not-allowed"
// 					>
// 						REGISTER
// 					</button>
// 				</form>

// 				<a
// 					href="/login"
// 					className="text-gray-300 text-m mt-2 text-center hover:text-cyan-400 transition"
// 				>
// 					Already have an account? <span className="text-cyan-400 font-semibold">Log In</span>
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export default RegisterPage;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/AuthService";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		profileImage: null,
	});

	const [passwordMatch, setPasswordMatch] = useState(true);
	const [passwordValid, setPasswordValid] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setPasswordMatch(
			formData.password === formData.confirmPassword || formData.confirmPassword === ""
		);

		setPasswordValid(formData.password.length >= 8 || formData.password === "");
	}, [formData.password, formData.confirmPassword]);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData({
			...formData,
			[name]: name === "profileImage" ? files[0] : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!passwordValid) {
			alert("Password must be at least 8 characters long");
			return;
		}

		if (!passwordMatch) {
			alert("Passwords do not match");
			return;
		}

		try {
			const register_form = new FormData();
			for (const key in formData) {
				register_form.append(key, formData[key]);
			}

			await registerUser(register_form);
			navigate("/login");
		} catch (err) {
			console.log("Registration failed", err.message);
		}
	};

	return (
		<div
			className="w-screen h-screen flex justify-center items-center 
			bg-[url('/assets/register.jpg')] bg-center bg-cover relative"
		>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-gray-900/80 to-black/70 backdrop-blur-md"></div>

			{/* Register Card */}
			<div
				className="relative z-10 flex flex-col gap-6 w-[420px] md:w-[500px] 
				p-10 bg-white/5 backdrop-blur-2xl rounded-3xl 
				shadow-[0_0_40px_rgba(0,25,255,0.15)]
				border border-white/20 hover:shadow-[0_0_50px_rgba(0,25,255,0.3)]
				transition-all duration-500"
			>
				<h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600 drop-shadow-lg">
					Create Account 
				</h2>
				<p className="text-center text-gray-300 text-lg">
					Join us and start your journey
				</p>

				<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
					{/* First & Last Name */}
					<div className="flex gap-4">
						<input
							placeholder="First Name"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
							className="w-1/2 px-4 py-3 rounded-xl bg-white/10 
							text-white placeholder-gray-400 outline-none 
							border border-white/30 focus:ring-2 focus:ring-indigo-600
							transition-all duration-300 focus:scale-[1.02]"
						/>
						<input
							placeholder="Last Name"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
							className="w-1/2 px-4 py-3 rounded-xl bg-white/10 
							text-white placeholder-gray-400 outline-none 
							border border-white/30 focus:ring-2 focus:ring-indigo-600
							transition-all duration-300 focus:scale-[1.02]"
						/>
					</div>

					<input
						placeholder="Email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-xl bg-white/10 
						text-white placeholder-gray-400 outline-none 
						border border-white/30 focus:ring-2 focus:ring-indigo-600
						transition-all duration-300 focus:scale-[1.02]"
					/>
					<input
						placeholder="Password"
						name="password"
						type="password"
						value={formData.password}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-xl bg-white/10 
						text-white placeholder-gray-400 outline-none 
						border border-white/30 focus:ring-2 focus:ring-indigo-600
						transition-all duration-300 focus:scale-[1.02]"
					/>

					{!passwordValid && (
						<p className="text-red-500 text-sm text-center">
							⚠ Password must be at least 8 characters long!
						</p>
					)}

					<input
						placeholder="Confirm Password"
						name="confirmPassword"
						type="password"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-xl bg-white/10 
						text-white placeholder-gray-400 outline-none 
						border border-white/30 focus:ring-2 focus:ring-indigo-600
						transition-all duration-300 focus:scale-[1.02]"
					/>

					{!passwordMatch && (
						<p className="text-red-500 text-sm text-center">⚠ Passwords do not match!</p>
					)}

					{/* File Upload */}
					<div className="flex flex-col items-center gap-2">
						<input
							id="image"
							type="file"
							name="profileImage"
							accept="image/*"
							className="hidden"
							onChange={handleChange}
							required
						/>
						<label
							htmlFor="image"
							className="flex flex-col justify-center items-center gap-2 
							cursor-pointer text-white text-sm hover:opacity-80 transition"
						>
							<img src="/assets/addImage.png" alt="add profile" className="w-10" />
							<p>Upload Your Photo</p>
						</label>

						{formData.profileImage && (
							<img
								src={URL.createObjectURL(formData.profileImage)}
								alt="profile preview"
								className="rounded-full border border-cyan-400 w-20 h-20 object-cover"
							/>
						)}
					</div>

					{/* Register Button */}
					<button
						type="submit"
						disabled={!passwordMatch || !passwordValid}
						className="mt-2 w-full py-3 rounded-xl 
						bg-gradient-to-r from-cyan-400 to-blue-500 
						text-white font-semibold text-lg tracking-wide
						shadow-[0_0_10px_rgba(0,25,255,0.4)]
						transition-all duration-500 ease-in-out
						hover:scale-105 hover:shadow-[0_0_15px_rgba(0,25,255,0.8)]
						hover:from-blue-500 hover:to-cyan-400
						disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Register
					</button>
				</form>

				<a href="/login" className="text-center mt-3">
					<span className="text-white">Already have an account?</span>{" "}
					<span className="text-indigo-600 font-semibold hover:underline">
						Log In
					</span>
				</a>
			</div>
		</div>
	);
};

export default RegisterPage;

