import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


export default function D3test(props) {

  const ref = useRef(null);

  const margin = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40
  };

  useEffect(() => {
    // check if ref.current
    const g = d3.select(ref.current);
    g.append('circle')
      .attr('cx', 10).attr('cy', 10).attr('r', 40).style('fill', 'blue');
  
  }, []);

  return (
    <div className={props.className}>
      <svg >
        <g ref={ref} transform={`translate(${margin.left},${margin.top})`} />
        {/* <g ref={ref} className="mx-12"/> */}
      </svg>
    </div>
  );
}

