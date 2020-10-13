/// <reference path="C:\Users\1luka\Desktop\Luka\Learning\Courses\d3js\node_modules\@types\d3\index.d.ts" />
var exampleValues = [10, 50, 20, 15, 55];
var svg = d3.select('#svg');
var containerHeight = 500;
var containerWidth = 500;
svg.attr('height', containerHeight).attr('width', containerWidth);
svg
    .selectAll('rect')
    .data(exampleValues)
    .attr('x', function (d, i) { return i * 50; })
    .attr('y', function (d) { return containerHeight - d; })
    .attr('height', function (d) { return d; })
    .attr('width', 50)
    .attr('stroke', 'plum')
    .attr('fill', 'pink');
