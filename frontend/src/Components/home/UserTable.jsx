import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const UserTable = ({users}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>Id</th>
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
                                <td className='border border-slate-700 rounded-md text-center '>{user.height}</td>
                                <td className='border border-slate-700 rounded-md text-center '>{user.weight}</td>
                                <td className='border border-slate-700 rounded-md text-center '>{user.age}</td>
                                <td className='border border-slate-700 rounded-md text-center '>{user.phone}</td>
                                <td className='border border-slate-700 rounded-md text-center '>{user.password}</td>
                                <td className='border border-slate-700 rounded-md text-center '>{user.email}</td>
                                <td className='border border-slate-700 rounded-md text-center '>

                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/users/view/${user._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/users/edit/${user._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-800' />
                                        </Link>
                                        <Link to={`/users/delete/${user._id}`}>
                                            <MdOutlineDelete className='text-2xl text-yellow-800' />
                                        </Link>


                                    </div>
                                </td>
                            </tr>

                        )
                        )}
                    </tbody>
                </table>
  )
}

export default UserTable