

export interface Location {
    houseNumber: string
    street: string
    town: string
    state: string
    zip: string
    country: string
    lat: number
    lng: number
}

export interface Home {
    type: string;
    price: number;
    address: string;
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