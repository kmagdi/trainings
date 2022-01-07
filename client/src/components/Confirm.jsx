import React,{useEffect,useState} from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


export const Confirm=()=>{
    const [status,setStatus]=useState(0)
    const { token } = useParams();
    const notify = () => toast("ok?");

    console.log("confirm:",token)
    const url=`http://localhost:5000/confirm?token=${token}`
    useEffect(() => {
        axios.get(url).then((response)=>{
            console.log("response:",response.data[0].nr)
            setStatus(response.data[0].nr)
            notify()
        })
    })
    return(
        <div>
           
           <ToastContainer />
            <Link to="/"></Link>
        </div>
    )
}