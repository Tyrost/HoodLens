import SearchBar from "./SearchBar";
import HomeSpecificationFilters from "./SpecificationFilters";

const HomeSearchFilter = () => {
    return (
        <>
        <div className="flex items-center w-[60%] h-[80px] bg-white border-[2px] border-neutral-800 rounded-[40px] pl-[25px] pr-[25px] text-black mb-[50px]">
            <div className="flex-1 min-w-0">
                <SearchBar width="100%" placeholder="Search destinations" rounding={10}/>
            </div>
            <div className="flex-shrink-0 ml-4">
                <HomeSpecificationFilters/>
            </div>
        </div>
        </>
    );
}

export default HomeSearchFilter;