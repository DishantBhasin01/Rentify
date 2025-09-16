import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";
import { DateRange } from "react-date-range";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { getListingById } from "../services/ListingsService.js";
import { createBooking } from "../services/BookingService.js";

const ListingDetails = () => {
	const [loading, setLoading] = useState(true);
	const { listingId } = useParams();
	const [listing, setListing] = useState(null);

	const [checkIn, setCheckIn] = useState(new Date());
	const [checkOut, setCheckOut] = useState(new Date());

	const customerId = useSelector((state) => state?.user?._id);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchListing = async () => {
			try {
				const data = await getListingById(listingId);
				setListing(data);
				setLoading(false);
			} catch (err) {
				console.log("Fetch Listing Details Failed:", err.message);
				setLoading(false);
			}
		};
		fetchListing();
	}, [listingId]);

	const handleCheckInChange = (date) => {
		setCheckIn(date);
		if (date >= checkOut) {
			setCheckOut(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // Set checkout to next day
		}
	};

	const handleCheckOutChange = (date) => {
		setCheckOut(date);
	};

	const start = new Date(checkIn);
	const end = new Date(checkOut);
	const dayCount = Math.max(
		Math.round((end - start) / (1000 * 60 * 60 * 24)),
		1
	);

	const handleSubmit = async () => {
		try {
			const bookingForm = {
				customerId,
				listingId,
				hostId: listing.creator?._id,
				startDate: checkIn.toDateString(),
				endDate: checkOut.toDateString(),
				totalPrice: listing.price * dayCount,
			};
			await createBooking(bookingForm);
			navigate(`/${customerId}/trips`);
		} catch (err) {
			console.log("Submit Booking Failed:", err.message);
		}
	};

	if (loading) return <Loader />;

	if (!listing)
		return (
			<>
				<Navbar />
				<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
					<h1 className="text-3xl font-extrabold mb-3">Listing Not Found</h1>
					<p className="text-gray-300 mb-6 text-center">
						The listing you're looking for doesn't exist or has been removed.
					</p>
					<button
						onClick={() => navigate("/")}
						className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow hover:scale-105 transition-transform"
					>
						Go Back Home
					</button>
				</div>
				<Footer />
			</>
		);

	return (
		<>
			<Navbar />
			<div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
				<div className="max-w-6xl mx-auto p-6">
					{/* Title */}
					<h1 className="text-4xl font-extrabold drop-shadow mb-6">
						{listing.title}
					</h1>

					{/* Photos */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
						{listing.listingPhotoPaths?.map((photo, idx) => (
							<img
								key={idx}
								src={`http://localhost:3001/${photo}`}
								alt="listing"
								className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform"
							/>
						))}
					</div>

					{/* Info Section */}
					<div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-2xl shadow-xl mb-6">
						<h2 className="text-2xl font-bold">
							{listing.type} in {listing.city}, {listing.province},{" "}
							{listing.country}
						</h2>
						<p className="text-gray-300 mt-2">
							{listing.guestCount} guests · {listing.bedroomCount} bedrooms ·{" "}
							{listing.bedCount} beds · {listing.bathroomCount} bathrooms
						</p>
					</div>

					{/* Host Info */}
					<div className="flex items-center gap-4 mb-8 backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20 shadow-md">
						{listing.creator ? (
							<>
								<img
									src={`http://localhost:3001/${listing.creator?.profileImagePath?.replace(
										"public",
										""
									)}`}
									alt="host"
									className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow"
								/>
								<div>
									<h3 className="text-xl font-semibold">
										Hosted by {listing.creator.firstName}{" "}
										{listing.creator.lastName}
									</h3>
									<p className="text-gray-300 text-sm">Verified Host</p>
								</div>
							</>
						) : (
							<p className="text-gray-400">Host info not available</p>
						)}
					</div>

					{/* Description */}
					<div className="mb-6">
						<h3 className="text-2xl font-semibold mb-3">About this place</h3>
						<p className="text-gray-200 leading-relaxed">{listing.description}</p>
					</div>

					{/* Highlight Section */}
					{listing.highlight && (
						<div className="mb-8 bg-white/10 border border-yellow-400 p-4 rounded-2xl backdrop-blur-md shadow">
							<h3 className="text-lg font-semibold text-yellow-300">
								{listing.highlight}
							</h3>
							<p className="text-gray-200">{listing.highlightDesc}</p>
						</div>
					)}

					{/* Booking + Amenities */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Amenities */}
						<div className="mt-8">
							<h2 className="text-2xl font-bold text-white mb-4">
								What this place offers
							</h2>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
								{listing.amenities?.[0]
									?.split(",")
									.map((item, idx) => (
										<div key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg shadow-sm">
											<span className="text-cyan-400 text-lg">•</span>
											<span className="text-white">{item.trim()}</span>
										</div>
									))}
							</div>
						</div>

						{/* Booking Card - IMPROVED STYLING */}
						<div className="backdrop-blur-lg bg-gradient-to-br from-gray-900/70 to-gray-800/60 p-6 rounded-2xl border border-white/20 shadow-2xl w-full max-w-md">
							{/* Price Section */}
							<div className="flex flex-col items-start mb-2">
								<h2 className="text-2xl font-extrabold text-cyan-400">
									${listing.price}
									<span className="text-gray-300 font-medium text-lg"> / night</span>
								</h2>
								<p className="text-gray-300 text-sm mt-2">
									Total:{" "}
									<span className="text-white font-semibold text-lg">
										${listing.price * dayCount}
									</span>{" "}
									for {dayCount} {dayCount > 1 ? "nights" : "night"}
								</p>
							</div>

							{/* Date Picker Container */}
							<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner p-4 mb-6">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-gray-400 text-xs font-medium mb-2">CHECK-IN</label>
										<input
											type="date"
											value={checkIn.toISOString().split('T')[0]}
											onChange={(e) => handleCheckInChange(new Date(e.target.value))}
											className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
											min={new Date().toISOString().split('T')[0]}
										/>
									</div>
									<div>
										<label className="block text-gray-400 text-xs font-medium mb-2">CHECK-OUT</label>
										<input
											type="date"
											value={checkOut.toISOString().split('T')[0]}
											onChange={(e) => handleCheckOutChange(new Date(e.target.value))}
											className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
											min={checkIn.toISOString().split('T')[0]}
										/>
									</div>
								</div>
							</div>

							{/* Button */}
							<button
								onClick={handleSubmit}
								className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-200"
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ListingDetails;	