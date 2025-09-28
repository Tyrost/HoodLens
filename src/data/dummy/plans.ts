import { Plans } from "@/types/types";

export const plans : Plans[] = [
    {
        name: "Free",
        monthlyPrice: 0,
        annualPrice: 0,
        featuresIncluded: [
            "Basic Browsing w/ Limited Filters",
            "3 Golden Matches / Week",
            "Basic descriptive data about any home",
            "Limited System Recommendations"
        ],
        featuresNotIncluded: [
            "AI-interactive chat",
            "Access to Pro Dashboards",
            "Advanced Preference Analytics"
        ],
        checkoutURL: "/checkout/free",
    },
    {
        name: "Basic",
        monthlyPrice: 10,
        annualPrice: 95, // 5% off compared to monthly
        featuresIncluded: [
            "Basic Browsing w/ All Filters",
            "9 Golden Matches per Week",
            "Thorough & Descriptive property details",
            "Access to Pro Dashboards",
            "Limited AI-interactive chat"
        ],
        featuresNotIncluded: [
            "Neighborhood & Town data descriptions",
        ],
        checkoutURL: "/checkout/basic",
    },
    {
        name: "Pro",
        monthlyPrice: 20,
        annualPrice: 216, // 10% off compared to monthly
        featuresIncluded: [
            "Enhanced Browsing w/ All Filters",
            "16 Golden Matches per Week",
            "All property details + Neighborhood & Town data",
            "Access to Pro Dashboards",
            "Priority Support / Early Access to Features",
            "Unlimited access to AI-interactive chat"
        ],
        checkoutURL: "/checkout/pro",
    }
]