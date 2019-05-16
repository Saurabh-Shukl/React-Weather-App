import React from "react";

// class Weather extends React.Component{


const weather=(props)=>(

        <div className="weather__info"> 
          {
              props.city && props.country && <p className="weather__key"> Location:
                  
            <span>{props.city},{props.country}
            </span>
            </p> 
        
        }
           {
               props.temprature && <p className="weather__key">Temprature: 
              <span> {props.temprature}
              </span>
              </p>
               
            }
          {
              props.humidity && <p className="weather__key">Humidity: 
              
             <span> {props.humidity}</span>
              
              </p>
              
              }
           {
               props.description && <p className="weather__key">Condition: 
               
              <span> {props.description}</span>
               
               </p>
            }
           {
               props.speed && <p className="weather__key">WindSpeed:
                 
               <span>{props.speed}</span>
               
               </p>
            }
            {
                props.error && <p className="weather__key">Error:
                <span>{props.error}</span>
                
                </p>
            }
        </div>
    );



export default weather