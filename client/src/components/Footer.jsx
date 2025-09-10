// import { LocationOn, LocalPhone, Email } from "@mui/icons-material";

// const Footer = () => {
// 	return (
// 		<div className="flex justify-between items-start gap-12 px-5 lg:px-8 py-6">
// 			{/* Left */}
// 			<div className="max-w-[400px] flex flex-col">
// 				<a href="/">
// 					<img src="/assets/logo.png" alt="logo" className="max-w-[150px] mb-5" />
// 				</a>
// 				{/* Example Socials (optional) */}
// 				{/* <div className="flex gap-6 mt-5">
//           <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-110">
//             <YourIcon />
//           </div>
//         </div> */}
// 			</div>

// 			{/* Center */}
// 			<div className="hidden md:flex flex-col">
// 				<h3 className="font-bold text-lg">Useful Links</h3>
// 				<ul className="mt-5 list-none cursor-pointer space-y-2">
// 					<li className="hover:text-pink-500 transition">About Us</li>
// 					<li className="hover:text-pink-500 transition">Terms and Conditions</li>
// 					<li className="hover:text-pink-500 transition">Return and Refund Policy</li>
// 				</ul>
// 			</div>

// 			{/* Right */}
// 			<div className="hidden sm:flex flex-col max-w-[350px]">
// 				<h3 className="mb-5 font-bold text-lg">Contact</h3>
// 				<div className="flex items-center mb-3">
// 					<LocalPhone />
// 					<p className="ml-5">+1 234 567 890</p>
// 				</div>
// 				<div className="flex items-center mb-3">
// 					<Email />
// 					<p className="ml-5">dreamnest@support.com</p>
// 				</div>
// 				<img src="/assets/payment.png" alt="payment" className="mt-3" />
// 			</div>
// 		</div>
// 	);
// };

// export default Footer;



// import { LocalPhone, Email } from "@mui/icons-material";

// const Footer = () => {
// 	return (
// 		<footer className="bg-gray-100 border-t mt-10">
// 			<div className="flex flex-col sm:flex-row justify-between items-start gap-12 px-5 lg:px-8 py-10">
				
// 				{/* Left */}
// 				<div className="max-w-[400px] flex flex-col">
// 					<a href="/">
// 						<img src="/assets/logo.png" alt="logo" className="max-w-[150px] mb-5" />
// 					</a>
// 					<p className="text-sm text-gray-600">
// 						Your trusted platform for finding dream homes and rentals with ease.
// 					</p>
// 				</div>

// 				{/* Center */}
// 				<div className="flex flex-col">
// 					<h3 className="font-bold text-lg">Useful Links</h3>
// 					<ul className="mt-5 list-none space-y-2">
// 						<li>
// 							<a href="/about" className="hover:text-pink-500 transition">About Us</a>
// 						</li>
// 						<li>
// 							<a href="/terms" className="hover:text-pink-500 transition">Terms & Conditions</a>
// 						</li>
// 						<li>
// 							<a href="/refund" className="hover:text-pink-500 transition">Return & Refund Policy</a>
// 						</li>
// 					</ul>
// 				</div>

// 				{/* Right */}
// 				<div className="flex flex-col max-w-[350px]">
// 					<h3 className="mb-5 font-bold text-lg">Contact</h3>
// 					<div className="flex items-center mb-3">
// 						<LocalPhone />
// 						<p className="ml-5">+1 234 567 890</p>
// 					</div>
// 					<div className="flex items-center mb-3">
// 						<Email />
// 						<p className="ml-5">dreamnest@support.com</p>
// 					</div>
// 					<img src="/assets/payment.png" alt="payment" className="mt-3 max-w-[200px]" />
// 				</div>
// 			</div> 
// 		</footer>
// 	);
// };

// export default Footer;


import { LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
	return (
		<footer className="flex justify-between items-center py-3 px-6 sm:px-20 
			bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] 
			shadow-lg relative">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-12 py-12">
				
				{/* Left Section */}
				<div>
					<a href="/">
						<img src="/assets/logo.png" alt="logo" className="max-w-[160px] mb-6" />
					</a>
					<p className="text-sm leading-relaxed text-gray-400">
						Your trusted platform for finding dream homes and rentals with ease.
					</p>
				</div>

				{/* Middle Section */}
				<div>
					<h3 className="font-semibold text-lg text-white">Useful Links</h3>
					<ul className="mt-5 space-y-3 text-sm text-gray-400">
						<li>
							<a href="/about" className="text-white">About Us</a>
						</li>
						<li>
							<a href="/terms" >Terms & Conditions</a>
						</li>
						<li>
							<a href="/refund" >Return & Refund Policy</a>
						</li>
					</ul>
				</div>

				{/* Right Section */}
				<div>
					<h3 className="font-semibold text-lg text-white mb-5">Contact</h3>
					<div className="flex items-center gap-3 mb-4 text-gray-400">
						<span className="p-2 rounded-full bg-pink-500 text-white">
							<LocalPhone fontSize="small" />
						</span>
						<p className="text-sm">+1 234 567 890</p>
					</div>
					<div className="flex items-center gap-3 mb-4 text-gray-400">
						<span className="p-2 rounded-full bg-pink-500 text-white">
							<Email fontSize="small" />
						</span>
						<p className="text-sm">dreamnest@support.com</p>
					</div>
					<img src="/assets/payment.png" alt="payment" className="mt-4 max-w-[220px]" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
