import React, { useState } from 'react';

// functions
import { prettyDate } from "../functions/dateFunctions"
import { getWordCount } from "../functions/wordCountFunctions"

// styling
import './EntryContainer.css';

// components

const EntryContainer = () => {
  const [entryText, setEntryText] = useState('')
  return (
    <div className="EntryContainer">
      <textarea className="entry-ta" 
        autoFocus 
        onChange={e=>setEntryText(e.target.value)} 
        value={entryText}/>
      
      <div className="entry-info"> 
        {prettyDate()} / {getWordCount(entryText)} 
      </div>
    </div>
  );
}

export default EntryContainer;
