import React, { useState } from 'react'
import Background from './Assets/backgrounds/containerbackg.jpg'
import dateFormat from 'dateformat'

import sunny from './Assets/Weathericons/sunny.png'
import rain from './Assets/Weathericons/rain.png'
import axios from 'axios'

//import {image2, TwrImg} from './Components/TwrImg.js';

const Main = () => {
    
    
   
    const [location,searchText] =useState('');
    const weatherIcons = {
    'thunderstorm with light rain': rain,
    'thunderstorm with rain': rain,
     'thunderstorm with heavy rain': rain,
     'light thunderstorm': rain,
     'thunderstorm': rain,
     'heavy thunderstorm': rain,
     'ragged thunderstorm': rain,
     'thunderstorm with light drizzle': rain,
     'thunderstorm with drizzle': rain,
     'thunderstorm with heavy drizzle': rain,
     'light intensity drizzle': rain,
     'drizzle': rain,
    'heavy intensity drizzle': rain,
     'light intensity drizzle rain': rain,
     'drizzle rain': rain,
     'heavy intensity drizzle rain': rain,
     'shower rain and drizzle': rain,
     'heavy shower rain and drizzle': rain,
     'shower drizzle': rain,
     'moderate rain': rain,
     'moderate rain': rain,
     'moderate rain': rain,

      };
    
   
    //var image=null;
    const [wheather,setWheather] =useState({});
    const [date,setDate] =useState();
    const [DayAfterT,setDate2] =useState();
    //const [weatherTomorrow,setWthrTwr]=useState();
    //console.log(WeatherTwr);
    console.log(rain);
    const [towmorrowimg,setImgTwr]=useState();
    const getWeatherIcon = (weather) => {
        const mainWeather = wheather.list[6].weather[0].toLowerCase();
        return weatherIcons[mainWeather] || ''; // Default image
      };

    
    console.log(wheather.list? wheather.list[6].weather[0].description:null);
   
    
   
    try{
        



        } 
       //console.log(WeatherTwr)
       // const ob2=JSON.parse(WeatherTwr.weather);
        //console.log(ob2);
       // console.log(WeatherTwr[0].image)
        //var ob=WeatherTwr.find("light rain")
       // console.log('hh',ob);
       // image=ob.image
       // console.log('jj',image);
        
   
    catch(e){
        console.log(e);
    }
   
    
   async function handleKeyPress(event){
        if(event.key === 'Enter')
        {
           
            const url='https://api.openweathermap.org/data/2.5/forecast?q='+(location)+'&units=metric&limit=1&appid=6c0d41926523713e89503b05e46ecedc'
            axios.get(url).then((re)=>{
                setWheather(re.data)
                console.log(re.data)
                //console.log(wheather.city.name)
                //console.log(wheather? wheather.list[0].main.temp:null)
                setDate(dateFormat(wheather.list ? wheather.list[0].dt_txt:null,"mmm ddd, yyyy"));
                setDate2(dateFormat(wheather.list ? wheather.list[15].dt_txt:null,"DDDD"));
                
                //console.log(wheather.list? wheather.list[6].weather[0].description:null);
               
                
               
            })
        
        }
        

        
}
       
  return (
    <div className='Container'>
        <div className="top">
        <div className="head">Weatherio</div>
            <div className="search">
                <input type='text' value={location} onChange={event=>searchText(event.target.value)} placeholder='search city' onKeyUp={handleKeyPress}/>
            </div>
        </div>
        <div className="weather">
            <div className="city">{wheather.city? wheather.city.name:null}</div>
            <div className="date">{date?date:<>N/A</>}</div>
            
            <div className="faren">{wheather.list? wheather.list[0].main.temp.toFixed():<>N/A</>}°C</div>
            <div className="line">--------------</div>
        
            <div className="climate">{wheather.list? wheather.list[0].weather[0].description:<>N/A</>}</div>
            <div className="feelslike">{wheather.list? wheather.list[0].main.temp_min.toFixed():<>N/A</>}°C/{wheather.list? wheather.list[0].main.temp_max.toFixed():<>N/A</>}°C</div>   
        </div>
        <div className="bottom">
            <div className="today">
                <div className="img"><div><img className='Iconweather' src={sunny}/></div></div>
                <div className="temp">{wheather.list? wheather.list[1].main.temp_min.toFixed():<>N/A</>}°C/{wheather.list? wheather.list[1].main.temp_max.toFixed():<>N/A</>}°C</div>
                <div className="day">Today</div>
            </div>
            <div className="tomorow">
                <div className="img"><div><img className='Iconweather' src={sunny}/></div></div>
                <div className="temp">{wheather.list? wheather.list[6].main.temp_min.toFixed():<>N/A</>}°C/{wheather.list? wheather.list[6].main.temp_max.toFixed():<>N/A</>}°C</div>
                <div className="day">Tomorow</div>
            </div>
            <div className="dayafter">
                <div className="img"><img className='Iconweather' src={rain}/></div>
            <div className="temp">{wheather.list? wheather.list[15].main.temp_min.toFixed():<>N/A</>}°C/{wheather.list? wheather.list[6].main.temp_max.toFixed():<>N/A</>}°C</div>
            <div className="day">{DayAfterT?DayAfterT:<>N/A</>}</div>
            </div>
        </div>
    </div>
  )
}

export default Main