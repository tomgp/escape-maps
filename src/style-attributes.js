/*** SVG ***/


const selectors  = [
/* HEXAGONS */
/* TEXT DEFAULTS */
    {
        selector:'.map-title',
        rules:{
            'font-family': '\'Share Tech Mono\', monospace',
            'font-size': '290px',
            'text-anchor':'middle',
        }
    },
    {
        selector:'.label',
        rules:{
            'font-family': '\'Share Tech Mono\', monospace',
            'fill': 'black',
            'stroke': 'none',
            'pointer-events': 'none',
        }
    },
    /* EMPTY */
    {
        selector:'.empty text',
        rules:{
            'fill': 'none',
            'stroke': 'none', 
        }
    },
    {
        selector:'.empty path',
        rules:{
            'fill': "url('#hatching')",
            'stroke-opacity': 0,        
        }
    },
    /* DANGEROUS */
    {
        selector:'.dangerous path',
        rules:{
            'fill': '#CCCCCC',
            'stroke': '#000000',
            'stroke-opacity':1, 
        }
    },
    {
        selector:'.dangerous text',
        rules:{
            'fill': '#000000',
            'stroke': 'none',
        }
    },
    /* SECURE */
    {
        selector:'.secure path',
        rules:{
            'fill': '#FFFFFF',
            'stroke': '#000000',
            'stroke-opacity':1, 
        }
    },
    {
        selector:'.secure text',
        rules:{
            'fill': '#000000',
            'stroke': 'none',
        }
    },
    /* AIRLOCKS & ALIEN & HUMAN START SECTORS */
    {
        selector:'.alien-start path, .human-start path, .airlock path',
        rules:{
            'fill': '#000000', 
        }
    },
    {
        selector:'.alien-start text, .human-start text, .airlock text',
        rules:{
            'fill': 'none',
            'stroke': 'none',
        }
    },
];

module.exports = selectors;