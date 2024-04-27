import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.imgSrc} alt="avatar" />
      </div>
      <div className="content">
        <div className="header">{props.header}</div>
        <div className="meta">
          <a href="/">{props.meta}</a>
        </div>
        <div className="description">{props.description} </div>
        <div className="ui comments">
          <div className="comment">{props.children}</div>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">Joined in {props.time}</span>
        <span>
          <i className="user icon"></i>
          {props.friends} Friends
        </span>
      </div>
    </div>
  );
};

export default Card;
