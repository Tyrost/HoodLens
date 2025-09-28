import { Home } from "@/types/types"
import RecentHomeGrid from "./layout/RecentHomeGrid"

const RecentlyAdded = ({ newHomes }: { newHomes: Home[] }) => {
  const displayRecentHomes: Home[] = [...newHomes]
    .filter((h) => h.datePosted)
    .sort((a, b) => {
      const aTime = new Date(a.datePosted!).getTime()
      const bTime = new Date(b.datePosted!).getTime()
      return bTime - aTime
    })
    .slice(0, 6)

  return <RecentHomeGrid recentHomes={displayRecentHomes} />
}

export default RecentlyAdded
