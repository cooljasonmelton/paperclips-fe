import React from 'react';

// styling
import './Write.css';

// components
import RewardContainer from './RewardContainer'
import EntryContainer from './EntryContainer'


const Write = () => {
  return (
    <div className="Write">
        <RewardContainer/>
        <EntryContainer/>
    </div>
  );
}

export default Write;
