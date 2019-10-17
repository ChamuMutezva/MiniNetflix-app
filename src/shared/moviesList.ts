export interface IMovies {
    title: string;
    rating: number;
    releaseYear: string;
    createdAt: string;
    updatedAt: string;
   // runtime: string;
    genre: string[];
   // director: string;
    //writer: string;
   // actors: string[];
    description: string;
   // country: string;
   // awards: boolean;
    objectId: string;
    image: {
        name: string,
        __type: string,
        url: string,
    };

}