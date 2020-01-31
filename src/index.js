const d3 = require('d3');
const alpha = "ABCDEFGHIJKLMNOPQRSTUVW";
const title = 'huh?';

function nextState(s) {
  const state = ["empty","dangerous","secure","alien-start","human-start","airlock"];
  const i = state.indexOf(s) + 1;
  if( i < state.length ){
    return state[i];
  }
  return state[0];
}

function pad(n){
  if(n<10){ return `0${n}`; }
  return n;
}
function unique(d, i, array) { 
  return array.indexOf(d) === i;
}

function update() {
  d3.select('.map-title').text(title);
  d3.selectAll('.hexagons g')
    .attr('class', d => d.state );
}

function init(){
  const hexagons = d3
    .selectAll('.hexagons g')
    .each(function(d,i){
      const rect = this.getBBox()
      d3.select(this)
        .classed('location',true)
        .datum({
          x:Math.floor(rect.x), 
          y:Math.floor(rect.y),
          width: rect.width,
          height: rect.height
        });
    });

  const columns = hexagons.data().map(d=>d.x).filter(unique).sort((a,b)=>a-b);
  const rows = hexagons.data().map(d=>d.y).filter(unique).sort((a,b)=>a-b);

  hexagons.each(function(){
    const d = d3.select(this).datum();
    d.row = columns.indexOf(d.x);
    d.column = Math.floor(rows.indexOf(d.y)/2);
    d.label = `${alpha[d.row]}${pad(d.column + 1)}`;
    d.state = nextState();
    d3.select(this).datum(d);
  });

  hexagons.attr('id',d=>d.label)
    .append('text')
      .attr('transform', d=>`translate(${d.x + d.width/2},${d.y + d.height/2})`)
      .attr('text-anchor','middle')
      .attr('alignment-baseline','central')
      .attr('font-size','30')
      .attr('class','label')
      .text(d=>d.label);
    
    update();

    hexagons.on('click', function(d){
      console.log(d);
      d.state = nextState( d.state );
      update();
    });
}

const main = () => {
  init();
}

window.onload = main;