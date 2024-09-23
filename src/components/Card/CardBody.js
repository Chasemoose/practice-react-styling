import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`

const CardBody = ({ Children }) => {
    return (
        <StyledCardBody>{Children}</StyledCardBody>
    );
}

export default CardBody;