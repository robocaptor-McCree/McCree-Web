import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import styled from "styled-components";
import Modal from "./components/Modal";
import LoginModal from './components/LoginModal'


function App(props) {

    const {} = props;
    const [modal, handleModal] = useState(false);
    const [possible, setPossible] = useState(false);


    return (
        <Body>
            <LoginBody>
                <div>
                    <h2>Login</h2>
                    <div>
                        <ID>
                            <input className={"idForm"} type={"text"} placeholder={"ID"}/>
                        </ID>
                    </div>

                    <br/>

                    <div>
                        <PW>
                            <input className={"pwForm"} type={"password"} placeholder={"PW"}/>
                        </PW>
                    </div>
                </div>

                <br/>

                <Button
                    onClick={() => {
                        handleModal(true);
                        setPossible(true);

                    }}
                >
                    로그인 하기
                </Button>
                {modal && <Modal onClose={handleModal}/>}

                {console.log(possible)}
                {console.log(modal)}
                {possible && !modal && <LoginModal/>}

            </LoginBody>
        </Body>
    );

}

const ID = styled.div`
    border-bottom: 2px solid #adadad;
    margin: 30px;
    padding: 10px 10px;
`;

const PW = styled.div`
    border-bottom: 2px solid #adadad;
    margin: 30px;
    padding: 10px 10px;
`;

const Button = styled.button`
    position:relative;
    left:40%;
    transform: translateX(-50%);
    margin-bottom: 40px;
    width:80%;
    height:40px;
    background: linear-gradient(125deg,#81ecec,#6c5ce7,#81ecec);
    background-position: left;
    background-size: 200%;
    color:white;
    font-weight: bold;
    border:none;
    cursor:pointer;
    transition: 0.4s;
    display:inline;
`

const LoginBody = styled.div`
    position:absolute;
    width:300px;
    height:400px;
    padding: 30px, 20px;
    background-color:#FFFFFF;
    text-align:center;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
`;

const Body = styled.div`
    margin: 0px;
    padding: 0px;
    font-family:sans-serif;
    background-color : #34495e;
`;

export default App;

