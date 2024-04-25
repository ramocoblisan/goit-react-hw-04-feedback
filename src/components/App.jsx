import React, { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notifications from "./Notifications/Notifications"

export function App()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const handleFeedback = (evt) => {
  const {name} = evt.target; 

  if (name === "good") {
    setGood((prevGood) => prevGood + 1);
  } else if (name === "neutral") {
    setNeutral((prevNeutral) => prevNeutral + 1);
  } else if (name === "bad") {
    setBad((prevBad) => prevBad + 1);
  }

};

const total = good + neutral + bad;
const percentage = total > 0 ? ((good/ total) * 100).toFixed(0) : 0;
const options =['good', 'neutral', 'bad'];
 
  return(
    <>
    <Section title="Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={handleFeedback}/>
      {
        total > 0
         ? 
         (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={`${percentage}%`}/>)
        :
          (<Notifications message="There is no feedback"></Notifications>)
      }
    </Section>
    </>
  )
}

export default App;