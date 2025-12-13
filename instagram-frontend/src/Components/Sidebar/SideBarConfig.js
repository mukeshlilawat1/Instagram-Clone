
import {
    AiFillCompass, AiFillHeart, AiFillMessage,
    AiFillPlusCircle, AiOutlineCompass,
    AiOutlineHeart, AiOutlineHome, AiOutlineMessage,
    AiOutlinePlusCircle, AiOutlineSearch
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";

export const menu = [
    { title: "Home", Icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>, iactiveIcon: <AiOutlineHome></AiOutlineHome> },
    { title: "Search", Icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>, iactiveIcon: <AiOutlineSearch></AiOutlineSearch> },
    { title: "Explore", Icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>, iactiveIcon: <AiFillCompass></AiFillCompass> },
    { title: "Reels", Icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>, iactiveIcon: <RiVideoFill></RiVideoFill> },
    { title: "Message", Icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>, iactiveIcon: <AiFillMessage></AiFillMessage> },
    { title: "Notification", Icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>, iactiveIcon: <AiFillHeart></AiFillHeart> },
    { title: "Create", Icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>, iactiveIcon: <AiFillPlusCircle></AiFillPlusCircle> },
    {  title: "Profile", Icon: <CgProfile className="text-2xl mr-5"></CgProfile>,iactiveIcon: <CgProfile></CgProfile> }

]

