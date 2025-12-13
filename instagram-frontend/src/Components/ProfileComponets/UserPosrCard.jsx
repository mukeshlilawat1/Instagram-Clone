import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./UserPosrCard.css";

const UserPosrCard = () => {
    return (
        <div className="relative aspect-square overflow-hidden cursor-pointer post-wrapper">

            <img
                className="w-full h-full object-cover post-image"
                src="https://cdn.pixabay.com/photo/2025/11/26/06/44/pop-up-9977611_1280.jpg"
                alt="post"
            />

            <div className="overlay">
                <div className="overlay-text">
                    <div className="flex items-center gap-1">
                        <AiFillHeart />
                        <span>10</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaComment />
                        <span>5</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserPosrCard;
