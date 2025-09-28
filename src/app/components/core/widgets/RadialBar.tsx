"use client";
// import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CheckCheck } from "lucide-react";

import dynamic from "next/dynamic";
import { useState } from "react";
// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RadialBar = () => {
    const [profileCompleted, setCompletion] = useState(false)
    const [tasks, updateTask] = useState({
        formCompletion: false,
        testCompletion: false,
        securityCompletion: false,
        costExploration: false
    })

    // TODO handle completion data from external events

    const completionPercentage = [60];

    const options: ApexOptions = {
        colors: ["#63CB6D"],
        chart: {
        fontFamily: "Outfit, sans-serif",
        type: "radialBar",
        height: 330,
        sparkline: {
            enabled: true,
        },
        },
        plotOptions: {
        radialBar: {
            startAngle: -85,
            endAngle: 85,
            hollow: {
            size: "80%",
            },
            track: {
            background: "#E4E7EC",
            strokeWidth: "100%",
            margin: 5, // margin is in pixels
            },
            dataLabels: {
            name: {
                show: false,
            },
            value: {
                fontSize: "36px",
                fontWeight: "600",
                offsetY: -40,
                color: "#1D2939",
                formatter: function (val) {
                return val + "%";
                },
            },
            },
        },
        },
        fill: {
        type: "solid",
        colors: ["#63CB6D"],
        },
        stroke: {
        lineCap: "round",
        },
        labels: ["Progress"],
    };

    return (
    <div className="border-2 border-black/10 rounded-lg">
        <div className="px-5 pt-5 backdrop-blur-lg bg-white/20 rounded-t-lg">
            <div className="flex justify-between">
                <div className="flex w-full justify-center">
                    <h3 className="text-[32px] font-outfit font-semibold text-black">
                        Profile Completion
                    </h3>
                </div>
            </div>
            <div className="relative ">
                <div className="max-h-[330px]">
                    <ReactApexChart
                    options={options}
                    series={completionPercentage}
                    type="radialBar"
                    height={330}
                    />
                </div>
            </div>
            <p className="mx-auto my-5 w-full max-w-[60%] text-center text-black text-[18px] font-outfit">
                Help us know your preferences by completing your profile. Need help getting started?
                Here are the steps:
            </p>
            {/* Requirements List */}
            <div className="flex w-full justify-center rounded-md">
                <div className="flex flex-col text-[15px] font-outfit text-left text-black gap-y-[15px] p-5">
                    <ul className="list-disc">
                        <li className={tasks.formCompletion ? "list-none" : ""}>
                            <div className="flex items-center gap-x-[10px]">
                                <h1 className={tasks.formCompletion ? "line-through" : ""}>Complete Personal Information Form.</h1>   
                                <CheckCheck width={28} height={28} className={`${tasks.formCompletion ? "opacity-100" : "opacity-0"} text-green-300 drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,1)]`}/>                     
                            </div>
                        </li>
                        <li className={tasks.formCompletion ? "list-none" : ""}>
                            <div className="flex items-center gap-x-[10px]">
                                <h1 className={tasks.formCompletion ? "line-through" : ""}>Take the &quot;Getting to Know You&quot; Test.</h1>   
                                <CheckCheck width={28} height={28} className={`${tasks.formCompletion ? "opacity-100" : "opacity-0"} text-green-300 drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,1)]`}/>                     
                            </div>
                        </li>
                        <li className={tasks.formCompletion ? "list-none" : ""}>
                            <div className="flex items-center gap-x-[10px]">
                                <h1 className={tasks.formCompletion ? "line-through" : ""}>Enable Security Settings via 2FA.</h1>   
                                <CheckCheck width={28} height={28} className={`${tasks.formCompletion ? "opacity-100" : "opacity-0"} text-green-300 drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,1)]`}/>                     
                            </div>
                        </li>
                        <li className={tasks.formCompletion ? "list-none" : ""}>
                            <div className="flex items-center gap-x-[10px]">
                                <h1 className={tasks.formCompletion ? "line-through" : ""}>Explore our Monthly Plans.</h1>   
                                <CheckCheck width={28} height={28} className={`${tasks.formCompletion ? "opacity-100" : "opacity-0"} text-green-300 drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,1)]`}/>                     
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center px-6 py-3.5 bg-white/80 rounded-b-lg text-black font-outfit border-t border-black">
            { profileCompleted ? (
                <div className="flex gap-x-[10px] items-center rounded-lg bg-green-200 p-2 border border-black">
                    <div className="bg-green-500 rounded-full w-[10px] h-[10px]"></div>
                    <h1>Way to go! Your profile is complete!</h1>
                </div>
            ):  
                <>
                <div className="flex gap-x-[10px] items-center rounded-lg bg-red-200 p-2 border border-black">
                    <div className="bg-red-500 rounded-full w-[10px] h-[10px]"></div>
                    <h1>Profile not yet complete!</h1>
                </div>
                </>
            }
        
        </div>
    </div>
    );
}

export default RadialBar;