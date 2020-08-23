import React, { useState } from 'react';

// styling
import './EntryContainer.css';

// components

const EntryContainer = () => {
  const [entryText, setEntryText] = useState('')
  return (
    <div className="EntryContainer">
      <textarea className="entry-ta" autoFocus onChange={e=>setEntryText(e.target.value)} value={entryText}/>
    </div>
  );
}

export default EntryContainer;


// layout: 

// entry container

// date / word count