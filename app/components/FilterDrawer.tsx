"use client";

import { useState } from "react";
import { X, SlidersHorizontal, ArrowLeft, Search } from "lucide-react";

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Locals");

  return (
    <div className="relative">
      {/* Filter Button (hide when drawer is open) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-xl shadow-md hover:bg-rose-600 z-50"
        >
          <SlidersHorizontal size={18} /> Filter
        </button>
      )}

      {/* Drawer / Panel (from left side) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-start z-40">
          <div className="w-full sm:w-[450px] h-full bg-white p-4 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-rose-500"
              >
                <ArrowLeft size={20} />
                <span className="font-medium text-sm">Back</span>
              </button>

              <h2 className="text-lg font-semibold"></h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* 🔍 Search Bar */}
            <div className="relative mb-4">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search destination..."
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-rose-400"
              />
            </div>

            {/* 🧭 Tabs: Locals | Nearby | Starting Point */}
            <div className="flex justify-between mb-6">
              {["Locals", "Nearby", "Starting Point"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 mx-1 py-2 rounded-lg text-sm font-medium border transition-all ${
                    activeTab === tab
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-rose-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 🔸 Other Filter Options */}
            <div className="space-y-4 text-left">
              <Select label="Travel Style" />
              <Select label="Interests" />
              <Select label="Gender Preferences" />
              <Select label="Minimum Rating" />
              <Select label="Food Preferences" />
              <Select label="Trip Type" />

              {/* Language */}
              <div>
                <label className="block text-sm mb-1">Language</label>
                <input
                  type="text"
                  placeholder="Ex: English"
                  className="w-full border rounded-lg p-2 focus:ring-1 focus:ring-rose-400"
                />
                <div className="flex gap-2 mt-2.5">
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm">
                    English
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm">
                    Spanish
                  </span>
                </div>
              </div>

              {/* Sliders */}
              <Slider label="Duration" unit="Days" min={0} max={50} />
              <Slider label="Budget" unit="₹" min={0} max={50000} />
              <Slider label="Age Range" unit="Years" min={12} max={50} />

              {/* Apply Filter */}
              <button className="w-full py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Helper Components ---------- */

function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm mb-1 font-medium">{label}</label>
      <select className="w-full border rounded-lg p-2 text-sm focus:ring-1 focus:ring-rose-400">
        <option>Select an option</option>
      </select>
    </div>
  );
}

function Slider({
  label,
  unit,
  min,
  max,
}: {
  label: string;
  unit: string;
  min: number;
  max: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <label className="font-medium">{label}</label>
        <span className="text-gray-500">
          {min} {unit} - {max}+ {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        className="w-full accent-rose-500"
      />
    </div>
  );
}
