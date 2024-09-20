import React, {useState} from "react";

import { StyledTabs } from "./Tabs.styled";

const Tabs = ({ children, defaultActiveKey }) => {

    const [state, setState ] = useState(defaultActiveKey)

    function handleClick (key) {
        setState(key)
    }

	return (
		<>
			<StyledTabs>
				{React.Children.map(children, (child) => (
					<a onClick={() => handleClick(child.props.eventKey)}>{child.props.title}</a>
				))}
			</StyledTabs>
				{React.Children.map(children, (child) => <div active={child.props.eventKey === state ? 'y' : 'n'}>{Child}</div>)}
				
			
		</>
	);
};

export default Tabs;
