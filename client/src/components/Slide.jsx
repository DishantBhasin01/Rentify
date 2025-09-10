// const Slide = () => {
// 	return (
// 		<div
// 			className="w-screen h-[80vh] bg-center bg-top bg-cover flex items-center justify-center"
// 			style={{
// 				backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/slide.jpg')",
// 			}}
// 		>
// 			<h1 className="text-white text-4xl text-center p-10">
// 				Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your memories
// 			</h1>
// 		</div>
// 	);
// };

// export default Slide;


const Slide = () => {
	return (
		<div
			className="w-screen h-[85vh] bg-center bg-cover flex items-center justify-center relative "
			style={{
				backgroundImage:
					"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/slide.jpg')",
			}}
		>
			{/* Content */}
			<div className="text-center text-white px-6 animate-fadeIn">
				<h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
					Welcome Home, Wherever You Roam
				</h1>
				<p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
					Stay in the moment. Make your memories unforgettable with our curated stays & rentals.
				</p>

				{/* CTA Button */}
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
					Explore Now
				</button>
			</div>
		</div>
	);
};

export default Slide;
