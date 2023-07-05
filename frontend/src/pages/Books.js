import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
import BooksSection from '../components/BooksSection';
import Loader from '../components/Loader'


const Books = () => {
    //to show our data to our page
    const [Data,setData]= useState();
    useEffect(() => {
        const fetch = async () => {
            console.log(process.env.REACT_APP_API_URL)
            await axios.get((`${process.env.REACT_APP_API_URL}/getBooks`)).then((res) => setData(res.data.data));
            
        };
        fetch();
    },[])
  return (
    <div className="bg-dark" style={{minHeight: "91.5vh"}}>
        <div className="d-flex justify-content-center align-items-center py-3" >
            <h3 style={{fontSize: "50px"}}>Books Section</h3> 
        </div>     
        {Data ? (<div><BooksSection data={Data}/></div>) : (<div><Loader/></div>)}
    </div>
  )
}

export default Books
