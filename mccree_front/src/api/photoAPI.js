import axios from "axios";

export default{
    getphoto(id){
        return axios.get(`http://127.0.0.1:8000/api/question/question/${id}/`)
    },
    getQustion(id){
        return axios.get(`http://127.0.0.1:8000/api/question/question/?q_id=${id}`)
    },
    getAnswer(id,data){
        return axios.post(`http://127.0.0.1:8000/api/question/question/?id=${id}&user_answer=${data}`)
    }

}