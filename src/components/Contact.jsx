import React from 'react';
import PropTypes from 'prop-types';



const Contact = props => {
  const{name, isOnline, image} = props;
  return(
  <div className="Contact">
    <img src={image} className="avatar" alt=""/>
    <div>
      <p className="name">{name}</p>
      <div className="status">
        <span className={isOnline?"status-online":"status-offline"}/>
        <p className="status-text">{isOnline?"Online":"Offline"}</p>
      </div>
    </div>
  </div>
)};
Contact.propTypes = {
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
  image:PropTypes.string.isRequired
}
export default Contact;