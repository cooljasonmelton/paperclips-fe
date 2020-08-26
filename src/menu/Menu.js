import React, { useState } from 'react';

//router
import { withRouter } from 'react-router-dom';

//styling
import './Menu.css';

const Menu = props => {
  const [openDrop, setOpenDrop] = useState(false)

  const navigateSite = e => {
    let destination = e.target.textContent.toLowerCase()
    if (destination === "sign out") props.history.push("/")
    else props.history.push(destination)
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
        <button className="nav-button" 
          onClick={()=>setOpenDrop(!openDrop)}> 
          paperclips 
        </button>
        <div className={setNavClass(1)} 
          onClick={e=>navigateSite(e)}>
           write
        </div>
        <div className={setNavClass(2)} 
          onClick={e=>navigateSite(e)}>
            analytics
        </div>
        <div className={setNavClass(3)} 
          onClick={e=>navigateSite(e)}>
            sign out
        </div>
      </div>   
    </div>
  );
}

export default withRouter(Menu);
