import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import UserTable from '../Components/home/UserTable';
import UserDetails from '../Components/home/UserDetails';
import backgroundImage from '../images/img3.jpg'; 
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
const Home = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/users')
            .then((response) => {
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const handleLogout = () => {
        console.log("Logout button clicked"); // Add this line
        // Perform your logout logic here, for example, clearing user session, etc.
        // After performing the logout logic, navigate to the homepage
        navigate('/');
    };
    
    return (
        <div
            className='p bg-cover bg-center h-screen'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                opacity: 1,
            }}
        >
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg font-bold'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>

                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg font-bold'
                    onClick={() => setShowType('details')}
                >
                    Details
                </button>
            </div>
            
            <div onClick={handleLogout}>
            <IconButton aria-label="delete" size="large" disabled color="primary" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
      </div>

            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 font-bold'>Users List</h1>
                <Link to='/users/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl font-bold' />
                </Link>
            </div>

            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <UserTable users={users} />
            ) : (
                <UserDetails users={users} />
            )}
        </div>
    );
};

export default Home;
