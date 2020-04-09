import React from 'react';


class Contact extends React.Component{
  constructor(props){
    super (props);
    this.state={
      online:props.online
    };
  }

  render(){
    return(
      <div className="Contact">
      <img src={this.props.image} className="avatar" alt=""/>
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status" onClick={event =>{
          let newStatus;
          this.state.online? newStatus=false:newStatus=true;
          this.setState({online: newStatus});
        }}>
          <span className={this.state.online?"status-online":"status-offline"}/>
          <p className="status-text">{this.state.online?"online":"offline"}</p>
        </div>
      </div>
    </div>
    );
  };
}

export default Contact;