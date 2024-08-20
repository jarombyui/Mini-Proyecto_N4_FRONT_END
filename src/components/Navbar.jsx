import { useContext } from "react";
import { Authcontext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from '../images/devchallenges.svg';
import profile from '../images/profile.svg';
import user from '../images/user.svg';
import group from '../images/group.svg';
import logoutt from '../images/logout.svg';

const Navbar = () => {
    const { dataUser, logout, options, modal } = useContext(Authcontext);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/dashboard');
    };

    return (
        <nav className="absolute flex flex-row justify-between px-8 left-0 right-0">
            <img className="imgMode" src={logo} alt="devchallenges" />

            <section className="flex flex-row gap-2">
                <img 
                    className="rounded-lg" 
                    src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}` : profile} 
                    width={32} 
                    height={32} 
                    alt={dataUser?.name} 
                />
                <button 
                    onClick={options}
                    className="flex flex-row items-center gap-2 font-semibold">
                    {dataUser?.name}
                    <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-black"></div>
                </button>

                <section className={`${!modal ? 'hidden' : ''} absolute flex flex-col top-10 right-10 bg-white border-[1px] w-[9rem] p-4 gap-4 rounded-xl text-[#272626]`}>
                    <button className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center" onClick={handleProfileClick}>
                        <img src={user} alt="user" />
                        <span>My Profile</span>
                    </button>

                    <button className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center">
                        <img src={group} alt="group" />
                        <span>Group Chat</span>
                    </button>

                    <button onClick={logout} className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center">
                        <img src={logoutt} alt="logout" />
                        <span>Logout</span>
                    </button>
                </section>
            </section>
        </nav>
    );
};

export default Navbar;
