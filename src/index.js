import React from 'react'
import ReactDOM from 'react-dom'
import css from './main.scss';
console.log(css.toString());
const App = () => {
return <p>Hello World</p>
};
ReactDOM.render(<App/>,document.getElementById('root'));