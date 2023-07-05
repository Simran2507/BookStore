import { Link } from 'react-router-dom'
import './Home.css'
import React from 'react'

function Home(){
    return(
        <div className= "Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
            <div className="row container">
                <div className = "col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height: "91.5vh"}}>
                    <h2 style={{fontSize: "80px"}}>Book Store</h2>
                    <h3 style={{fontSize: "50px"}}>For You</h3>
                    <p className="mb-0" style={{color:"silver"}}>Checkout The Books From Here.</p>
                    <Link className="viewbook my-3" to="/books">View Books</Link>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{height: "91.5vh"}}>
                    <img className="img-fluid home-image" src="https://img.freepik.com/free-vector/bookshop-concept-illustration_114360-2694.jpg?w=740&t=st=1688290648~exp=1688291248~hmac=1fd751f4b0c9ceadbc8eb8c272c5ce5f78945ccd0cc4dbde3e30bc290f862153"></img>
                </div>

            </div>
        </div>
    )
}

export default Home
