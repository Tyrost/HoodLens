

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