import React from 'react';
import styled from "styled-components";




function LoginFailModal(props) {
    return (
        <Container>
            <Message>
                <p style={{marginTop: "40%"}}> 로그인 실패 ! </p>
                <p> 새로고침 후 다시 시도하세요. </p>
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


export default LoginFailModal;