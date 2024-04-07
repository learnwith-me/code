import { useState } from "react";
import "./App.css";
import Callback from "./components/Callback";



// Parent Component
function AppClone() {

    const [text, setText] = useState('');

    const getText = (text) => {
        setText(text);
    }

    return <>
        <Callback getText={getText}></Callback>
        <br />
        <h2>{text}</h2>
    </>;
}

export default AppClone;
