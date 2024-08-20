import { useContext } from "react";
import { Authcontext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import profile from '../images/profile.svg'
import camera from '../images/camera.svg'
import Navbar from "../components/Navbar";


export const EditUser = () => {
  const navigate = useNavigate()
  const { dataUser, edit, options, modal, logout } = useContext(Authcontext)

  async function handleEdit(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target)

    await edit.mutateAsync(dataForm)
  }

  return (
    <>
      <div className="relative w-[5] h-1 mt-5"><Navbar /></div>
      <div className="relative w-full h-screen p-4 mt-20">
        <section className="flex flex-col sm:w-[65%] h-full mx-auto justify-center">
          <section className="text-star text-[#2D9CDB] pb-4">
            <button>{'<'} <Link to={'/dashboard'}>Back</Link></button>
          </section>

          <section className="sm:border-[1px] rounded-3xl">
            <section className="sm:px-12 px-8 flex flex-row justify-between items-center py-4">
              <div className="flex flex-col">
                <h2 className="font-semibold  text-[1.5rem]">Change info</h2>
                <span>Changes will be reflected to every services</span>
              </div>
            </section>

            <form onSubmit={handleEdit} className='flex flex-col  gap-4 '>

              <figure className="relative sm:px-12 flex flex-row items-center py-4 text-[#828282]">
                <img className="absolute -z-1 sm:left-12 rounded-lg" src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}` : profile} alt={dataUser?.name} width={65} />
                <label className="flex z-0 pl-[1.7rem] flex-row items-center gap-8 cursor-pointer" htmlFor='photo'><span className="px-12 py-2 font-semibold">CHANGE PHOTO </span></label>
                <input className='hidden' id='photo' name='photo' type="file" />
              </figure>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='name'> Name: </label>
                <input className='border-[1px] px-4 max-w-[26.5rem] h-[3.25rem] border-[#828282] rounded-xl' id='name' placeholder="Enter your name..." name='name' defaultValue={dataUser.name} type="text" />
              </section>

              <section className="sm:px-12 grid grid-rows ">
                <label className="font-semibold" htmlFor='biography'> Biography: </label>
                <textarea className='flex border-[1px] px-4 py-2 max-w-[26.5rem] h-[5.75rem] border-[#828282] rounded-xl' id='biography' placeholder="Enter your bio..." name='biography' defaultValue={dataUser.biography} type="text" />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='phone'> Phone: </label>
                <input className='border-[1px]  px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='phone' placeholder="Enter your phone..." name='phone' defaultValue={dataUser.phone} type="text" />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='email'> Email: </label>
                <input className='border-[1px] px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='email' placeholder="Enter your email..." name='email' defaultValue={dataUser.email} type="email" />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='password'> Password: </label>
                <input className='border-[1px] px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='password' placeholder="Enter your new password..." name='password' defaultValue={dataUser.password} type="password" />
              </section>
              <section className="sm:px-12 pb-8 grid grid-rows items-center" >
                <button className='bg-[#2F80ED] w-[5.2rem] h-[2.5rem] rounded-lg text-white' type='submit' >Save</button>
              </section>
            </form>
          </section>
        </section>
      </div>
    </>
  )
}
