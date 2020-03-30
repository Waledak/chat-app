import React from 'react';

const Contact = props => (
  <div className="Contact">
    <img src={props.image} className="avatar" alt=""/>
    <div>
      <p className="name">{props.name}</p>
      <div className="status">
        <p className={props.isOnline?"status-online":"status-offline"}/>
        <p className="status-text">{props.isOnline?"Online":"Offline"}</p>
      </div>
    </div>
  </div>
);

export default Contact;