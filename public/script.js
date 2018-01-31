/*
Based on: https://bl.ocks.org/mbostock/4063269
*/

// Create variables to store basic values in
const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

// Format data based on decimal notation, it's rounded to integer.
const format = d3.format(",d");

// Use color scheme to give all the circles a color: https://github.com/d3/d3/blob/master/API.md#color-schemes-d3-scale-chromatic
const color = d3.scaleOrdinal(d3.schemeCategory20c);

// create a new pack layout
const pack = d3.pack()
  .size([width, height])
  .padding(1.5);

// parse data, if there is an error, throw it!
d3.tsv("languages.tsv", function(d) {
  d.speakers = +d.speakers;
  if (d.speakers) return d; // if there is a value for d.speakers return it
}, function(error, classes) {
  if (error) throw error;

  // create a root node with d3.hierarchy
  const root = d3.hierarchy({children: classes})
    .sum(function(d) { return d.speakers; })
    .each(function(d) {
      if (language = d.data.language) {
        var language, i = language.lastIndexOf(".");
        d.language = language;
        d.package = language.slice(0, i);
        d.class = language.slice(i + 1);
      }
    });

  // add all nodes to the g element
  const node = svg.selectAll(".node")
    .data(pack(root).leaves())
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  // Create the circles
  node.append("circle")
    .attr("language", function(d) { return d.language; })
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.package);});

  // create clippath and asign a link based on the language
  node.append("clipPath")
      .attr("language", function(d) { return "clip-" + d.language; })
    .append("use")
      .attr("xlink:href", function(d) { return "#" + d.language; });

  // Add text to the circles
  node.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.language + ")"; })
    .selectAll("tspan")
    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; });

  // Data gave a NaN error when formatting d.speakers, after logging the data i saw i had to use d.value to print the amount of speakers
  node.append("title")
    .text(function(d) {
      return d.language + "\n" + format(d.value);
    }
  );
});

