import React, { useState } from "react";
import Card from "../components/Card";
import SingleComment from "../components/SingleComment";

const About = () => {
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Function to reset the counter
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="container my-5">
      <h1>Counter Using State:</h1>
      <div>
        <button className="btn btn-primary mx-1" onClick={incrementCounter}>
          Increment Counter
        </button>
        <button className="btn btn-primary mx-1" onClick={decrementCounter}>
          Decrement Counter
        </button>
        <button className="btn btn-primary mx-1" onClick={resetCounter}>
          Reset
        </button>
        <p className="my-3">Counter Value: {counter}</p>
      </div>
      <h1>Props & Child Props:</h1>
      <div className="ui link cards mt-3">
        <Card
          imgSrc="/images/matthew.png"
          header="Matt Giampietro"
          meta="Friends"
          description="Matthew is an designer living in New York."
          time="2013"
          friends="75"
        >
          <SingleComment
            imgSrc="/images/matt.jpg"
            name="Matt"
            time="Today at 5:42PM"
            comment="How artistic!"
          />
          <SingleComment
            imgSrc="/images/elliot.jpg"
            name="Elliot Fu"
            time="Yesterday at 12:30AM"
            comment="This has been very useful for my research. Thanks as well!"
          />
          <SingleComment
            imgSrc="/images/jenny.jpg"
            name="Jenny Hess"
            time="Just now"
            comment="Elliot you are always so right :)"
          />
        </Card>
        <Card
          imgSrc="/images/molly.png"
          header="Molly"
          meta="Coworker"
          description="Molly is a personal assistant living in Paris."
          time="2011"
          friends="35"
        >
          <SingleComment
            imgSrc="/images/matt.jpg"
            name="Matt"
            time="Today at 5:42PM"
            comment="How artistic!"
          />
          <SingleComment
            imgSrc="/images/elliot.jpg"
            name="Elliot Fu"
            time="Yesterday at 12:30AM"
            comment="This has been very useful for my research. Thanks as well!"
          />
          <SingleComment
            imgSrc="/images/jenny.jpg"
            name="Jenny Hess"
            time="Just now"
            comment="Elliot you are always so right :)"
          />
        </Card>
        <Card
          imgSrc="/images/elyse.png"
          header="Elyse"
          meta="Coworker"
          description="Elyse is a copywriter working in New York. "
          time="2014"
          friends="155"
        >
          <SingleComment
            imgSrc="/images/matt.jpg"
            name="Matt"
            time="Today at 5:42PM"
            comment="How artistic!"
          />
          <SingleComment
            imgSrc="/images/elliot.jpg"
            name="Elliot Fu"
            time="Yesterday at 12:30AM"
            comment="This has been very useful for my research. Thanks as well!"
          />
          <SingleComment
            imgSrc="/images/jenny.jpg"
            name="Jenny Hess"
            time="Just now"
            comment="Elliot you are always so right :)"
          />
        </Card>
      </div>
      <h1>Comments Using Props:</h1>
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <SingleComment
          imgSrc="/images/matt.jpg"
          name="Matt"
          time="Today at 5:42PM"
          comment="How artistic!"
        />
        <SingleComment
          imgSrc="/images/elliot.jpg"
          name="Elliot Fu"
          time="Yesterday at 12:30AM"
          comment="This has been very useful for my research. Thanks as well!"
        />
        <SingleComment
          imgSrc="/images/jenny.jpg"
          name="Jenny Hess"
          time="Just now"
          comment="Elliot you are always so right :)"
        />
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
