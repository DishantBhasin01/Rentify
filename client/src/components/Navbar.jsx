import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";

const Navbar = () => {
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [search, setSearch] = useState("");

	const user = useSelector((state) => state.user);
	console.log(user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center py-4 px-6 sm:px-20 
			bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] 
			shadow-lg relative">
			
			{/* 👇 Logo */}
			<Link to="/">
				<img src="/assets/logo.png" alt="logo" className="w-[120px] cursor-pointer drop-shadow-lg" />
			</Link>

			{/* 👇 Search Bar */}
			<div className="hidden lg:flex items-center gap-4 
				backdrop-blur-md bg-white/10 border border-white/20 
				rounded-full h-[45px] px-5 
				hover:shadow-[0_0_15px_rgba(0,200,255,0.5)] transition">
				
				<input
					type="text"
					placeholder="Search..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="outline-none bg-transparent text-white placeholder-gray-300 w-[200px]"
				/>
				<IconButton
					disabled={!search}
					onClick={() => navigate(`/properties/search/${search}`)}
				>
					<Search sx={{ color: "#00e5ff" }} />
				</IconButton>
			</div>

			{/* 👇 Right Section */}
			<div className="flex items-center gap-6 text-white ">
				{user ? (
					<Link 
						to="/create-listing" 
						className="transition backdrop-blur-md border border-white/20 
						rounded-2xl py-2 px-2 hover:shadow-[0_0_15px_rgba(0,200,255,0.5)]">
						Become A Host
					</Link>
				) : (
					<Link 
						to="/login" 
						className="transition backdrop-blur-md border border-white/20 
						rounded-2xl py-2 px-2 hover:shadow-[0_0_15px_rgba(0,200,255,0.5)]">
						Become A Host
					</Link>
				)}

				{/* Menu Button */}
				<button
					onClick={() => setDropdownMenu((prev) => !prev)}
					className="flex items-center gap-2 
						bg-white/10 backdrop-blur-md border border-white/20 
						rounded-full h-[45px] px-4 
						hover:shadow-[0_0_15px_rgba(0,200,255,0.5)] 
						transition"
				>
					<Menu sx={{ color: "#00e5ff" }} />
					{!user ? (
						<Person sx={{ color: "#00e5ff" }} />
					) : (
						<img
							src={
								user?.profileImagePath
									? `http://localhost:3001/${user.profileImagePath}`
									: "/assets/logo.png"
							}
							alt="profile"
							className="w-[30px] h-[30px] rounded-full object-cover border border-cyan-400"
						/>
					)}
				</button>

				{/* 👇 Dropdown Menu */}
				{dropdownMenu && !user && (
					<div className="absolute right-5 sm:right-20 top-20 flex flex-col 
						w-[220px] bg-white/10 backdrop-blur-md border border-white/20 
						rounded-2xl shadow-lg z-[9999] py-2">
						<Link to="/login" className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Log In
						</Link>
						<Link to="/register" className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Sign Up
						</Link>
					</div>
				)}

				{dropdownMenu && user && (
					<div className="absolute right-5 sm:right-20 top-20 flex flex-col 
						w-[220px] bg-white/10 backdrop-blur-md border border-white/20 
						rounded-2xl shadow-lg z-[9999] py-2">
						<Link to={`/${user._id}/trips`} className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Trip List
						</Link>
						<Link to={`/${user._id}/wishList`} className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Wish List
						</Link>
						<Link to={`/${user._id}/properties`} className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Property List
						</Link>
						<Link to={`/${user._id}/reservations`} className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Reservation List
						</Link>
						<Link to="/create-listing" className="px-4 py-2 text-white hover:text-cyan-400 hover:bg-white/10 transition">
							Become A Host
						</Link>
						<Link
							to="/login"
							onClick={() => dispatch(setLogout())}
							className="px-4 py-2 text-white hover:text-red-400 hover:bg-white/10 transition"
						>
							Log Out
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
