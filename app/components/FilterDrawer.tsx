 "use client";

import { useState } from "react";
import {
  X,
  SlidersHorizontal,
  ArrowLeft,
  Search,
  Filter,
} from "lucide-react";
import { FaUsers, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Locals");

  // Filter state
  const [filters, setFilters] = useState({
    travelStyle: "",
    interests: "",
    gender: "",
    rating: "",
    food: "",
    tripType: "",
    language: "",
    duration: 0,
    budget: 0,
    age: 12,
  });

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      travelStyle: "",
      interests: "",
      gender: "",
      rating: "",
      food: "",
      tripType: "",
      language: "",
      duration: 0,
      budget: 0,
      age: 12,
    });
  };

  return (
    <div>
      {/* Floating Filter Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-xl shadow-md hover:bg-rose-600 z-50"
        >
          <SlidersHorizontal size={18} />
          <span className="text-sm font-medium">Filter</span>
        </button>
      )}

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-start z-40">
          <div className="relative w-full sm:w-[400px] h-full bg-white p-5 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-rose-500"
              >
                <ArrowLeft size={20} />
                <span className="font-medium text-sm">Back</span>
              </button>


            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Shimla, Himachal Pradesh, India"
                className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-rose-400"
              />
            </div>


            { /*filte and clear all*/}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-rose-500">
                <Filter size={18} />
                <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
              </div>

              <button
                onClick={clearAllFilters}
                className="text-sm  text-rose-500 hover:text-rose-600 font-medium"
              >
                Clear All
              </button>
              </div>

            {/* Locals / Nearby / Starting Point */}
            <div className="flex justify-between mb-6">
              {[
                { name: "Locals", icon: <FaUsers size={17} /> },
                { name: "Nearby", icon: <FaMapMarkerAlt size={16} /> },
                { name: "Starting Point" },
              ].map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex-1 mx-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium border transition-all ${
                    activeTab === tab.name
                      ? "bg-rose-100 text-rose-600 border-rose-300"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-rose-50"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Select Fields */}
            <Select
              label="Travel Style"
              value={filters.travelStyle}
              onChange={(v) => setFilters({ ...filters, travelStyle: v })}
            />
            <Select
              label="Interests"
              value={filters.interests}
              onChange={(v) => setFilters({ ...filters, interests: v })}
            />
            <Select
              label="Gender Preferences"
              value={filters.gender}
              onChange={(v) => setFilters({ ...filters, gender: v })}
            />
            <Select
              label="Minimum Rating"
              value={filters.rating}
              onChange={(v) => setFilters({ ...filters, rating: v })}
            />
            <Select
              label="Food Preferences"
              value={filters.food}
              onChange={(v) => setFilters({ ...filters, food: v })}
            />
            <Select
              label="Trip Type"
              value={filters.tripType}
              onChange={(v) => setFilters({ ...filters, tripType: v })}
            />

            {/* Language Input */}
            <div className="mb-4">
              <label className="block text-sm mb-1 font-medium">Language</label>
              <input
                type="text"
                value={filters.language}
                onChange={(e) =>
                  setFilters({ ...filters, language: e.target.value })
                }
                placeholder="Reallocate"
                className="w-full border rounded-lg p-2 focus:ring-1 focus:ring-rose-400"
              />
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm">
                  English
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm">
                  Spanish
                </span>
              </div>
            </div>

            {/* Sliders */}
            <Slider
              label="Duration"
              min={0}
              max={50}
              leftLabel="0 Day"
              rightLabel="50+ Days"
              value={filters.duration}
              onChange={(v) => setFilters({ ...filters, duration: v })}
            />
            <Slider
              label="Budget"
              min={0}
              max={50000}
              leftLabel="₹0"
              rightLabel="₹50k+"
              value={filters.budget}
              onChange={(v) => setFilters({ ...filters, budget: v })}
            />
            <Slider
              label="Age Range"
              min={12}
              max={50}
              leftLabel="12"
              rightLabel="50+"
              value={filters.age}
              onChange={(v) => setFilters({ ...filters, age: v })}
            />

            {/* Bottom Padding */}
            <div className="pb-[90px]" />
          </div>

          {/* Fixed Apply Button */}
          <div className="fixed bottom-0 left-0 sm:w-[400px] w-full bg-white border-t border-gray-200 px-5 py-3 z-50">
            <button className="w-full py-3 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 shadow-md">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Helper Components ---------- */

function Select({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-2 text-sm focus:ring-1 focus:ring-rose-400"
      >
        <option value="">Select an Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
  leftLabel,
  rightLabel,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  leftLabel: string;
  rightLabel: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <label className="font-medium">{label}</label>
        <span className="text-gray-500">
          {leftLabel} - {rightLabel}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-rose-500"
      />
    </div>
  );
}
