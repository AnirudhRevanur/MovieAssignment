export type Movie = {
    id: number;
    created_at: string;
    title: string;
    releaseYear: number;
    genre: string;
    director: string;
    reviews: {
        id: number;
        rating: number;
        description: string;
        created_at: string;
    }[];
};

export type PostReview = {
    rating: number;
    description: string;
    movie: {
        id: number;
    };
    user: {
        id: number;
    };
}