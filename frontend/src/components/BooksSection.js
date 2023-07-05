
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const BooksSection = ({data}) => {

    const deleteHandler = async (id) => {
        try {
            console.log(id);
          await axios.delete(`http://localhost:4000/deleteBook/${id}`);
          console.log('Book deleted successfully');
        } catch (error) {
          console.error('Error deleting book:', error);
        }
      };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
        {data && data.map((item,index) => {
            return(
                <div style=
                {{width:"200px", 
                height:"370px",
                border: "1px solid white",
                margin:"3"}}>
                    <div >
                        <img style={{width:"200px", height:"230px"}}  className="img-fluid" src={item.image} alt="photus"/>
                    </div>
                    <h6 style={{fontSize:"16px"}} className='m-0 px-2'>{item.name}</h6>
                    <p className='m-0 px-2' style={{"color":"rgb(231, 225, 225"}}>  -{item.author}</p>
                    <b className='m-0 px-2 my-1' style={{fontSize: "30px"}}>Rs. {item.price}</b>
                    <div className="d-flex justify-content-between my-1 align=items-center">
                      <button className='p-1 m-2'>
                      <Link to={`/update/${item._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        Update
                      </Link>
                      </button> 
                      <button className='p-1 m-2' onClick={() => deleteHandler(item._id)}>Delete</button>
                    </div>
                </div>
            )
        })}      
    </div>
  )
}

export default BooksSection
