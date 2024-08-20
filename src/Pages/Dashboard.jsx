import { useContext } from "react";
import { Authcontext } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import profiles from  '../images/profile.svg'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Dashboard = () => {
    const navigate = useNavigate()

    const { dataUser, logout, isLoading, isError, options, modal } = useContext(Authcontext)

    if (isLoading) {
        return <div>Loading info...</div>
    }
    if (isError) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className="relative w-full h-screen py-4 sm:p-4 ">
            <Navbar/>
            <section className="flex flex-col sm:w-[65%] h-full mx-auto justify-center">
                <section className="text-center pb-8">
                    <h1 className="font-semibold text-[2.3rem]">Personal info</h1>
                    <p>Basic info, like your name and photo</p>
                </section>
                <section className="sm:border-[1px] rounded-3xl">
                    <section className="border-b-[1px] px-12 flex flex-row gap-[3rem] sm:flex sm:flex-row sm:justify-between items-center py-4">
                        <div className="flex flex-col">
                            <h2 className="font-semibold  text-[1.5rem]">Profile</h2>
                            <span>Some info may be visible to other people</span>
                        </div>
                        <button className="border-[1px] rounded-xl h-[2.4rem] w-[6rem]" onClick={() => { navigate('/edit') }} > Edit</button>
                    </section>
                    <figure className="border-b-[1px] px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-5">
                        <h2 className="text-[#BDBDBD] text-[16px]">PHOTO</h2>
                        <img className="rounded-lg " src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}` : profiles} alt={dataUser?.name} width={72} height={72} />
                    </figure>
                    <section className="border-b-[1px] px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">NAME</h2>
                        <h2 className="font-semibold">{dataUser?.name}</h2>
                    </section>
                    <section className="border-b-[1px] px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">BIO</h2>
                        <h2 className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{dataUser?.biography}</h2>
                    </section>
                    <section className="border-b-[1px] px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">PHONE</h2>
                        <h2 className="font-semibold">{dataUser?.phone}</h2>
                    </section>
                    <section className="border-b-[1px] px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">EMAIL</h2>
                        <h2 className="font-semibold">{dataUser?.email}</h2>
                    </section>
                    <section className=" px-12 flex flex-row justify-between sm:grid sm:grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">PASSWORD</h2>
                        <h2 className="font-semibold">**********</h2>
                    </section>
                </section>
                <Footer/>
            </section> 
        </div>
        
    )
}
