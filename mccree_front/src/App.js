import React, {useState, useEffect} from 'react';
import './App.css';

import styled from "styled-components";
import Modal from "./components/Modal";
import LoginModal from './components/LoginModal'
import photoAPI from "./api/photoAPI";
import LoginFailModal from "./components/LoginFailModal";



function App(props) {

    const {} = props;
    const [modal, handleModal] = useState(false);
    const [possible, setPossible] = useState(false);
    const [fail, setFail] = useState(false);

    const [ questionPhoto, setQuestionPhoto ] = useState([])
    const [ questionList, setQuestionList ] = useState([])

    // min ~ max 사이의 random number generate
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    // const randomId = getRandom(25,31);
    const randomId = 30;

    return (
        <div>
        <LoginBody>
            <div>
                <br/>
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
                    photoAPI.getPhoto(randomId).then(res => {

                        console.log("요청한 사진 id :", randomId)
                        setQuestionPhoto(res.data.photo)
                    })

                    photoAPI.getQuestion(randomId)
                        .then(res => {
                            console.log("요청한 보기 id", randomId)
                            setQuestionList(res.data)

                            console.log("요청한 보기 목록")
                            console.log(res.data)
                        })
                }}
            >
                로그인 하기
            </Button>
            <br/>
            {modal && <Modal photo={questionPhoto} id={randomId} list={questionList} onClose={handleModal} f={setFail}/>}

            {/*{console.log(fail)}*/}
            {possible && !modal && <LoginModal/>}
            {fail && <LoginFailModal/>}

        </LoginBody>
        </div>
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
    margin: 50px, 40px;
    background-color:#FFFFFF;
    text-align:center;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    background: white;
`;


export default App;

