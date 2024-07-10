import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">TONLingo</div>
      <nav>
        <ul>
          <li><a href="#">LEARN</a></li>
          <li><a href="#">LEADERBOARD</a></li>
          <li><a href="#">QUESTS</a></li>
          <li><a href="#">SHOP</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
