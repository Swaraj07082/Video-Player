import React from "react";
import { useState } from "react";

export default function RButton() {
  //  const OnClick= (event) =>{
  // console.log(event)
  //  }

  let deer = "https://www.youtube.com/embed/urYsT7EopWg?rel=0";
  let snail = "https://www.youtube.com/embed/PQ1BXxmHsiU?rel=0";
  let cat = "https://www.youtube.com/embed/cytJLvf-eVs?rel=0";
  let spider = "https://www.youtube.com/embed/uHyYtcMZYGs?rel=0";

  const [state, setState] = useState(deer);

  const OnSelection = (event) => {
    if (event.target.id == "inlineRadio1") {
      setState(deer);
    } else if (event.target.id == "inlineRadio2") {
      setState(snail);
    } else if (event.target.id == "inlineRadio3") {
      setState(cat);
    } else {
      setState(spider);
    }
  };

  // target of event object is more preferable than other attributes

  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          style={{ position: "relative", left: 470, top: 130 }}
          // onClick={OnClick}
          onClick={OnSelection}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio1"
          style={{ position: "relative", left: 470, top: 130, color: "white" }}
        >
          Deer
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
          style={{ position: "relative", left: 570, top: 130 }}
          // onClick={OnClick}
          onClick={OnSelection}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
          style={{ position: "relative", left: 570, top: 130, color: "white" }}
        >
          Snail
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option1"
          style={{ position: "relative", left: 670, top: 130 }}
          // onClick={OnClick}
          onClick={OnSelection}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio1"
          style={{ position: "relative", left: 670, top: 130, color: "white" }}
        >
          Cat
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="option2"
          style={{ position: "relative", left: 770, top: 130 }}
          // onClick={OnClick}
          onClick={OnSelection}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
          style={{ position: "relative", left: 770, top: 130, color: "white" }}
        >
          Spider
        </label>
      </div>

      <div
        className="container"
        style={{ width: 775, position: "relative", top: 180, right: 30 }}
      >
        <div className="ratio ratio-21x9">
          <iframe src={state} title="YouTube video" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
