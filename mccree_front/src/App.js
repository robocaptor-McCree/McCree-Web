import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import photoAPI from './api/photoAPI';
import {Button, Progress} from 'semantic-ui-react'
import imgA from './images/001.png';






function App() {



  const [questionPhoto, setQuestionPhoto ] = useState([])

  useEffect(() => {
    photoAPI.getQuestion(1)
      .then(res => {
        setQuestionPhoto(res.data.photo)
        console.log(res.data.photo)
      })
  }, [])

  return (
    <div>
      <p>아래 사진이 뭔가욤?</p>
    <div>
  <img
    src={ questionPhoto }
    width='400'
    height='300'
    alt='testA' />
  </div>
  <Button primary> 곰 </Button>
  <Button primary> 고양이 </Button>
  <Button primary> 강아지 </Button>
  <Button primary> 고래 </Button>
  </div>
    );
  }

export default App;
