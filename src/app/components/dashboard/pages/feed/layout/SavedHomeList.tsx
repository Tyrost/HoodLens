import { SavedHome } from "@/types/types";
import SavedHomeRow from "./SavedHomeRow";

const SavedHomeList = ({ savedHomes }: { savedHomes: SavedHome[] }) => {

  return (
    
    <div className="w-[95%]">
      {/* Header row */}
      <div className="flex w-full border-b border-white/60 h-[40px] font-inter font-semibold text-white text-[18px]">
        <div className="w-[30%] border-x border-white/60 flex px-[3%] items-center">
          Address
        </div>
        <div className="w-[10%] border-r border-white/60 flex px-[3%] items-center">
          Zip
        </div>
        <div className="w-[20%] border-r border-white/60 flex px-[3%] items-center">
          Saved : Likes : Views
        </div>
        <div className="w-[10%] border-r border-white/60 flex px-[3%] items-center">
          Price
        </div>
        <div className="w-[20%] border-r border-white/60 flex px-[3%] items-center">
          Save Date
        </div>
        <div className="w-[10%] border-r border-white/60 flex px-[3%] items-center">
          Type
        </div>
      
      </div>

      {/* Data rows */}
      {savedHomes.map((saved) => (
        <SavedHomeRow key={saved.info.ID} savedHome={saved}/>
      ))}
    </div>
  );
};

export default SavedHomeList;
