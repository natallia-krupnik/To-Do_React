import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";
const FormControl = styled.div `

	margin: 0.5rem 0;
	
	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	& input {
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	&: input:focus {
		outline: none;
		background: #c8e1e4;
		border-color: #00358b;
	}

&.invalid input{
		border-color: red;
	}

&.invalid label{
		color: red;
	}`

const TaskInput = (props) => {
const [inputText, setInputText] = useState("");
const [isInputValid, setIsInputValid ] = useState(true)

const taskInputChangeHandler = (event) => {
	if(event.target.value.length > 0){
		setIsInputValid (true)
	}
   setInputText(event.target.value);
};

const formSubmitHandler = (event) => {
   event.preventDefault();
	if (inputText.trim().length === 0){
		setIsInputValid(false)
		return;
	}
   props.onAddTask(inputText);
};
		//dynamically created a new class .invalid from css TaskInput.css (below)
		//className={`form-control ${isInputValid ? "" : "invalid"}`}
		
return (
   <form onSubmit={formSubmitHandler}> 
		{/* <div className={`form-control ${isInputValid ? "" : "invalid"}`}>
			<label>Задачи</label>
			<input
				onChange={taskInputChangeHandler} 
				type="text"/>
      </div>  */}
		<FormControl className={isInputValid ?"" :"invalid"}>
			<label>Задачи</label>
			<input
				onChange={taskInputChangeHandler} 
				type="text"/>
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
   </form>
);
};

export default TaskInput;

			