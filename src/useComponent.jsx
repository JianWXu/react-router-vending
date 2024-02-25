import React, {useState} from "react";


function useComponent(initialComponent){
    const [currentComponent, setCurrentComponent] = useState(initialComponent)
    const switchToComponent = (component) => {
        setCurrentComponent(component);
      };
    return [currentComponent, switchToComponent];
}

export default useComponent;