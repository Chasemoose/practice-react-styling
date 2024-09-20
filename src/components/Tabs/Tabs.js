import React from 'react';

import { StyledTabs } from './Tabs.styled';

const Tabs = props => {
    return (
        <StyledTabs>{props.children}</StyledTabs>
    );
}

export default Tabs;