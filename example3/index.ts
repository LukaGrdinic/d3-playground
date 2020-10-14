/// <reference path="C:\Users\1luka\Desktop\Luka\Learning\Courses\d3js\node_modules\@types\d3\index.d.ts" />

enum Genre {
  Action = 'Action',
  Comedy = 'Comedy',
  Horror = 'Horror',
  Drama = 'Drama',
}

interface Movie {
  name: string;
  genre: Genre;
  yearMade: number;
  rated: 'G' | 'PG' | 'R';
  rating: number;
  votes: number;
  awards: number;
  oscar: boolean;
}

interface MovieVisual {
    name: string;
    genre: Genre;
    yearMade: number;
    rated: 'G' | 'PG' | 'R';
    rating: number;
    votes: number;
    awards: number;
    oscar: boolean;
    pathRotation: number;
}

const exampleValues: Movie[] = [
  {
    genre: Genre.Action,
    yearMade: 1999,
    rated: 'R',
    rating: 9,
    votes: 5,
    awards: 1,
    oscar: false,
    name: 'Armed to the bone',
  },
  {
    genre: Genre.Comedy,
    yearMade: 2015,
    rated: 'G',
    rating: 7,
    votes: 3,
    awards: 2,
    oscar: false,
    name: 'Where is my weed, man?',
  },
  {
    genre: Genre.Horror,
    yearMade: 1985,
    rated: 'PG',
    rating: 3,
    votes: 15,
    awards: 1,
    oscar: false,
    name: 'The dark hallway',
  },
  {
    genre: Genre.Drama,
    yearMade: 1958,
    rated: 'R',
    rating: 5,
    votes: 4,
    awards: 3,
    oscar: true,
    name: 'Bear with me',
  },
];

const ratingColors: string[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'darkgreen',
];

const colorScale = d3.scaleQuantize<any>().domain([0, 10]).range(ratingColors);

const actionPath =
  'M 0,0 11.717262,69.925593 56.696427,69.736607 Z';
const comedyPath =
  'M 0,0 5.4790252,31.67144 15.501633,47.17307 34.076864,44.500376 39.02135,30.201457 28.597838,17.10525 Z';
const dramaPath =
  'M 0,0 c 1.133929,35.151786 29.67113,31.372023 29.67113,31.372023 L 23.8125,68.035714 5.8586308,43.656249 Z';
const horrorPath =
  'M 0,0 c 0,0 -4.543582,-5.879929 -4.276313,10.156243 0.26727,16.036171 11.49259,17.372517 11.49259,17.372517 0,0 -7.617182,11.49259 5.87993,9.354434 13.49711,-2.138156 16.169806,-7.750815 16.169806,-7.750815 0,0 7.082642,8.953529 0.801807,-7.349913 C 40.892237,23.386083 30.86963,28.597838 30.86963,28.597838 c 0,0 -3.073601,6.1472 -4.009043,-2.138156 -0.935443,-8.285354 -9.755337,-8.552624 -9.755337,-8.552624 z';

const genrePaths = {
  Action: actionPath,
  Comedy: comedyPath,
  Drama: dramaPath,
  Horror: horrorPath,
};

const svg = d3.select('#svg');

const containerHeight = 500;
const containerWidth = exampleValues.length * 200;

svg.attr('height', containerHeight).attr('width', containerWidth);

const movieGroupedElements = svg
  .selectAll('g')
  .data(exampleValues)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(${(i * 200) + 100},200)`);

const test = movieGroupedElements
  .selectAll('path')
  .data((movie) => {
    const movieElements: MovieVisual[] = [];
    for (let i = 1; i <= movie.votes; i++) {
        movieElements.push(Object.assign({}, movie, { pathRotation: (360 / movie.votes) * i }));
    }
    return movieElements;
  })
  .enter()
  .append('path')
  .attr('stroke', 'gray')
  .attr('stroke-width', 1)
  .attr('fill', (d) => colorScale(d.rating))
  .attr('d', (d) => genrePaths[d.genre])
  .attr('transform', (d, i) => `rotate(${d.pathRotation})`)

console.log('test', test);
