import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <ul>
      <li><Link to="/new">Add New</Link></li>
      <li><Link to="/random">Random Beer</Link></li>
      <li><Link to="/all-beers">See All Beers</Link></li>
    </ul>
  );
};

export default HomePage;