/// <reference path="C:\Users\1luka\Desktop\Luka\Learning\Courses\d3js\node_modules\@types\d3\index.d.ts" />

const exampleValues: number[] = [10, 50, 20, 15, 55];

const svg = d3.select('#svg');

svg
  .selectAll('rect')
  .data(exampleValues)
  .attr('x', (d, i) => i * 50)
  .attr('height', (d) => d)
  .attr('width', 50)
  .attr('stroke', 'plum')
  .attr('fill', 'pink');

