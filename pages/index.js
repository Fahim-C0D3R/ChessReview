import React from 'react';
import ChessBoard from '../pages/board.js';  // Adjust path as necessary

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Chess Review App!</h1>
      <ChessBoard />
      <p>This should be some extra content that appears below the heading.</p>
    </div>
  );
};

export default Home;
