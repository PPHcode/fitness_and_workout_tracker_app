import React, { useState } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useSnackbar } from 'notistack';

const Create = () => {
  const [Id, setUsers] = useState('');
  const [Name, setName] = useState('');
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [Age, setAge] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const { enqueueSnackbar } = useSnackbar();

  const handleSaveUser = () => {
    const data = {
      Id,
      Name,
      Weight,
      Height,
      Age,
      Phone,
      Password,
      Email,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/users', data)
      .then(() => {
        setLoading(false);
      //  enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create User</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Id</label>
          <input
            type='text'
            value={Id}
            onChange={(e) => setUsers(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Weight</label>
          <input
            type='number'
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Height</label>
          <input
            type='number'
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Age</label>
          <input
            type='number'
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Phone</label>
          <input
            type='number'
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password</label>
          <input
            type='text'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUser}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Create
