import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Progress} from 'semantic-ui-react';


import styled from "styled-components";
import Modal from "./components/Modal";

function App(props) {

    const {} = props;
    const [modal, handleModal] = useState(false)


    return (
        <LoginBody>
            <Container>
                <div>
                    <h2>Login</h2>
                    <div>
                        <ID htmlFor='input_id'>ID : </ID>
                        <input type='text' name='input_id'/>
                    </div>

                    <br/>

                    <div>
                        <PW htmlFor='input_pw'>PW : </PW>
                        <input type='password' name='input_pw'/>
                    </div>
                </div>

                <br/>

                <Button
                    onClick={() => {
                        handleModal(true);
                    }}
                >
                    로그인 하기
                </Button>
                {modal && <Modal onClose={handleModal}/>}

            </Container>
        </LoginBody>
    );

}

const ID = styled.label`
    width : 30px;
    text-align : left;
    display: inline-block;
`;


const PW = styled.label`
    width : 30px;
    text-align : left;
    display: inline-block;
`;

const LoginBody = styled.div`
    height: 100%;
    text-align: center;
    margin-left: 5%;
    margin-right: 5%; 
    padding-top: 10%;
    bordor: solid;
    
    
`;
export default App;

