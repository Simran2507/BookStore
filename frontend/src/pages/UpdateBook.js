import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
  //through this we fetched the id
  const { id } = useParams();
  const [data, setData] = useState({
    name: '',
    author: '',
    description: '',
    image: '',
    price: ""
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getBook/${id}`);
        const bookData = response.data.data;
        setData(bookData);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update/${id}`, data);
      console.log('Book updated successfully');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '91.5vh' }}>
      <div className="container p-4">
        <div className="mb-3">
          <label className="form-label text-white">Book Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name of the Book"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Author Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name of the Author"
            name="author"
            value={data.author}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Description of Book</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Brief introduction about the book"
            name="description"
            value={data.description}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the URL of the Book's Cover"
            name="image"
            value={data.image}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the Price of the Book"
            name="price"
            value={data.price}
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-success" onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
