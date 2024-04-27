const SingleComment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.imgSrc} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
