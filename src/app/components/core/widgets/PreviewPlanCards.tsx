import { plans } from "@/data/dummy/plans";
import PreviewPlanCard from "./utils/PreviewPlanCard";

const PreviewPlanCards = () => {
    return (
        <>
        <div className="w-full">
            <div className="flex w-full h-auto gap-x-[20px]">
                {plans.map((plan, index) => (
                    <PreviewPlanCard key={index} plan={plan}/>
                ))}
            </div>    
        </div>
        </>
    )
}

export default PreviewPlanCards;