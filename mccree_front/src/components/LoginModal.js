import React, { useState, useEffect } from 'react';

import styled from "styled-components";

import {Button} from 'semantic-ui-react';



function LoginModal(props) {
    return (
        <Container>
            <Message>
                로그인 성공 !
            </Message>
        </Container>
    );
}

const Message = styled.p`
    color: white;
    margin-top: 20%;

`
const Container = styled.div`
    position: fixed;
    left: 30%;
    right: 30%;
    top: 20%;
    bottom: 30%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.9);

`;


const H = styled.h1`
    text-align: center; 
    color: white;
`;

const QuestionImg = styled.div`
    text-align: center;
`;

const Example = styled.div`
    text-align: center;
`;

export default LoginModal;