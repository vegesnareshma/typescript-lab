let movieTitle: string = "RRR";
let releaseYear: number = 2022;
let isBlockbuster: boolean = true;

function getMovieInfo(title: string, year: number): string {
    return `${title} was released in ${year}.`;
}

let leadActors: string[] = ["N. T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn"];
console.log("Movie:", movieTitle);
console.log("Year:", releaseYear);
console.log("Blockbuster:", isBlockbuster);
console.log(getMovieInfo(movieTitle, releaseYear));
console.log("Lead Actors:", leadActors);