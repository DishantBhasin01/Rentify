import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { categories, types, facilities } from "../data";

import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IoIosImages } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const CreateListing = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  /* LOCATION */
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({ ...formLocation, [name]: value });
  };

  /* BASIC COUNTS */
  const [guestCount, setGuestCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);

  /* AMENITIES */
  const [amenities, setAmenities] = useState([]);
  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prev) => prev.filter((x) => x !== facility));
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  /* UPLOAD, DRAG & DROP, REMOVE PHOTOS */
  const [photos, setPhotos] = useState([]);
  const handleUploadPhotos = (e) => {
    const newPhotos = Array.from(e.target.files);
    setPhotos((prev) => [...prev, ...newPhotos]);
  };
  const handleDragPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPhotos(items);
  };
  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  /* DESCRIPTION */
  const [formDescription, setFormDescription] = useState({
    title: "",
    description: "",
    highlight: "",
    highlightDesc: "",
    price: 0,
  });
  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({ ...formDescription, [name]: value });
  };

  const creatorId = useSelector((state) => state.user?._id);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAddress);
      listingForm.append("aptSuite", formLocation.aptSuite);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("guestCount", guestCount);
      listingForm.append("bedroomCount", bedroomCount);
      listingForm.append("bedCount", bedCount);
      listingForm.append("bathroomCount", bathroomCount);
      listingForm.append("amenities", JSON.stringify(amenities)); // stringify arrays when sending via FormData
      listingForm.append("title", formDescription.title);
      listingForm.append("description", formDescription.description);
      listingForm.append("highlight", formDescription.highlight);
      listingForm.append("highlightDesc", formDescription.highlightDesc);
      listingForm.append("price", formDescription.price);
      photos.forEach((p) => listingForm.append("listingPhotos", p));

      const response = await fetch("http://localhost:3001/properties/create", {
        method: "POST",
        body: listingForm,
      });
      if (response.ok) navigate("/");
    } catch (err) {
      console.log("Publish Listing failed", err.message);
    }
  };

  /* --------- THEME HELPERS (glass + cyan) --------- */
  const card =
    "rounded-2xl p-8 mt-10 border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)]";
  const field =
    "w-full border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60";
  const tileBase = "transition rounded-2xl border font-semibold text-slate-100";
  const tileIdle =
    "border-white/10 bg-white/10 hover:border-cyan-400/60 hover:bg-cyan-400/10";
  const tileActive = "border-cyan-400 bg-cyan-400/15 ring-2 ring-cyan-400/30 text-cyan-200";

  return (
    <>
      <Navbar />

      {/* PAGE BG like hero: deep indigo gradient */}
      <div className="min-h-screen bg-gradient-to-b from-[#0f1126] via-[#141233] to-[#1a123d] px-6 md:px-4 py-10 lg:px-14">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white drop-shadow-sm">Publish Your Place</h1>

        <form onSubmit={handlePost}>
          {/* STEP 1 */}
          <div className={card}>
            <h2 className="text-cyan-300 text-xl font-bold">Step 1: Tell us about your place</h2>
            <hr className="my-6 border-white/10" />

            <h3 className="text-slate-100 text-lg font-semibold mb-5">
              Which of these categories best describes your place?
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              {categories?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCategory(item.label)}
                  className={`${tileBase} ${category === item.label ? tileActive : tileIdle} flex flex-col justify-center items-center w-28 h-24 cursor-pointer`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <h3 className="text-slate-100 text-lg font-semibold mt-10 mb-5">
              What type of place will guests have?
            </h3>
            <div className="flex flex-col gap-5">
              {types?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setType(item.name)}
                  className={`${tileBase} ${type === item.name ? tileActive : tileIdle} flex justify-between items-center max-w-xl p-5 cursor-pointer rounded-2xl`}
                >
                  <div className="max-w-sm">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                  <div className="text-3xl">{item.icon}</div>
                </div>
              ))}
            </div>

            <h3 className="text-slate-100 text-lg font-semibold mt-10 mb-5">Where&apos;s your place located?</h3>
            <div className="max-w-2xl">
              <label className="font-bold text-slate-200 block mb-2">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formLocation.streetAddress}
                onChange={handleChangeLocation}
                placeholder="Street Address"
                required
                className={field}
              />
            </div>

            <div className="grid grid-cols-2 gap-10 max-w-2xl mt-6 md:grid-cols-1">
              <div>
                <label className="font-bold text-slate-200 block mb-2">Apartment, Suite, etc.</label>
                <input
                  type="text"
                  name="aptSuite"
                  value={formLocation.aptSuite}
                  onChange={handleChangeLocation}
                  placeholder="Apt, Suite, etc."
                  className={field}
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-200 block mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formLocation.city}
                  onChange={handleChangeLocation}
                  placeholder="City"
                  className={field}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 max-w-2xl mt-6 md:grid-cols-1">
              <div>
                <label className="font-bold text-slate-200 block mb-2">Province</label>
                <input
                  type="text"
                  name="province"
                  value={formLocation.province}
                  onChange={handleChangeLocation}
                  placeholder="Province"
                  className={field}
                  required
                />
              </div>
              <div>
                <label className="font-bold text-slate-200 block mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formLocation.country}
                  onChange={handleChangeLocation}
                  placeholder="Country"
                  className={field}
                  required
                />
              </div>
            </div>

            {/* basics */}
            <h3 className="text-slate-100 text-lg font-semibold mt-10 mb-5">Share some basics about your place</h3>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Guests", count: guestCount, set: setGuestCount },
                { label: "Bedrooms", count: bedroomCount, set: setBedroomCount },
                { label: "Beds", count: bedCount, set: setBedCount },
                { label: "Bathrooms", count: bathroomCount, set: setBathroomCount },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className={`${tileBase} ${tileIdle} flex items-center gap-5 p-4 rounded-2xl`}
                >
                  <p className="font-semibold">{b.label}</p>
                  <div className="flex items-center gap-3 text-lg">
                    <RemoveCircleOutline
                      onClick={() => b.count > 1 && b.set(b.count - 1)}
                      className="cursor-pointer hover:text-cyan-300"
                    />
                    <p>{b.count}</p>
                    <AddCircleOutline
                      onClick={() => b.set(b.count + 1)}
                      className="cursor-pointer hover:text-cyan-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 2 */}
          <div className={card}>
            <h2 className="text-cyan-300 text-xl font-bold">Step 2: Make your place stand out</h2>
            <hr className="my-6 border-white/10" />

            <h3 className="text-slate-100 text-lg font-semibold mb-5">Tell guests what your place has to offer</h3>
            <div className="flex flex-wrap gap-5">
              {facilities?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectAmenities(item.name)}
                  className={`${tileBase} ${amenities.includes(item.name) ? tileActive : tileIdle} flex flex-col justify-center items-center w-48 h-24 cursor-pointer`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>

            <h3 className="text-slate-100 text-lg font-semibold mt-10 mb-5">Add some photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div className="flex flex-wrap gap-4" {...provided.droppableProps} ref={provided.innerRef}>
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label
                          htmlFor="image"
                          className="flex flex-col justify-center items-center border-2 border-dashed border-white/15 hover:border-cyan-400/60 p-10 rounded-2xl bg-white/5 hover:bg-cyan-400/5 transition cursor-pointer text-slate-100"
                        >
                          <IoIosImages className="text-6xl" />
                          <p className="font-semibold text-center">Upload from your device</p>
                        </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => (
                          <Draggable key={index} draggableId={index.toString()} index={index}>
                            {(providedDraggable) => (
                              <div
                                className="relative w-64 h-40 cursor-move"
                                ref={providedDraggable.innerRef}
                                {...providedDraggable.draggableProps}
                                {...providedDraggable.dragHandleProps}
                              >
                                <img src={URL.createObjectURL(photo)} alt="place" className="w-full h-full rounded-xl object-cover" />
                                <button
                                  type="button"
                                  onClick={() => handleRemovePhoto(index)}
                                  className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded hover:bg-black/70"
                                >
                                  <BiTrash size={18} />
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        <input
                          id="image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label
                          htmlFor="image"
                          className="flex flex-col justify-center items-center border-2 border-dashed border-white/15 hover:border-cyan-400/60 w-64 h-40 rounded-2xl bg-white/5 hover:bg-cyan-400/5 transition cursor-pointer text-slate-100"
                        >
                          <IoIosImages className="text-6xl" />
                          <p className="font-semibold text-center">Upload from your device</p>
                        </label>
                      </>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            <h3 className="text-slate-100 text-lg font-semibold mt-10 mb-5">What makes your place attractive and exciting?</h3>
            <div>
              <label className="font-bold text-slate-200 block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formDescription.title}
                onChange={handleChangeDescription}
                placeholder="Title"
                required
                className={`${field} max-w-lg`}
              />
              <label className="font-bold text-slate-200 block mt-6 mb-2">Description</label>
              <textarea
                name="description"
                value={formDescription.description}
                onChange={handleChangeDescription}
                placeholder="Description"
                required
                className={`${field} max-w-lg`}
              />
              <label className="font-bold text-slate-200 block mt-6 mb-2">Highlight</label>
              <input
                type="text"
                name="highlight"
                value={formDescription.highlight}
                onChange={handleChangeDescription}
                placeholder="Highlight"
                required
                className={`${field} max-w-lg`}
              />
              <label className="font-bold text-slate-200 block mt-6 mb-2">Highlight details</label>
              <textarea
                name="highlightDesc"
                value={formDescription.highlightDesc}
                onChange={handleChangeDescription}
                placeholder="Highlight details"
                required
                className={`${field} max-w-lg`}
              />
              <label className="font-bold text-slate-200 block mt-6 mb-2">Now, set your PRICE</label>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cyan-300">$</span>
                <input
                  type="number"
                  name="price"
                  value={formDescription.price}
                  onChange={handleChangeDescription}
                  placeholder="100"
                  required
                  className="w-40 border border-white/10 bg-white/5 text-slate-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 bg-cyan-500/90 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-bold shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition"
          >
            CREATE YOUR LISTING
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default CreateListing;
