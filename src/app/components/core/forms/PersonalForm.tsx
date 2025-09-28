"use client";

import { useState, useEffect } from "react";
import { UserResource } from "@clerk/types";
import { DemographicData, Location } from "@/types/types"; // Adjust import path as needed

// Extended type to include Clerk user fields
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
} & DemographicData;

const PersonalForm = ({ userData }: { userData: UserResource | null | undefined }) => {
  const [formData, setFormData] = useState<Partial<FormData>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: {
      houseNumber: "",
      street: "",
      town: "",
      state: "",
      zip: "",
      country: "",
      lat: undefined,
      lng: undefined,
    },
    age: undefined,
    gender: "",
    nationality: "",
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO
  // ---------------------------------------
  useEffect(() => {
    async function gatherData() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/demographic-data"); // Your API endpoint
        
        if (!response.ok) {
          throw new Error("Failed to fetch demographic data");
        }
        
        const demographicData: DemographicData = await response.json();
        
        // Merge with Clerk user data as fallback
        setFormData({
          firstName: userData?.firstName || "",
          lastName: userData?.lastName || "",
          email: userData?.emailAddresses?.[0]?.emailAddress || "",
          phone: userData?.phoneNumbers?.[0]?.phoneNumber || "",
          location: demographicData.location || {
            houseNumber: "",
            street: "",
            town: "",
            state: "",
            zip: "",
            country: "",
            lat: undefined,
            lng: undefined,
          },
          age: demographicData.age,
          gender: demographicData.gender || "",
          nationality: demographicData.nationality || "",
        });
        
        setError(null);
      } catch (err) {
        console.error("Error fetching demographic data:", err);
        
        // Fallback to Clerk data only
        setFormData({
          firstName: userData?.firstName || "",
          lastName: userData?.lastName || "",
          email: userData?.emailAddresses?.[0]?.emailAddress || "",
          phone: userData?.phoneNumbers?.[0]?.phoneNumber || "",
          location: {
            houseNumber: "",
            street: "",
            town: "",
            state: "",
            zip: "",
            country: "",
            lat: undefined,
            lng: undefined,
          },
          age: undefined,
          gender: "",
          nationality: "",
        });
      } finally {
        setIsLoading(false);
      }
    }
    
    gatherData();
  }, [userData]);

  // ---------------------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Check if it's a nested location field
    if (["houseNumber", "street", "town", "state", "zip", "country"].includes(name)) {
      setFormData({
        ...formData,
        location: {
          ...formData.location!,
          [name]: value,
        },
      });
    } else if (name === "age") {
      // Handle age as number
      const ageValue = value === "" ? undefined : parseInt(value, 10);
      setFormData({ ...formData, age: ageValue });
    } else {
      // Handle top-level fields
      setFormData({ ...formData, [name]: value });
    }
  };

  // Save to server
  const handleUpdateServer = async () => {
    try {
      setIsLoading(true);
      
      // Prepare data to send (only demographic data, not Clerk fields)
      const dataToSend: Partial<DemographicData> = {
        location: formData.location,
        gender: formData.gender,
        age: formData.age,
        nationality: formData.nationality,
      };
      
      const response = await fetch("/api/demographic-data", {
        method: "PUT", // or "POST"
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to update demographic data");
      }

      const updatedData = await response.json();
      
      // Merge updated demographic data with existing form data
      setFormData({
        ...formData,
        ...updatedData,
      });
      
      setError(null);
      console.log("Saved successfully:", updatedData);
    } catch (err) {
      console.error("Error saving demographic data:", err);
      setError("Failed to save data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !formData.firstName) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-neutral-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative text-neutral-800 px-6 w-[50vw]">
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Edit Button */}
      <button
        type="button"
        onClick={() => setIsEditing(!isEditing)}
        disabled={isLoading}
        className="absolute top-3 font-outfit right-3 text-[20px] px-3 py-1 backdrop-blur-lg rounded-md border border-black hover:bg-gray-100 transition disabled:opacity-50"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>

      <h2 className="text-[35px] text-black font-outfit tracking-wide font-semibold mb-6">
        Personal Information
      </h2>

      <div className="space-y-4 font-outfit shadow-lg rounded-lg backdrop-blur-lg bg-white/20 p-[50px]">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-md font-medium text-black">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              disabled={!isEditing}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-black">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              disabled={!isEditing}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-md font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            disabled={!isEditing}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-md font-medium text-black">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            disabled={!isEditing}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
          />
        </div>

        {/* Address Section */}
        <div className="flex flex-col w-full h-auto gap-y-[1vh]">
          <div className="flex justify-between gap-x-[3%]">
            <div className="w-[60%]">
              <label className="block text-md font-medium text-black">Street</label>
              <input
                type="text"
                name="street"
                value={formData.location?.street || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
            <div className="w-[40%]">
              <label className="block text-md font-medium text-black">City</label>
              <input
                type="text"
                name="town"
                value={formData.location?.town || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-[3%]">
            <div className="w-[33%]">
              <label className="block text-md font-medium text-black">State/Province</label>
              <input
                type="text"
                name="state"
                value={formData.location?.state || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
            <div className="w-[33%]">
              <label className="block text-md font-medium text-black">ZIP</label>
              <input
                type="text"
                name="zip"
                value={formData.location?.zip || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
            <div className="w-[33%]">
              <label className="block text-md font-medium text-black">Country</label>
              <input
                type="text"
                name="country"
                value={formData.location?.country || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-[3%]">
            <div className="w-[10%]">
              <label className="block text-md font-medium text-black">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age ?? ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
            <div className="w-[20%]">
              <label className="block text-md font-medium text-black">Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
            <div className="w-[70%]">
              <label className="block text-md font-medium text-black">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality || ""}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 w-full p-2 border rounded-md disabled:bg-gray-100 font-inter"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button (only when editing) */}
      {isEditing && (
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            disabled={isLoading}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={async () => {
              await handleUpdateServer();
              setIsEditing(false);
            }}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalForm;