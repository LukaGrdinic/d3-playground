/// <reference path="C:\Users\1luka\Desktop\Luka\Learning\Courses\d3js\node_modules\@types\d3\index.d.ts" />

enum Genre {
  Action = 'Action',
  Comedy = 'Comedy',
  Horror = 'Horror',
  Drama = 'Drama',
}

interface Movie {
  genre: Genre;
  yearCreated: number;
  rated: 'G' | 'PG' | 'R';
  imdbRating: number;
}

const exampleValues: Movie[] = [
  { genre: Genre.Action, yearCreated: 1999, rated: 'R', imdbRating: 9.2 },
  { genre: Genre.Comedy, yearCreated: 2015, rated: 'G', imdbRating: 5.2 },
  { genre: Genre.Drama, yearCreated: 1958, rated: 'R', imdbRating: 8.4 },
  { genre: Genre.Horror, yearCreated: 1985, rated: 'PG', imdbRating: 3.1 },
];

const ratingColor = (rating: number): string => {
  if (rating < 2) {
    return '#d41717';
  } else if (2 < rating && rating < 4) {
    return '#f97a10';
  } else if (4 < rating && rating < 6) {
    return '#fff849';
  } else if (6 < rating && rating < 8) {
    return '#97cf24';
  } else if (8 < rating && rating < 10) {
    return '#008000';
  }
};

const actionPath =
  'M 20.977678,28.72619 11.717262,69.925593 56.696427,69.736607 Z';
const comedyPath =
  'M 10.289877,21.247927 5.4790252,31.67144 15.501633,47.17307 34.076864,44.500376 39.02135,30.201457 28.597838,17.10525 Z';
const dramaPath =
  'm 14.363095,13.040178 c 1.133929,35.151786 29.67113,31.372023 29.67113,31.372023 L 23.8125,68.035714 5.8586308,43.656249 Z';
const horrorPath =
  'm 17.10525,17.907058 c 0,0 -4.543582,-5.879929 -4.276313,10.156243 0.26727,16.036171 11.49259,17.372517 11.49259,17.372517 0,0 -7.617182,11.49259 5.87993,9.354434 13.49711,-2.138156 16.169806,-7.750815 16.169806,-7.750815 0,0 7.082642,8.953529 0.801807,-7.349913 C 40.892237,23.386083 30.86963,28.597838 30.86963,28.597838 c 0,0 -3.073601,6.1472 -4.009043,-2.138156 -0.935443,-8.285354 -9.755337,-8.552624 -9.755337,-8.552624 z';

const genrePaths = {
  Action: actionPath,
  Comedy: comedyPath,
  Drama: dramaPath,
  Horror: horrorPath,
};

const svg = d3.select('#svg');

const containerHeight = 500;
const containerWidth = 500;

svg.attr('height', containerHeight).attr('width', containerWidth);

const test = svg
  .selectAll('path')
  .data(exampleValues)
  .enter()
  .append('path')
  .attr('x', (d, i) => i * 100)
  .attr('fill', '#fff')
  .attr('stroke', 'gray')
  .attr('stroke-width', 3)
  .attr('fill', (d) => ratingColor(d.imdbRating))
  .attr('d', (d) => genrePaths[d.genre])
  .attr('transform', (d, i) => `translate(${i * 100},0)`);
