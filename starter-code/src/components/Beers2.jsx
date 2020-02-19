import React, { Component } from 'react'
import Header from './Header';

export default class Beers2 extends Component {
  showBeers = () =>{
    return this.props.allBeers.map( eachBeer =>{
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
  render() {
    return (
      <div>
        <Header/>
        {/* if the ready is true then show the beers if false then show loading */}
        {this.props.ready?
        (this.showBeers())
        :
        ("Loading...")
        }
      </div>
    )
  }
}
