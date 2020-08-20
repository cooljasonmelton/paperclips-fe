import React from 'react';

//router
import { withRouter } from 'react-router-dom';

//styling
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <div>
        <p>paperclips</p>
      </div>
      
      <select>
        <option>Write</option>
        <option>Analytics</option>
      </select>
    </div>
  );
}

export default Menu;
