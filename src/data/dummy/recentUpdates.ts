import { RecentUpdates } from "@/types/types";
import locations from "./locationData";

const recentUpdates: RecentUpdates[] = [
    {
      title: "New Listings Added",
      preview: "We’ve added 50+ new properties across Oregon...",
      author: "Admin",
      authorImgURL: "/logo/FullWhite.png",
      date: "2025-06-12T12:00:00Z",
      location: locations[0],
      content: "Full content about the listings...",
    },
    {
      title: "Neighborhood Trends",
      preview: "Crime rates have decreased in Portland neighborhoods...",
      author: "Research Team",
      authorImgURL: "/logo/FullWhite.png",
      date: "2025-06-12T12:00:00Z",
      location: locations[1],
      content: "Full content about trends...",
    },
    {
      title: "Market Insights",
      preview: "Bay Area housing prices continue to rise...",
      author: "Economist",
      authorImgURL: "/logo/FullWhite.png",
      date: "2025-06-12T12:00:00Z",
      location: locations[2],
      content: "Full content about insights...",
    },
    {
      title: "Renovation Tips",
      preview: "Top 5 ways to increase property value...",
      author: "Editor",
      authorImgURL: "/logo/FullWhite.png",
      date: "2025-06-12T12:00:00Z",
      content: "Full content about renovation tips...",
    },
    {
      title: "Policy Changes",
      preview: "New tax incentives available for homeowners...",
      author: "Policy Analyst",
      authorImgURL: "/logo/FullWhite.png",
      date: "2025-06-12T12:00:00Z",
      content: "Full content about policy changes...",
    },
  ]

export default recentUpdates;