import React, { useEffect, useState } from 'react'
import axios from 'axios'
import spinner from '../Components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';




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
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Users List</h1>
                    <Link to='/users/create'>
                        <MdOutlineAddBox className='text-sky-800 text-4xl' />
                    </Link>
                </div></div>
            {loading ? (
                <spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Name</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Height</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Weight</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Age</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Phone</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Password</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Email</th>
                            <th className='border border-slate-600 rounded-md '>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                                <td className='border border-slate-700 rounded-md text-center'>{user.name}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.height}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.weight}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.age}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.phone}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.password}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{user.email}</td>
                                <td className='border border-slate-700 rounded-md text-center '>

                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={'/users/view/${user._id}'}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={'/users/edit/${user._id}'}>
                                            <AiOutlineEdit className='text-2xl text-yellow-800' />
                                        </Link>
                                        <Link to={'/users/delete/${user._id}'}>
                                            <MdOutlineDelete className='text-2xl text-yellow-800' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>

                        )
                        )}
                    </tbody>
                </table>

            )}
        </div>
    );
};

export default Home
