import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { menu } from "./SideBarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);

    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0 h-[100vh] border-r border-gray-200 bg-white">
      <div className="flex flex-col justify-between h-full px-8">

        {/* Top Section */}
        <div>
          {/* Instagram logo */}
          <div className="pt-10">
            <img
              className="w-36 hover:scale-105 transition-transform duration-300"
              src="https://i.imgur.com/zqpwkLQ.png"
              alt="Instagram"
            />
          </div>

          {/* Menu */}
          <div className="mt-12 space-y-1">
            {menu.map((item) => (
              <div
                key={item.title}
                onClick={() => handleTabClick(item.title)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                  transition-all duration-200
                  ${activeTab === item.title
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                  }
                `}
              >
                <span
                  className={`text-2xl transition-transform duration-200 ${activeTab === item.title ? "scale-110" : ""
                    }`}
                >
                  {activeTab === item.title
                    ? item.iactiveIcon
                    : item.Icon}
                </span>

                <p
                  className={`text-base tracking-wide ${activeTab === item.title
                      ? "font-bold"
                      : "font-medium"
                    }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom More */}
        <div className="flex items-center gap-4 px-4 py-3 mb-6 rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
          <IoReorderThree className="text-2xl" />
          <p className="text-base font-medium">More</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
