import { SavedHome } from "@/types/types";
import homes from "./homeData";

const savedHomes: SavedHome[] = [
    {
      info: homes[0],
      dateSaved: "2025-06-12T12:00:00Z",
      highestBid: 460000,
      userBid: 455000,
      bidDeadline: "2025-06-12T12:00:00Z",
      savedCount: 10,
    },
    {
      info: homes[1],
      dateSaved: "2025-06-12T12:00:00Z",
      highestBid: 330000,
      userBid: 320000,
      bidDeadline: "2025-06-12T12:00:00Z",
      savedCount: 6,
    },
    {
      info: homes[2],
      dateSaved: "2025-06-12T12:00:00Z",
      // userBid: 670000,
      // bidDeadline: "July 10, 2025",
      savedCount: 14,
    },
    {
      info: homes[3],
      dateSaved: "2025-06-12T12:00:00Z",
      highestBid: 2250000,
      bidDeadline: "2025-06-12T12:00:00Z",
      savedCount: 22,
    },
    {
      info: homes[4],
      dateSaved: "2025-06-12T12:00:00Z",
      // highestBid: 860000,
      // userBid: 850000,
      // bidDeadline: "July 10, 2025",
      savedCount: 12,
    },
  ]

export default savedHomes;