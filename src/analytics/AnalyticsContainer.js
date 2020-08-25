import React from 'react';

// styling
import './AnalyticsContainer.css';

// components

const AnalyticsContainer = () => {
  return (
    <div className="AnalyticsContainer">
      <div className="analytics-item graph">Graph: </div>
      <div className="analytics-item calendar">Calendar:</div>
      <div className="analytics-item">Total Words: 10,000</div>
      <div className="analytics-item">Longest Entry: 600 words on 6/20/20</div>
      <div className="analytics-item">Longest Streak: 9 days</div>
      <div className="analytics-item">Longest Word: Orangutan</div>
      <div className="analytics-item">Most Common Word (more than 3 letters): these </div>
      <div className="analytics-item">Most Common Capitalized Word (more than 3 letters): Sandra </div>
    </div>
  );
}

export default AnalyticsContainer;


