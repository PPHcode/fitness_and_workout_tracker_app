import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import {  BiUserCircle,BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeight } from '@fortawesome/free-solid-svg-icons';
import { GiBodyHeight } from 'react-icons/gi';
import { userState } from 'react';
import UserModel from './UserModel';

const SingleUser = ({ user }) => {
    const [showModal, setShowModal] = userState(false);
    return (
        <div key={user._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1'
        >
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {user.name}
            </h2>
            <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{user.weight}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{user.height}</h2>
            </div>

            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-black cursor pointer'
                    onClick={() => setShowModal(true)}
                >

                </BiShow>
                <Link to={`/users/view/${user._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>

                <Link to={`/users/edit/${user._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/users/delete/${user._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>


            </div>
            {showModal && (
                <UserModel user={user} onClose={() => setShowModal(false)}></UserModel>
            )}

        </div>
    )
}

export default SingleUser
