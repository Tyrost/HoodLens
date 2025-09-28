import { SavedHome } from "@/types/types";
import SavedHomeCard from "./SavedHomeCard";

const SavedHomeCards = ({savedHomes} : {savedHomes : SavedHome[]}) => {
    return (
        <div className="flex flex-col w-[80%] gap-y-[50px]">
            {savedHomes.map((saved) => (
                <SavedHomeCard key={saved.info.ID} savedHome={saved}/>
            ))}
        </div>
    )
}

export default SavedHomeCards;