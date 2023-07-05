import React from 'react'
import {useState} from 'react'
import axios from "axios"

const AddBooks = () => {
  const[Data,setData] = useState({
    name:"",
    author:"",
    description:"",
    image:"",
    price:""
  })

  const changeHandler = (e) => {
    const {name,value} = e.target;
    setData({...Data, [name]: value});
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API_URL)
    await axios.post(`${process.env.REACT_APP_API_URL}/add`, Data).then((res) => console.log(res.data.message));
    setData({
      name:"",
      author:"",
      description:"",
      image:"",
      price:""
    })
  }

  console.log(Data);

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{minHeight: "91.5vh"}}>
      <div className="container p-4">
        <div className="mb-3 ">
          <label className='form-label text-white'>
            Book Name
          </label>
          <input type="text" className='form-control' placeholder='Name of the Book.'
          name="name"
          value={Data.name}
          onChange={changeHandler} />
        </div>
        <div className="mb-3 ">
          <label className='form-label text-white'>
            Author's Name
          </label>
          <input type="text" className='form-control' placeholder='Name of Author.'
          name="author"
          value={Data.author}
          onChange={changeHandler} />
        </div>
        <div className="mb-3 ">
          <label className='form-label text-white'>
            Short Summary of the Book
          </label>
          <textarea className="form-control" rows="3" placeholder='Breif introduction about what book is.'
          name="description"
          value= {Data.description}
          onChange={changeHandler} ></textarea>
        </div>
        <div className="mb-3 ">
          <label className='form-label text-white'>
            Book's Cover Page
          </label>
          <input type="text" className='form-control' placeholder= "Enter the Url of Book's Cover"
          name="image"
          value={Data.image}
          onChange={changeHandler} />
        </div>
        <div className="mb-3 ">
          <label className='form-label text-white'>
            Price
          </label>
          <input type="number" className='form-control' placeholder='Enter the Price of book.'
          name="price"
          value={Data.price}
          onChange={changeHandler} />
        </div>
        <button className='btn btn-success' onClick={submitHandler}>
          Add Book
        </button>
      </div>   
    </div>
  )
}

export default AddBooks
