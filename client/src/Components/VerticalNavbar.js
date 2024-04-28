import React from 'react';
import './VerticalNavbar.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faStore, faClipboardList } from '@fortawesome/free-solid-svg-icons'; // Import restaurant-related icons

function VerticalNavbar() {
  return (
    <div className="navbar">
     <ul>
        <li><a href="#"><FontAwesomeIcon icon={faHome} size="2x" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faUtensils} size="2x" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStore} size="2x" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faClipboardList} size="2x" /></a></li>
      </ul>
    </div>
  );
}
export default VerticalNavbar;
