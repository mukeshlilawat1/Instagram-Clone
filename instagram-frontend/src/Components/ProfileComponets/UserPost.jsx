import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark, BiRepost } from 'react-icons/bi'
import { RiVideoAddLine } from 'react-icons/ri'
import UserPosrCard from './UserPosrCard'

const UserPost = () => {
    const [activeTab, setActiveTab] = useState("Post")

    const tabs = [
        { tab: "Post", icon: <AiOutlineTable /> },
        { tab: "Reels", icon: <RiVideoAddLine /> },
        { tab: "Repost", icon: <BiRepost /> },
        { tab: "Saved", icon: <BiBookmark /> },
        { tab: "Tagged", icon: <AiOutlineUser /> }
    ]

    return (
        <div className="mt-6 w-full">

            {/* Tabs */}
            <div className="flex justify-center gap-24 border-t border-gray-200">
                {tabs.map((item) => (
                    <div
                        key={item.tab}
                        onClick={() => setActiveTab(item.tab)}
                        className={`
                            group flex items-center gap-3 py-4 cursor-pointer
                            transition-all duration-200
                            ${activeTab === item.tab
                                ? "border-t-2 border-black text-black -mt-[1px]"
                                : "text-gray-400 hover:text-black"
                            }
                        `}
                    >
                        <span className="text-xl group-hover:scale-110 transition">
                            {item.icon}
                        </span>

                        <span
                            className={`
                                text-sm uppercase tracking-wide
                                opacity-0 max-w-0 overflow-hidden
                                group-hover:opacity-100 group-hover:max-w-[80px]
                                transition-all duration-300
                                ${activeTab === item.tab ? "opacity-100 max-w-[80px] font-semibold" : ""}
                            `}
                        >
                            {item.tab}
                        </span>
                    </div>
                ))}
            </div>

            {/* Posts Grid (Instagram style: very small gap) */}
            <div className="mt-2">
                <div className="grid grid-cols-3 gap-[2px]">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <UserPosrCard key={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default UserPost
