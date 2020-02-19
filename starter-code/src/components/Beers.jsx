import React from 'react';
import Header from './Header';

const Beers = (props) => {
  // console.log(props)
  const showBeers = () =>{
    return props.allBeers.map( eachBeer =>{
        return (
            <div key={eachBeer._id}>
                <h2>
                    {eachBeer.name}
                </h2>
                <h4>{eachBeer.tagline}</h4>
                    <img 
                        style={{width: '100px'}} 
                        src={eachBeer.image_url} 
                        alt="the beer"
                    />
                <p>Creator: {eachBeer.contributed_by}</p>
            </div>
        )
    })
    }

if(props.ready) 
  return (<div> <Header/> {showBeers()} </div>)
else 
  return(<div><Header/> Loading...</div>)  

};

export default Beers;