import React from 'react';

import styled from "styled-components";
import photoAPI from "../api/photoAPI";


function Modal(props) {

    return (
        <Container>
            <div>
                <H>아래 사진에 해당하는 정답 버튼을 눌러주세요 !</H>
                <QuestionImg>
                    <img
                        // src 기본 경로 : maccree_front/public
                        src={props.photo}
                        width='400'
                        height='300'
                        alt=''/>
                </QuestionImg>

                <Example>

                    <Button id={1} onClick={ () =>  photoAPI.getAnswer(props.id, props.list["question1"])

                        .then(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.onClose(false);
                        })
                        .catch(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.f(true);
                        })} primary>
                        {props.list["question1"]}
                    </Button>

                    <Button id={2} onClick={ () =>  photoAPI.getAnswer(props.id, props.list["question2"])
                        .then(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.onClose(false);

                        })
                        .catch(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.f(true);
                        })} primary>
                        {props.list["question2"]}
                    </Button>

                    <Button id={3} onClick={ () =>   photoAPI.getAnswer(props.id, props.list["question3"])
                        .then(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.onClose(false);

                        })
                        .catch(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.f(true);
                        })} primary>
                        {props.list["question3"]}
                    </Button>

                    <Button id={4} onClick={ () =>  photoAPI.getAnswer(props.id, props.list["question4"])
                        .then(res=> {
                            console.log("요청한 사진 id :", props.id)
                                props.onClose(false);

                        })
                        .catch(res=> {
                            console.log("요청한 사진 id :", props.id)
                            props.f(true);
                        })} primary>
                        {props.list["question4"]}
                    </Button>

                </Example>
            </div>
        </Container>
    );
}


const Container = styled.div`
  position: absolute;
  width: 600px;
  height: 500px;
  top: -10%;
  left: -50%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
`;


const Button = styled.button`
  position: relative;
  transform: translateX(-50%);
  width: 100px;
  height: 40px;
  margin: 10px;
  left: 5%%;
  background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
  background-size: 200%;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: inline;
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
  margin-left: 18%;
`;

export default Modal;