import {selectAll, select, range} from 'd3';
const alpha = "ABCDEFGHIJKLMNOPQRSTUVW";
const styleAttributes = require('./style-attributes');

// given a state for a hexagon, 
// return the next one in the list 
// or empty if no state is specified
const state = [
    "empty",
    "dangerous",
    "secure",
    "alien-start",
    "human-start",
    "airlock" ];

let drawMode  = state[1];

function nextState(s) {

  const i = state.indexOf(s) + 1;
  if( i < state.length ){
    return state[i];
  }
  return state[0];
}

// add a leading zero to numbers less than 10
function pad(n){
  if(n<10){ return `0${n}`; }
  return n;
}

// this is array filter function that makes sure that 
// the current value hasn't already been seen in the array/
function unique(d, i, array) { 
  return array.indexOf(d) === i;
}
selectAll, select, range

function applyStyleAttributes(){
  //select elements and apply the appropriate attributes
  styleAttributes.forEach(d=>{
    selectAll(d.selector)
      .call(parent=>{
        Object.entries(d.rules)
          .forEach(([attribute, value])=>{
            parent.attr(attribute, value);;
          });
      })
  })
}

// something has changed, update the hexagons classes and icons
function update() {
  const title = select('.title-input').node().value;
  
  select('.map-title').text(title);
  
  selectAll('.hexagons g')
    .attr('class', d => d.state )
    .call(parent=>{
      parent.selectAll('use')
        .attr('href',d=>`#${d.state}-icon`);
    });

  applyStyleAttributes();
  const svgString = new XMLSerializer()
    .serializeToString(document.querySelector('svg#custom-escape-map'));

  select('.save-button')
    .attr('href',`data:image/svg+xml;utf8,${svgString.replace('\n','')}`)
    .attr('download', `${title}.svg`);
}

// setup the map and all its data, initially it's all blank
function init(){
  const hexagons = selectAll('.hexagons g')
    .each(function(d,i){
      const rect = this.getBBox()
      select(this)
        .classed('location',true)
        .datum({
          x:Math.floor(rect.x), 
          y:Math.floor(rect.y),
          width: rect.width,
          height: rect.height
        });
    });

  const columns = hexagons.data().map(d=>d.x)
    .filter(unique).sort((a,b)=>a-b);
  const rows = hexagons.data().map(d=>d.y)
    .filter(unique).sort((a,b)=>a-b);

  hexagons.each(function(){
    const d = select(this).datum();
    d.row = columns.indexOf(d.x);
    d.column = Math.floor(rows.indexOf(d.y)/2);
    d.label = `${alpha[d.row]}${pad(d.column + 1)}`;
    d.state = nextState();
    select(this).datum(d);
  });

  hexagons.attr('id',d=>d.label)
    .append('text')
      .attr('transform', d=>`translate(${d.x + d.width/2},${d.y + d.height/2})`)
      .attr('text-anchor','middle')
      .attr('alignment-baseline','central')
      .attr('font-size','30')
      .attr('class','label')
      .text(d => d.label);
  
  hexagons.append('use')
    .attr('href','#blank')
    .attr('transform',d => `translate(${d.x}, ${d.y})`);
  
  const hexWidth = hexagons.data()[0].width;
  select('.letters')
      .selectAll('text')
    .data('ABCDEFGHIJKLMNOPQRSTUVW'.split(''))
      .enter()
    .append('text')
      .text(d => d)
      .attr('transform',(d,i)=>`translate(${columns[i]+hexWidth/2},${rows[0]-50})`)
      .attr('text-anchor','middle');

  select('.movement')
    .attr('transform',`translate(${columns[0]},0)`)
    .selectAll('g')
      .data(range(1,40,1))
    .enter()
      .append('g')
      .attr('transform', (d, i)=>{
        const y = 500 + Math.floor(i/13) * 70;
        const x = i%13 * hexWidth * 1.4;
        return `translate(${x},${y})`;
      })
    .call((parent)=>{
      parent.append('text')
        .text(d=>pad(d))
        .attr('font-size','40px')
        .attr('text-anchor','end')
        .attr('font-family', '\'Share Tech Mono\', monospace');

      parent.append('line')
        .attr('x1',10)
        .attr('x2',100)
        .attr('y1',5)
        .attr('y2',5)
        .attr('stroke','#000000')
        .attr('stroke-width',3);
    });

  update();
  
  select('.title-input')
    .on('keyup', update);

  selectAll('.key-element')
    .on('click', function(d){
      drawMode = this.dataset.state;
    })

  hexagons.on('click', function(d){
    d.state = drawMode; 
    update();
  });
}

// when the page is all ready to go run the code.
window.onload = init;