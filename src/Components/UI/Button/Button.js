
//ich gestalte "button" mit der Hilfe "styled-components.com"
//npm install --save styled-components
//& - this ist PSEUDO-elements 
// import styled from "styled-components";

// const Button = styled.button`
// 		font: inherit;
// 		padding: 0.5rem 1.5rem;
// 		color: white;
// 		background: #00358b;
// 		border-radius: 4px;
// 		box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
// 		cursor: pointer;

// 	@media(max-width: 700px){
// 		width: 100%
// 	}

// 	&:focus {
// 		outline: none;
// 	}

// 	&:hover,
// 	&:active {
// 		background: #245fbd;
// 		box-shadow: 0 0 8px rgba(50, 50, 50, 0.25);
// 	}
// `;
// export default Button;

// CSS MODULE
//className={stales.button} button nehmt man from CSS(class .button)
import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<button type={props.type} className={styles.button}>
			{props.children}
		</button>
	);
};
export default Button;