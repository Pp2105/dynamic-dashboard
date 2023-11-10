import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {AiOutlineEdit,AiOutlineClose } from 'react-icons/ai';
 import './Settings.css'; 


const EditTitle = (props) => {
    
    const[click,setClick]=useState(false);
 const [chartType, setChartType] = useState('');
 const [titleInput, setTitleInput] = useState('');
  
const handleInputChange = (e) => {
    setTitleInput(e.target.value);
}
 
 


const handleUpdateClick = () => {
    props.updateTitle(titleInput);
}

 

 const chartOptions = chartType ? {
    title: titleInput,
     
    
 } : null;

 return (
    <>
      <div className="editSettingsUI">
      {click?
   <AiOutlineClose
   onClick={()=>setClick(false)}
   />:
   <AiOutlineEdit  onClick={()=>setClick(true)}
   />
     }

     {click && (
       
        <div className='editSettingFrame'>
               <input 
            type="text" 
            value={titleInput} 
            onChange={handleInputChange} 
        />
        <button onClick={handleUpdateClick}>Update Title</button>
           
    
             
          
        </div>
     )}

       
      </div>

      {chartOptions && <HighchartsReact highcharts={Highcharts} options={chartOptions} />}
    </>
 );
};

export default EditTitle;