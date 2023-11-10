import React, { useState, useEffect } from 'react';

const DataFetcher = ({ updateSeries }) => {
    
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json")
          .then(response => {
            return response.json();
          })
          .then(data => {
            updateSeries(data);
          });
      }, []);
      
    return null;
}

export default DataFetcher;