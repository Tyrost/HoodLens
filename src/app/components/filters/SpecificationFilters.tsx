'use client';

import { useState } from "react";

const statusOptions = ["for-sale", "for-rent", "sold"];
const homeTypeOptions = [
  "houses",
  "townhomes",
  "multi-family",
  "condos",
  "lots-land",
  "apartments",
  "manufactured",
];
const bedBathOptions = ["any", 1, 2, 3, 4, 5];

const HomeSpecificationFilters = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // state for filters
  const [status, setStatus] = useState("for-sale");
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 3000000]);
  const [beds, setBeds] = useState<string | number>("any");
  const [baths, setBaths] = useState<string | number>("any");
  const [homeTypes, setHomeTypes] = useState<string[]>([...homeTypeOptions]);

  const toggleHomeType = (type: string) => {
    setHomeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleApply = () => {
    const filters = { status, priceRange, beds, baths, homeTypes };
    console.log("Applied Filters:", filters);
    alert(JSON.stringify(filters, null, 2)); // debug only
    setActiveFilter(null); // close panel
  };

  return (
    <div className="w-full">
      {/* Filter Buttons Row */}
      <div className="flex items-center space-x-2">
        {["Status", "Price", "Beds & Baths", "Home Types"].map((filter) => (
          <div key={filter} className="relative">
            <button
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              className={`px-3 py-2 border rounded text-sm whitespace-nowrap ${
                  activeFilter === filter ? "bg-green-300 text-black" : "bg-white"
              }`}
            >
              {filter}
            </button>
            
            {/* Individual Filter Panels */}
            {activeFilter === filter && (
              <div className="absolute top-full left-0 mt-2 p-4 border rounded bg-gray-50 shadow-lg z-10 min-w-max">
                {filter === "Status" && (
                  <>
                    <h3 className="font-semibold mb-3">Listing Status</h3>
                    <div className="flex space-x-3">
                      {statusOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setStatus(option)}
                          className={`px-3 py-1 rounded ${
                            status === option ? "bg-neutral-800 text-white" : "bg-white border"
                          }`}
                        >
                          {option.replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {filter === "Price" && (
                <>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="relative w-64 h-6">
                    {/* Track background */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-300 rounded-full"></div>
                    
                    {/* Active track (between the two thumbs) */}
                    <div 
                        className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-neutral-500 rounded-full"
                        style={{
                        left: `${((priceRange[0] - 50000) / (3000000 - 50000)) * 100}%`,
                        width: `${((priceRange[1] - priceRange[0]) / (3000000 - 50000)) * 100}%`
                        }}
                    ></div>
                    
                    {/* Minimum value slider */}
                    <input
                        type="range"
                        min={50000}
                        max={3000000}
                        step={50000}
                        value={priceRange[0]}
                        onChange={(e) => {
                        const newMin = parseInt(e.target.value);
                        if (newMin <= priceRange[1]) {
                            setPriceRange([newMin, priceRange[1]]);
                        }
                        }}
                        className="absolute top-0 w-full h-6 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-neutral-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
                    />
                    
                    {/* Maximum value slider */}
                    <input
                        type="range"
                        min={50000}
                        max={3000000}
                        step={50000}
                        value={priceRange[1]}
                        onChange={(e) => {
                        const newMax = parseInt(e.target.value);
                        if (newMax >= priceRange[0]) {
                            setPriceRange([priceRange[0], newMax]);
                        }
                        }}
                        className="absolute top-0 w-full h-6 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-neutral-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-neutral-00 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
                    />
                    
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2">
                    <span>
                        ${priceRange[0] >= 1000000 
                        ? (priceRange[0] / 1000000).toFixed(1) + "M" 
                        : (priceRange[0] / 1000).toFixed(0) + "K"}
                    </span>
                    <span>
                        ${priceRange[1] >= 1000000 
                        ? (priceRange[1] / 1000000).toFixed(1) + "M" 
                        : (priceRange[1] / 1000).toFixed(0) + "K"}
                    </span>
                    </div>
                    <div className="flex justify-center mt-1">
                        <p className="text-[22px] border border-black bg-green-300 pl-4 pr-4 rounded-lg">
                        ${priceRange[0] / 1000}k –{" "}
                        {priceRange[1] >= 1000000
                            ? priceRange[1] / 1000000 + " M"
                            : priceRange[1] / 1000 + "k"}
                        </p>
                    </div>
                </>
                )}

                {filter === "Beds & Baths" && (
                  <>
                    <h3 className="font-semibold mb-3">Beds</h3>
                    <select
                      value={beds}
                      onChange={(e) =>
                        setBeds(e.target.value === "any" ? "any" : parseInt(e.target.value))
                      }
                      className="border p-2 rounded"
                    >
                      {bedBathOptions.map((num) => (
                        <option key={num} value={num}>
                          {num === "any" ? "Any" : `${num}`}
                        </option>
                      ))}
                    </select>

                    <h3 className="font-semibold mt-4 mb-3">Baths</h3>
                    <select
                      value={baths}
                      onChange={(e) =>
                        setBaths(e.target.value === "any" ? "any" : parseInt(e.target.value))
                      }
                      className="border p-2 rounded"
                    >
                      {bedBathOptions.map((num) => (
                        <option key={num} value={num}>
                          {num === "any" ? "Any" : `${num}`}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {filter === "Home Types" && (
                  <>
                    <h3 className="font-semibold mb-3">Home Types</h3>
                    <div className="flex flex-col space-y-2">
                      {homeTypeOptions.map((type) => (
                        <label key={type} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={homeTypes.includes(type)}
                            onChange={() => toggleHomeType(type)}
                          />
                          <span className="capitalize">{type.replace("-", " ")}</span>
                        </label>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
        
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm whitespace-nowrap"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default HomeSpecificationFilters;