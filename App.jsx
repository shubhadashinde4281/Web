import { useState } from "react";
import "./App.css";
function App() {
const [count, setCount] = useState(0);
return (
<div className="container">
<h1>Hello React! </h1>
<p>Welcome to my first React app.</p>
<h2>Count: {count}</h2>
<button onClick={() => setCount(count + 1)}>
Click Me
</button>
</div>
);
}
export default App;



css:
.container {
text-align: center;
margin-top: 100px;
font-family: Arial, sans-serif;
}
h1 {
color: #646cff;
}
button {
background-color: #646cff;
color: white;
padding: 12px 24px;
border: none;
border-radius: 8px;
  cursor: pointer;
font-size: 16px;
}
button:hover {
background-color: #535bf2;
}
