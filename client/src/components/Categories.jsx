// import { categories } from "../data";
// import { Link } from "react-router-dom";

// const Categories = () => {
// 	return (
// 		<div className="flex flex-col items-center text-center bg-gray-100 px-5 sm:px-20 py-12">
// 			<h1 className="text-blue-600 text-4xl font-extrabold mb-4">Explore Top Categories</h1>

// 			<p className="max-w-2xl text-lg text-gray-700">
// 				Explore our wide range of vacation rentals that cater to all types of travelers. Immerse yourself in the local culture, enjoy the
// 				comforts of home, and create unforgettable memories in your dream destination.
// 			</p>

// 			<div className="flex flex-wrap justify-center gap-5 py-12">
// 				{categories?.slice(1, 7).map((category, index) => (
// 					<Link to={`/properties/category/${category.label}`} key={index}>
// 						<div className="relative flex justify-center items-center w-[250px] h-[200px] cursor-pointer overflow-hidden rounded-xl shadow-md group">
// 							{/* Background Image */}
// 							<img src={category.img} alt={category.label} className="absolute w-full h-full object-cover" />

// 							{/* Overlay */}
// 							<div className="absolute w-full h-full bg-black/55 transition-all duration-300 ease-in-out group-hover:w-[80%] group-hover:h-[80%] rounded-lg"></div>

// 							{/* Text */}
// 							<div className="relative text-white flex flex-col items-center">
// 								<div className="text-4xl mb-1">{category.icon}</div>
// 								<p className="font-semibold">{category.label}</p>
// 							</div>
// 						</div>
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Categories;



// import { categories } from "../data";
// import { Link } from "react-router-dom";

// const Categories = () => {
// 	return (
// 		<div className="flex flex-col items-center text-center bg-gradient-to-b from-gray-50 to-gray-100 px-6 sm:px-20 py-16">
// 			{/* Heading */}
// 			<h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold mb-4">
// 				<span className="text-blue-600">Explore</span> Top Categories
// 			</h1>

// 			<p className="max-w-2xl text-lg text-gray-600 mb-12">
// 				Find the perfect stay that matches your vibe. From cozy homes to luxury villas, Rentify has it all waiting for you.
// 			</p>

// 			{/* Categories Grid */}
// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// 				{categories?.slice(1, 7).map((category, index) => (
// 					<Link to={`/properties/category/${category.label}`} key={index}>
// 						<div className="relative flex flex-col justify-end items-center w-[280px] h-[220px] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition duration-500 hover:scale-105">
// 							{/* Background Image */}
// 							<img
// 								src={category.img}
// 								alt={category.label}
// 								className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
// 							/>

// 							{/* Glass Overlay */}
// 							<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

// 							{/* Text Content */}
// 							<div className="relative z-10 text-center text-white p-4 bg-white/10 backdrop-blur-md rounded-xl mb-4 w-[80%]">
// 								<div className="text-3xl mb-2">{category.icon}</div>
// 								<p className="text-lg font-semibold">{category.label}</p>
// 							</div>
// 						</div>
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Categories;


import { categories } from "../data";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="flex flex-col items-center text-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]  px-6 sm:px-20 py-16">
			{/* Heading */}
			<h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
				<span className="text-blue-400">Explore</span> Top Categories
			</h1>

			<p className="max-w-2xl text-lg text-gray-300 mb-12">
				Find the perfect stay that matches your vibe. From cozy homes to luxury villas, Rentify has it all waiting for you.
			</p>

			{/* Categories Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{categories?.slice(1, 7).map((category, index) => (
					<Link to={`/properties/category/${category.label}`} key={index}>
						<div className="relative flex flex-col justify-end items-center w-[280px] h-[220px] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition duration-500 hover:scale-105">
							{/* Background Image */}
							<img
								src={category.img}
								alt={category.label}
								className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
							/>

							{/* Dark Overlay */}
							<div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

							{/* Text Content */}
							<div className="relative z-10 text-center text-white p-4 bg-white/10 backdrop-blur-md rounded-xl mb-4 w-[80%]">
								<div className="text-3xl mb-2">{category.icon}</div>
								<p className="text-lg font-semibold">{category.label}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
