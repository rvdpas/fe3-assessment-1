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
  .size([width, height]) // takes the svg width and height
  .padding(1.5);

// parse data, if there is an error, throw it!
d3.tsv("languages.tsv", d => {
  d.speakers = +d.speakers;
  if (d.speakers) return d; // if there is a value for d.speakers return it
}, function(error, classes) {
  if (error) throw error;

  // create a root node with d3.hierarchy
  const root = d3.hierarchy({children: classes})
    .sum(d => d.speakers ) // returns the sum of the given array
    .each(d => {
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
      .attr("transform", d => `translate(${d.x},${d.y})`);

  // Create the circles
  node.append("circle")
    .attr("language", d => d.language)
    .attr("r", d => d.r)
    .style("fill", d => color(d.package));

  // create clippath and asign a link based on the language
  node.append("clipPath")
      .attr("language", d => `clip-${d.language}`)
    .append("use")
      .attr("xlink:href", d => `#${d.language}`);

  // Add text to the circles
  node.append("text")
      .attr("clip-path", d => `url(${"#clip-"} ${d.language}`)
    .selectAll("tspan")
    .data(d => d.class.split(/(?=[A-Z][^A-Z])/g))
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(d => d );

  // Data gave a NaN error when formatting d.speakers, after logging the data i saw i had to use d.value to print the amount of speakers
  node.append("title")
    .text(d => `${d.language}"\n"${format(d.value)}`);
});

