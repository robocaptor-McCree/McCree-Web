import React, { useState, useEffect } from 'react';

import styled from "styled-components";

import {Button} from 'semantic-ui-react';



function LoginModal(props) {
    return (
        <Container>
            <Message>
                <p style={{marginTop: "40%"}}> 로그인 성공 ! </p>
            </Message>
        </Container>
    );
}

const Message = styled.h2`
    color: black;
`;

const Container = styled.div`
    position:absolute;
    width:600px;
    height:500px;
    top: -50%;
    left: -50%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
`;


export default LoginModal;