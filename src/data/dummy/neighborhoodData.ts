import { Neighborhood } from "@/types/types";

export const neighborhoods: Neighborhood[] = [
    {
      id: "nh1",
      name: "Whiteaker",
      city: "Eugene",
      state: "OR",
      country: "USA",
      population: 8500,
      medianIncome: 42000,
      crimeRate: "Medium",
      description: "Known for its artsy vibe, craft breweries, and eclectic mix of residents.",
      amenities: ["Parks", "Bike Paths", "Local Breweries", "Art Galleries"],
      images: [{ url: "/images/whiteaker.jpg", title: "Whiteaker Street" }]
    },
    {
      id: "nh2",
      name: "Pearl District",
      city: "Portland",
      state: "OR",
      country: "USA",
      population: 6200,
      medianIncome: 72000,
      crimeRate: "Low",
      description: "Trendy neighborhood with upscale condos, boutiques, and restaurants.",
      amenities: ["Shops", "Cafés", "Fitness Centers", "Art Studios"],
      images: [{ url: "/images/pearl.jpg", title: "Pearl District" }]
    },
    {
      id: "nh3",
      name: "Capitol Hill",
      city: "Seattle",
      state: "WA",
      country: "USA",
      population: 32000,
      medianIncome: 65000,
      crimeRate: "Medium",
      description: "Lively area with nightlife, coffee shops, and LGBTQ+ culture.",
      amenities: ["Nightclubs", "Bookstores", "Coffee Shops", "Parks"],
      images: [{ url: "/images/capitolhill.jpg", title: "Capitol Hill View" }]
    },
    {
      id: "nh4",
      name: "Mission District",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      population: 48000,
      medianIncome: 58000,
      crimeRate: "High",
      description: "Vibrant neighborhood known for murals, Latin culture, and nightlife.",
      amenities: ["Murals", "Restaurants", "Bars", "Cultural Centers"],
      images: [{ url: "/images/mission.jpg", title: "Mission Murals" }]
    },
    {
      id: "nh5",
      name: "Wicker Park",
      city: "Chicago",
      state: "IL",
      country: "USA",
      population: 26000,
      medianIncome: 67000,
      crimeRate: "Medium",
      description: "Hip neighborhood with music venues, art galleries, and trendy dining.",
      amenities: ["Music Venues", "Bars", "Boutiques", "Parks"],
      images: [{ url: "/images/wickerpark.jpg", title: "Wicker Park Streets" }]
    }
  ]
  