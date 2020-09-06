import React, { useState } from 'react';

// functions
import { currentDate } from "../functions/dateFunctions"
import { getWordCount } from "../functions/wordCountFunctions"

// styling
import './Write.css';

// components
import RewardContainer from './RewardContainer'

const EntryContainer = () => {
  const [entryText, setEntryText] = useState('')
  return (
    <div className="EntryContainer">
      <textarea className="entry-ta" 
        autoFocus 
        onChange={e=>setEntryText(e.target.value)} 
        value={entryText}/>
      
      <div className="entry-info"> 
        {`${currentDate()}  | count: ${getWordCount(entryText)}`} 
      </div>
    </div>
  );
}

export default EntryContainer;
