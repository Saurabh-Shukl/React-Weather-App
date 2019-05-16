import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Weather";
//import WeatherDropDown from ".Components/WeatherDropDown"

const API_KEY ="7a4896db4ae42af6d7a24b56f2649d54z";


class App extends React.Component{ //This ctreating instance of app react cpmponent is in anywhere in node modules 
state={

    temprature:undefined,
    Country:undefined,
    humidity:undefined,
    description:undefined,
    speed:undefined,
    error:undefined

}

    getWeather=async(e) =>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const Country=e.target.elements.country.value;
        const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${Country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json();
     if(city && Country){
        console.log(data);
        //console.log(city);
        //console.log(country);
        this.setState({
            city:data.name,
            country:data.sys.country,
            temprature:data.main.temp,
             humidity:data.main.humidity,
             speed:data.wind.speed,
             description:data.weather[0].description,
             error:""            



        });
    }else{
            this.setState({

                temprature:undefined,
                Country:undefined,
                humidity:undefined,
                description:undefined,
                speed:undefined,
                error:"Please Enter the values"
              
        });
    }
}
    render(){   // Render method is Raect built in method that comes inside React Componenet

        return(    //Render method retyrn jsx
<div>
    <div className="wrapper">
    <div className="main">
    <div className="container">
    <div className="row">
       <div className="col-xs-5 title-contanier">
       <Titles />
       </div>
       <div className="col-xs-7 form-container">
       <Form  getWeather={this.getWeather}/>
<Weather 
temprature={this.state.temprature}
city={this.state.city}
country={this.state.country}
humidity={this.state.humidity}
description={this.state.description}
speed={this.state.speed}
error={this.state.error}/>

       </div>
       </div>
    </div>
    </div>
    </div>
    </div>
    

        );
    }  
};

export default App