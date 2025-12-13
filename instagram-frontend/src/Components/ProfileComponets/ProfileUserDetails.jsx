import React from 'react'
import { TbCircle, TbCircleDashed } from 'react-icons/tb'

export const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center gap-10'>

                {/* Profile Image */}
                <div className='w-[15%] flex justify-center'>
                    <img
                        className='w-32 h-32 rounded-full object-cover ring-2 ring-gray-200 hover:scale-105 transition-transform duration-300'
                        src='https://cdn.pixabay.com/photo/2024/03/30/15/51/cat-8664948_1280.jpg'
                        alt=''
                    />
                </div>

                {/* User Info */}
                <div className='space-y-6'>

                    {/* Username Row */}
                    <div className='flex space-x-6 items-center'>
                        <p className='text-xl font-semibold'>Username</p>

                        <button className='px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition'>
                            Edit Profile
                        </button>

                        <TbCircleDashed className='text-2xl cursor-pointer hover:scale-110 transition' />
                    </div>

                    {/* Stats */}
                    <div className='flex space-x-10 text-sm'>
                        <div>
                            <span className='font-semibold mr-1'>10</span>
                            <span className='text-gray-600'>posts</span>
                        </div>

                        <div>
                            <span className='font-semibold mr-1'>55</span>
                            <span className='text-gray-600'>followers</span>
                        </div>

                        <div>
                            <span className='font-semibold mr-1'>5</span>
                            <span className='text-gray-600'>following</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className='max-w-xl'>
                        <p className='font-semibold'>Full Name</p>
                        <p className='text-sm text-gray-700 leading-relaxed'>
                            🚀 𝗦𝗽𝗮𝗰𝗲 𝘁𝗲𝗰𝗵 𝗮𝗳𝗶𝗰𝗶𝗼𝗻𝗮𝗱𝗼<br />
                            𝗧𝗶𝗺𝗲 𝘁𝗿𝗮𝘃𝗲𝗹𝗲𝗿 𝗶𝗻 𝘁𝗿𝗮𝗶𝗻𝗶𝗻𝗴 ⌛<br />
                            𝗤𝘂𝗮𝗻𝘁𝘂𝗺 𝗽𝗵𝘆𝘀𝗶𝗰𝘀 𝗵𝗼𝗯𝗯𝘆𝗶𝘀𝘁 🌌
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
