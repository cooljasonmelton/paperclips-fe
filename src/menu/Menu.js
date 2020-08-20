import React, { useState } from 'react';

//router
import { withRouter } from 'react-router-dom';

//styling
import './Menu.css';

const Menu = props => {
  const [openDrop, setOpenDrop] = useState(false)

  const navigateSite = e => {
    props.history.push(e.target.textContent.toLowerCase())
  }

  const setNavClass = () => {
    const classArr = ["nav-item"]
    if (openDrop) classArr.push('open')
    return classArr.join(' ')
  }

  return (
    <div className="Menu">
      <div onClick={()=>setOpenDrop(!openDrop)}>
        <p>paperclips</p>
      </div>

      <div className="drop-nav">
        <div className={setNavClass()} onClick={e=>navigateSite(e)}>Write</div>
        <div className={setNavClass()} onClick={e=>navigateSite(e)}>Analytics</div>
      </div>

      

    </div>
  );
}

export default withRouter(Menu);
