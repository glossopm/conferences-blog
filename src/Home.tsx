import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      <Link to="/talks">Go To Talks</Link>
    </div>
  );
};

export default Home;