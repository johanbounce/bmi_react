import React from "react";

const Form = props => {
let dispWeight
let dispHeight
if (props.countingSystem == "metric") {
  dispWeight = "kg"
  dispHeight = "cm"
} else {
  dispWeight = "lbs"
  dispHeight = "inches"
}

    return (
      <form onSubmit={props.onSubmitHandler}>
        <select 
        name="countingSystem" 
        id="select-method"
        onChange={props.onChangeHandler}
        >
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>

        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          required
          placeholder={dispWeight}
          value={props.weight}
          name="weight"
          id="weight"
          onChange={props.onChangeHandler}
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          placeholder={dispHeight}
          value={props.height}
          name="height"
          id="height"
          onChange={props.onChangeHandler}
        />
        <button id='calculate'>Calculate BMI</button>
      </form>
    );
  };
  
  export default Form;