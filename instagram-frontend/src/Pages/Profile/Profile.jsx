import React from 'react'
import { ProfileUserDetails } from '../../Components/ProfileComponets/ProfileUserDetails'
import UserPost from '../../Components/ProfileComponets/UserPost'

const Profile = () => {
    return (
        <div className="flex w-full">

            {/* Main Profile Content */}
            <div className="flex-1 px-20">

                <ProfileUserDetails />

                <UserPost />

            </div>
        </div>
    )
}

export default Profile
