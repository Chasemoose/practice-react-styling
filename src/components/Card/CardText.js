import React from 'react';
import styled from 'styled-components';

const StyledCardText = styled.div`
    margin-top: 0;
    margin-bottom: 1rem;
`

const CardText = ({ Children }) => {
    return (
        <StyledCardText>{Children}</StyledCardText>
    );
}

export default CardText;