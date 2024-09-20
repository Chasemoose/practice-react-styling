import React from 'react';

import StyledBreadcrumb from './Breadcrumb.styled';

const Breadcrumb = props => {
    return (
        <StyledBreadcrumb variant={props.variant}>{props.children}</StyledBreadcrumb>
    );
}

export default Breadcrumb;