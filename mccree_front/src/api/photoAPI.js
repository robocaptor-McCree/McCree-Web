import axios from "axios";

export default{
    getPhoto(id){
        return axios.get(`http://127.0.0.1:8000/api/question/question/${id}/`)
    },
    getQuestion(id){
        return axios.get(`http://127.0.0.1:8000/api/question/question/getQuestion/?q_id=${id}`)
    },
    getAnswer(id,data){
        return axios.get(`http://127.0.0.1:8000/api/question/question/getAnswer/?id=${id}&user_answer=${data}`)
    }

}