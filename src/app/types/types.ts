

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