'use client'
import { Plans } from "@/types/types";
import { Crown, Package, SquaresIntersect } from "lucide-react";
import { useRouter } from "next/navigation";

const PreviewPlanCard = ({plan} : {plan : Plans}) => {

    const router = useRouter()

    const renderIntro = () => {
        switch(plan.name) {
        case "Free":
            return (
                <>

                <div className="flex w-full justify-center">
                    <h1 className="text-[32px] text-black font-inter font-semibold border border-black rounded-xl px-5 bg-gray-200 w-fit">{plan.name}</h1>
                </div>
                
                <div className="flex w-full justify-center pt-4">
                    <Package color="black" width={70} height={70}/>
                </div>  
                </>
            )
        case "Basic":
            return (
                <>
                <div className="flex w-full justify-center">
                    <h1 className="text-[32px] text-black font-inter font-semibold border border-black rounded-xl px-5 bg-green-200 w-fit">{plan.name}</h1>
                </div>
                <div className="flex w-full justify-center pt-4">
                    <SquaresIntersect color="black" width={70} height={70}/>
                </div>    
                </>
            )
        case "Pro":
            return (
                <>
                <div className="flex w-full justify-center">
                    <h1 className="text-[32px] text-black font-inter font-semibold border border-black/30 rounded-xl px-5 bg-gradient-to-r from-orange-400 to-yellow-500 w-fit">{plan.name}</h1>
                </div>
                <div className="flex w-full justify-center pt-4">
                    <Crown color="black" width={70} height={70}/>
                </div>    
                </>
            )
        }
    }

    return (
        <div className="flex flex-col w-full rounded-lg p-5 shadow-xl border border-black/20">
            {/* Plan Title */}
            <div className="bg-gray-200 p-5 rounded-3xl">
                {renderIntro()}
            </div>
            {/* Content */}
            <div className="w-full rounded-lg font-inter">
                <div className="flex flex-col w-full p-5">
                    <h1 className="justify-center flex w-full text-black text-[24px] m-1">Benefits</h1>
                    <div className="flex justify-center w-full">
                        <div className="flex text-black border border-black w-[70%]"></div>
                    </div>
                    {/* Benefits Listing */}
                    <div className="flex justify-center w-full h-[250px] text-center">
                        <ul className="flex flex-col text-black/80 text-base/8 py-5">
                            {plan.featuresIncluded.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                    <h1 className="justify-center flex w-full text-black text-[24px] m-1">Limitations</h1>
                    <div className="flex justify-center w-full">
                        <div className="flex text-black border border-black w-[70%] h-px"></div>
                    </div>
                    {/* Limitations Listing */}
                    <div className="flex justify-center w-full h-[150px] text-center">
                        <ul className="flex flex-col text-black/80 text-base/8 py-5">
                            {plan.featuresNotIncluded ? plan.featuresNotIncluded.map((benefit, index) => (
                                <li key={index} className="line-through">{benefit}</li>
                            )) : <li>Full Access!</li> }
                        </ul>
                    </div>
                    <div className="flex justify-center bg-gray-200 w-full h-full rounded-lg">
                        <div className="w-[50%] bg-green-200 rounded-lg p-3 text-black text-center border border-black m-5
                        hover:bg-green-300 transition-all duration-400 cursor-pointer"
                        onClick={() => {router.push(plan.checkoutURL)}}>
                           Choose {plan.name}
                        </div>
                    </div>
                </div>


            </div>
        </div>    
    )
}

export default PreviewPlanCard;