import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import photoAPI from "../api/photoAPI";

import App from "../App"



function Modal(props) {
    const { onClose } = props;
    const [questionPhoto, setQuestionPhoto ] = useState([])

    useEffect(() => {
        photoAPI.getQuestion(1)
            .then(res => {
                setQuestionPhoto(res.data.photo)
                console.log(res.data.photo)
            })
    }, [])

        return (
            <Container>

                <div>
                    <H>아래 사진에 해당하는 정답 버튼을 눌러주세요 !</H>
                    <QuestionImg>
                        <img
                            src={questionPhoto}
                            width='400'
                            height='300'
                            alt=''/>
                    </QuestionImg>
                    <Example>
                        <Button id={1} primary

                                onClick={() => {
                                    onClose(false);
                                }}>
                            곰 </Button>
                        <Button id={2} primary> 고양이 </Button>
                        <Button id={3} primary> 강아지 </Button>
                        <Button id={4} primary> 고래 </Button>
                    </Example>
                </div>
            </Container>
        );
}


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


const Button = styled.button`
    position:relative;
    transform: translateX(-50%);
    width:100px;
    height:40px;
    margin : 10px;
    left: 5%%;
    background: linear-gradient(125deg,#81ecec,#6c5ce7,#81ecec);
    background-size: 200%;
    color:white;
    font-weight: bold;
    border:none;
    cursor:pointer;
    display:inline;
`


const H = styled.h1`
    text-align: center; 
    color: black;
`;

const QuestionImg = styled.div`
    text-align: center;
`;

const Example = styled.div`
    text-align: center;
`;

export default Modal;