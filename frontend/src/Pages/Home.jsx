import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import UserTable from '../Components/home/UserTable';
import UserDetails from '../Components/home/UserDetails';




const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    //show as tables
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
    return (
        <div className='p'>
            <div className='background'>

                <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>

                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('details')}
                >
                    Details </button>


            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Users List</h1>
                <Link to='/users/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? 
                (<Spinner />)
             :  showType === 'table' ? (
                <UserTable users={users} />

            ): (
                <UserDetails users={users} />
              )}
        </div></div>
    );
};

export default Home
