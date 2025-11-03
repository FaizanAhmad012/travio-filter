// components/SidebarFilter.tsx
"use client";
import React, { useState } from "react";

const travelStyles = ["Adventure", "Leisure", "Cultural"];
const interests = ["Nature", "Food", "History"];
const genders = ["Any", "Male", "Female", "Other"];
const ratings = [1, 2, 3, 4, 5];
const foodPreferences = ["Veg", "Non-Veg", "Vegan"];
const tripTypes = ["Solo", "Group", "Family"];
const languages = ["English", "Spanish"];

type FilterState = {
  travelStyle?: string;
  interest?: string;
  genderPreference?: string;
  minRating?: number;
  foodPreference?: string;
  tripType?: string;
  language?: string;
  duration?: number;
  budget?: number;
  ageRange?: number;
};

const SidebarFilter: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>({});
  // Example: handle change for dropdowns
  const handleChange = (name: keyof FilterState, value: any) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <aside className="w-80 p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md">
      {/* Travel Style */}
      <select
        className="border p-2 rounded"
        value={filter.travelStyle ?? ""}
        onChange={e => handleChange("travelStyle", e.target.value)}
      >
        <option value="">Select Travel Style</option>
        {travelStyles.map(style => (
          <option key={style} value={style}>{style}</option>
        ))}
      </select>

      {/* Interests */}
      <select
        className="border p-2 rounded"
        value={filter.interest ?? ""}
        onChange={e => handleChange("interest", e.target.value)}
      >
        <option value="">Select Interest</option>
        {interests.map(interest => (
          <option key={interest} value={interest}>{interest}</option>
        ))}
      </select>

      {/* Gender Preferences */}
      <select
        className="border p-2 rounded"
        value={filter.genderPreference ?? ""}
        onChange={e => handleChange("genderPreference", e.target.value)}
      >
        <option value="">Select Gender Preference</option>
        {genders.map(gender => (
          <option key={gender} value={gender}>{gender}</option>
        ))}
      </select>

      {/* Minimum Rating */}
      <select
        className="border p-2 rounded"
        value={filter.minRating ?? ""}
        onChange={e => handleChange("minRating", Number(e.target.value))}
      >
        <option value="">Minimum Rating</option>
        {ratings.map(rating => (
          <option key={rating} value={rating}>{rating}+</option>
        ))}
      </select>

      {/* Food Preferences */}
      <select
        className="border p-2 rounded"
        value={filter.foodPreference ?? ""}
        onChange={e => handleChange("foodPreference", e.target.value)}
      >
        <option value="">Food Preference</option>
        {foodPreferences.map(food => (
          <option key={food} value={food}>{food}</option>
        ))}
      </select>

      {/* Trip Type */}
      <select
        className="border p-2 rounded"
        value={filter.tripType ?? ""}
        onChange={e => handleChange("tripType", e.target.value)}
      >
        <option value="">Select Trip Type</option>
        {tripTypes.map(trip => (
          <option key={trip} value={trip}>{trip}</option>
        ))}
      </select>

      {/* Language */}
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Language"
        value={filter.language ?? ""}
        onChange={e => handleChange("language", e.target.value)}
      />
      <div className="flex gap-2">
        {languages.map(lang => (
          <span key={lang} className="bg-red-200 text-red-700 rounded-full px-3 py-1 text-xs">{lang}</span>
        ))}
      </div>

      {/* Duration, Budget, Age Range */}
      <div className="flex flex-col gap-2">
        <label>
          Duration
          <input
            type="range"
            min={0} max={50}
            value={filter.duration ?? 0}
            onChange={e => handleChange("duration", Number(e.target.value))}
            className="w-full mt-2"
          />
        </label>
        <label>
          Budget
          <input
            type="range"
            min={0} max={50000}
            value={filter.budget ?? 0}
            onChange={e => handleChange("budget", Number(e.target.value))}
            className="w-full mt-2"
          />
        </label>
        <label>
          Age Range
          <input
            type="range"
            min={12} max={50}
            value={filter.ageRange ?? 12}
            onChange={e => handleChange("ageRange", Number(e.target.value))}
            className="w-full mt-2"
          />
        </label>
      </div>

      {/* Apply Filter Button */}
      <button className="bg-red-400 text-white px-4 py-2 rounded mt-4 hover:bg-red-500 transition">
        Apply Filter
      </button>
    </aside>
  );
};

export default SidebarFilter;
