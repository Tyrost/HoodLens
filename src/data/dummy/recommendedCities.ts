import { RecommendedCity } from "@/types/types";

const recommendedCities: RecommendedCity[] = [
    {
      name: "Flower Mound",
      state: "Texas",
      country: "US",
      description: "Flower Mound, Texas, is a thriving, family-oriented community in the Dallas-Fort Worth metroplex known for its low crime rate, excellent schools, numerous parks, and vibrant recreational amenities, including an extensive network of hike, bike, and equestrian trails. Named for a prominent hill covered in wildflowers, the town offers residents a high quality of life with beautiful open spaces, first-class shopping and dining, and convenient access to major airports.\
      Flower Mound is an incorporated town located in Denton and Tarrant counties in the U.S. state of Texas. Located northwest of Dallas and northeast of Fort Worth adjacent to Grapevine Lake, the town derives its name from a prominent 12.5-acre mound located in the center of town",
      images: [
          {"url": "", "title": ""}
      ]
    },
    {
      name: "Denver",
      state: "CO",
      country: "USA",
      description: "City living with easy access to the Rockies.",
      images: [{ url: "/images/denver.jpg", title: "Denver Skyline" }],
    },
    {
      name: "Seattle",
      state: "WA",
      country: "USA",
      description: "Home of big tech and coffee culture.",
      images: [{ url: "/images/seattle.jpg", title: "Space Needle" }],
    },
    {
      name: "Miami",
      state: "FL",
      country: "USA",
      description: "Sunny city with vibrant nightlife and beaches.",
      images: [{ url: "/images/miami.jpg", title: "Miami Beach" }],
    },
    {
      name: "Boston",
      state: "MA",
      country: "USA",
      description: "Historic city with top universities and culture.",
      images: [{ url: "/images/boston.jpg", title: "Boston Harbor" }],
    },
  ]
  
export default recommendedCities;