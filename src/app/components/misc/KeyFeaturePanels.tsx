
import { ChevronsLeftRightEllipsis, TrendingUpDown, Boxes } from "lucide-react";

const KeyFeaturePanels = () => {
    return (
        <>
        <div className="flex space-x-[50px] w-[90%] h-auto text-center">

            <div className="w-[33%] h-full border border-gray-700 rounded-[25px] font-poppins hover:scale-105 transition-all duration-600">
                <h1 className="font-spaceGrotesk text-[64px] pt-8 underline">What</h1>
                <p className="mt-[20px] text-base/10 text-[15px] font-light p-8 text-left">
                    <span className="font-bold text-center">Neighborhood Safety & Lifestyle Insights</span><br/>
                    Our platform brings neighborhoods to life through a <span className="font-bold">new lens</span>. 
                    Instead of relying on vague reviews or outdated statistics, 
                    users get a living snapshot of how safe, connected, and vibrant an area truly is. 
                    From detailed safety metrics to measures of local accessibility, 
                    the system creates a <span className="font-bold">dynamic profile</span> of each community, 
                    helping people <span className="font-bold">envision</span> what daily life would actually feel.
                </p>
                <div className="flex justify-center">
                    <ChevronsLeftRightEllipsis width={300} height={300} color="#69ce70"/>
                </div>
            </div>
            <div className="w-[33%] h-full border border-gray-700 rounded-[25px] font-poppins hover:scale-105 transition-all duration-600">
                <h1 className="font-spaceGrotesk text-[64px] pt-8 underline">Why</h1>
                <p className="mt-[20px] text-base/10 text-[15px] font-light p-8 text-left">
                    <span className="font-bold text-center">Market Trends</span><br/>
                    We go far beyond simple price listings. 
                    By combining historical data, current demand, and predictive modeling, 
                    the platform reveals the <span className="font-bold">real trajectory</span> of housing markets. 
                    Users can spot where affordability is holding steady, 
                    where prices are accelerating, and which locations are reaching saturation. 
                    This makes <span className="font-bold">decision-making proactive</span> instead of reactive, 
                    <span className="font-bold"> empowering</span> renters, buyers, and investors.
                </p>
                <div className="flex justify-center">
                    <TrendingUpDown width={300} height={300} strokeWidth={1.5} color="#69ce70"/>
                </div>
            </div>
            <div className="w-[33%] h-full border border-gray-700 rounded-[25px] font-poppins hover:scale-105 transition-all duration-600">
                <h1 className="font-spaceGrotesk text-[64px] pt-8 underline">Value</h1>
                <p className="mt-[20px] text-base/10 text-[15px] font-light p-8 text-left"> 
                    <span className="font-bold text-center">Personalized Recommendations</span><br/>
                    <span className="font-bold">No two users are alike</span>, and neither are the neighborhoods we analyze. 
                    Our recommendation engine adapts to lifestyle preferences, work needs, 
                    and personal priorities to highlight areas that align naturally with the individual. 
                    Instead of generic suggestions, the system <span className="font-bold">uncovers hidden matches</span> between a 
                    person’s unique profile and the communities most likely to <span className="font-bold">support their growth</span>, 
                    productivity, and wellbeing.
                </p>
                <div className="flex justify-center">
                    <Boxes width={300} height={300} strokeWidth={1} color="#69ce70"/>
                </div>

            </div>
        </div>
        </>
    );
}

export default KeyFeaturePanels;