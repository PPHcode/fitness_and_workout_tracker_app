import React, { useState } from 'react'
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import backgroundImage from '../images/img7.jpeg'; 


const Create = () => {
  const [Id, setId] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveUser = () => {
    const data = {
      Id,
      name,
      weight,
      height,
      age,
      phone,
      password,
      email
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/users', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('User Created successfully', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div
            className='p-4 bg-cover bg-center h-screen'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                height: '150vh',
                opacity: 1,
            }}
        >
    
      <BackButton />
      <h1 className='text-3xl my-4 font-bold'>Create User</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Id</label>
          <input
            type='text'
            value={Id}
            onChange={(e) => setId(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-blue'>Weight(kg)</label>
          <input
            type='number'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Height(inches)</label>
          <input
            type='number'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Age</label>
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Phone</label>
          <input
            type='number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          </div>
          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 text-black'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-black-00 px-4 py-2  w-full '
          />
           </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUser}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Create
