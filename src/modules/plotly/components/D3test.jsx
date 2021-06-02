import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import {heatmapDendro, testt} from '@/utils/d3HeatMap';
import { dataTable } from '@/store/data-store';
import * as heatmap from '@/utils/heatmap';

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
    // const g = d3.select(ref.current);
    // g.append('circle')
    //   .attr('cx', 10).attr('cy', 10).attr('r', 40).style('fill', 'blue');
    if(ref.current) {
      const clusterResult = heatmap.clusterExpressionReplicates(dataTable);
      const replicateNames = dataTable.colNames;
      const d3Data = heatmap.convertForD3(clusterResult, replicateNames);
      heatmapDendro(d3Data);
      // testt(ref);


      // testt(document, ref);

    }
    
  
  }, []);

  return (
    <div className={props.className}>
      <svg >
        <g id="heatmap" ref={(g) => ref.current = g} transform={`translate(${margin.left},${margin.top})`} />
        {/* <g ref={ref} className="mx-12"/> */}
      </svg>
    </div>
  );
}

