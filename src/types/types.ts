

export interface Location {
    houseNumber?: string
    street: string
    town: string
    state: string
    zip: string
    country: string
    lat?: number
    lng?: number
}

export interface Home {
    ID: number,
    type: string;
    price: number;
    address: string;
    numberRooms: number;
    numberBaths: number;
    size: number;
    specialities: string[];
    images: {
        url: string;
        title: string
    }[];
    location?: Location

    likes: number,
    views: number,
    built: number,
    overviewText: string,
    yearRenovated: number,
    lotSize: number

    mlsID: string
    datePosted ?: string // expect "2024-09-23T21:38:00.594Z"
}

export interface Neighborhood {
    id: string
    name: string
    city: string
    state: string
    country: string
    population: number
    medianIncome: number
    crimeRate: string
    description: string
    amenities: string[]
    images: {
      url: string
      title: string
    }[]
  }  

export interface RecommendedCity {
    name: string
    state: string
    country: string
    description: string
    images : {
        url: string
        title: string
    }[];
}

export interface RecentUpdates {
    title: string
    preview: string
    author: string
    authorImgURL: string
    date: string
    location?: Location

    content: string
}

export interface SavedHome {
    info: Home
    dateSaved: string
    highestBid?: number
    userBid?: number

    bidDeadline?: string // expect "2024-09-23T21:38:00.594Z"
    savedCount?: number // counts the number of users that have saved this property as a way to express interest.
}

export interface DemographicData {
    location: Location,
    gender: string,
    age: number,
    nationality: string,
}

export interface AvgHomePrices {
    homePrice: number,
    state: string,
    percentageChange: string,
    series: number[],
    labels: string[],
};

export interface Plans {
    name: string
    monthlyPrice: number,
    annualPrice: number,
    featuresIncluded: Array<string>,
    featuresNotIncluded?: Array<string>,
    checkoutURL: string
}