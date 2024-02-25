import {React, useState} from "react";


function ToggleMachine(INITIAL_STATE = false){
    const [state, setState] = useState(INITIAL_STATE)
    const toggle = () => {
        setState(prevState => !prevState);
      };
    return [state, toggle];
}

export default ToggleMachine;