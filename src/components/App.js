import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider, css } from 'styled-components'

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import StyledGlobal from './styled/Global'

const theme = {
    alert: {
        primary: css`
            color: #004085;
            background-color: #cce5ff;
            border-color: #b8daff;

            &:hover {
                color: #fff;
                background-color: #0069d9;
                border-color: #0062cc;
            }
        `,
        secondary: css`
            color: #383d41;
            background-color: #e2e3e5;
            border-color: #d6d8db;

            &:hover {
                color: #fff;
                background-color: #5a6268;
                border-color: #545b62;
            }
        `

    },
    button: {
        variant: {
            primary: css`
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
            `,
            secondary: css`
                color: #fff;
                background-color: #6c757d;
                border-color: #6c757d;
                
            `
        },
        size: {
            lg: css`
                padding: 0.5rem 1rem;
                font-size: 1.25rem;
                line-height: 1.5rem;
                border-radius: 0.3rem;
            `,
            sm: css`
                padding: 0.25rem 0.5rem;
                font-size: 0.875rem;
                line-height: 1.5rem;
                border-radius: 0.2rem;
            `
        }
    }
}


const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledGlobal />
                <Container fluid>
                    <Row>
                        <Col>
                            <h2>Komponenty React Boostrap</h2></Col>
                        <Col>
                            <h2>Komponenty Twoje</h2>
                        </Col>
                    </Row>
                    <Task01/>
                    <Task02/>
                    <Task03/>
                    <Task04/>
                    <Task05/>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default App;