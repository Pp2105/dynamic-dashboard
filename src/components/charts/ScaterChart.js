import React,{useState,useEffect} from "react";
import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
 import EditTitle from "./EditTitle";

const ScaterChart = () => {
    const updateTitle = (newTitle) => {
        setOptions({
          ...options,
          title: {
            text: newTitle,
          },
        });
      };
    const femaleData={
        name: 'Female',
    color: 'rgba(223, 83, 83, .5)',
    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
       [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], 
       [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], 
       [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], 
       [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], 
       [159.5, 50.6], [175.0, 82.5], [166.8, 57.2],[156.0, 64.4], 
       [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
       [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7],
       [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0],
       [161.3, 63.6], [162.6, 63.2]],
       marker:{
        symbol:'circle',
     },}

       const maleData={name: 'Male',
       color: 'purple',
       data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6],
          [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4],
          [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6],
          [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6],
          [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
          [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4],
          [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4],
          [164.5, 63.2], [173.0, 60.9],],
          marker:{
            symbol:'square',
         },}

          const TransData={
            name:'Trans Gender',
            color: 'rgba(119, 222, 301, 9.5)',
            data:[[171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                     [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6],
                     [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3],
                     [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5],
                     [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8],
                     [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3],],
                     marker:{
                        symbol:'triangle',
                     },
          }
  
    const [options,setOptions]=useState({
        legend: {
            layout: 'vertical',
               backgroundColor: '#FFFFFF',
               floating: true,
               align: 'left',
               x: 100,
               verticalAlign: 'top',
               y: 70
           },
      chart: {
         type: 'scatter',
         zoomType: 'xy'
     },
     title: {
         text: 'Olympics athletes by height and weight',
         align: 'left'
     },
     xAxis: {
         title: {
             text: 'Height'
         },
         labels: {
             format: '{value} cm'
         },
         startOnTick: true,
         endOnTick: true,
         showLastLabel: true
     },
     yAxis: {
         title: {
             text: 'Weight'
         },
         labels: {
             format: '{value} kg'
         }
     },
     plotOptions: {
         scatter: {
             marker: {
                 radius: 3,
                 symbol: 'circle',
                 states: {
                     hover: {
                         enabled: true,
                         lineColor: 'rgb(100,100,100)'
                     }
                 }
             },
             states: {
                 hover: {
                     marker: {
                         enabled: false
                     }
                 }
             },
             jitter: {
                 x: 0.005
             }
         }
     },
     tooltip: {
         pointFormat: 'Height: {point.x} cm <br/> Weight: {point.y} kg'
     },
     
 
     series:[  
       maleData,
       femaleData,
       TransData
     ],
       //
      
     
     
    })
   
     
 
  return (
    <div className="chart-content">
        <div className='editSettings'><EditTitle updateTitle={updateTitle}/></div> 
      <HighchartsReact
        className="highcharts"
        highcharts={HighCharts}
        options={options}
      />
    </div>
  );
};

export default ScaterChart;
