import React, { useState } from 'react';

//router
import { withRouter } from 'react-router-dom';

//styling
import './Menu.css';

const Menu = props => {
  const [openDrop, setOpenDrop] = useState(false)

  const navigateSite = e => {
    props.history.push(e.target.textContent.toLowerCase())
    setOpenDrop(false)
  }

  const setNavClass = num => {
    const classArr = ["nav-item"]
    if (openDrop) classArr.push(`open-${num}`)
    return classArr.join(' ')
  }

  return (
    <div className="Menu">
      <div className="drop-nav">
        <button className="nav-button" onClick={()=>setOpenDrop(!openDrop)}> Paperclips </button>
        <div className={setNavClass(1)} 
          onClick={e=>navigateSite(e)}>
           <div className="nav-text">Write</div> 
        </div>
        <div className={setNavClass(2)} 
          onClick={e=>navigateSite(e)}>
            Analytics
        </div>
      </div>   
    </div>
  );
}

export default withRouter(Menu);
