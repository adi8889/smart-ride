

import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-6 space-y-4 bg-white rounded-2xl shadow"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Drop Location</label>
          <input
            type="text"
            name="drop"
            value={formData.drop}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Book Ride
      </button>
    </form>
  );
}

export default BookingForm;
