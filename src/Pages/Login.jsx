import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../images/devchallenges.svg'
import mail from '../images/mail.svg'
import lock from '../images/lock.svg'
import Google from '../images/Google.svg'
import Facebook from '../images/Facebook.svg'
import Twitter from '../images/Twitter.svg'
import Github from '../images/Github.svg'
import Footer from '../components/Footer'

export const Login = () => {
  const { Login } = useContext(Authcontext)

  const handleLogin = async function (e) {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    await Login.mutateAsync(data)
  }

  return (
      <div className='flex flex-col sm:w-full h-screen sm:w-1w sm:mx-auto justify-center items-center '>
        <section className='flex flex-col gap-4 sm:border-[1px] p-8 rounded-3xl ' >
          <figure className='px-6'>
            <img className='imgMode' src={logo} alt="devchallenges" />
          </figure>
          <h2 className='px-6 font-semibold'>Login</h2>

          <form onSubmit={handleLogin} className='flex flex-col gap-4 w-full px-6'>

            <section className='flex flex-row min-w-[20rem] min-h-[3rem] gap-4 pl-4 pr-6 items-center border-[1px] rounded-md'>
              <img src={mail} alt="mail" />
              <input className=' outline-none  ' placeholder='Email' id='email' name='email' type="email" required />
            </section>

            <section className='flex flex-row  min-w-[20rem] min-h-[3rem] gap-4 pl-4 pr-6 items-center border-[1px] rounded-md'>
              <img src={lock} alt="lock" />
              <input className=' outline-none' placeholder='Password' id='password' name='password' type="password" required />
            </section>

            <button className='bg-[#2F80ED]  font-semibold text-center  text-white rounded-md  min-w-[20rem] min-h-[2.5rem]' type='submit' >Login</button>
          </form>
          <section className='flex flex-col gap-4 items-center'>
            <h3 className='text-[#828282]'>or continue with these social profile</h3>

            <figure className='flex flex-row gap-4'>
              <img src={Google} alt="Google" />
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Github} alt="Gihub" />
            </figure>
            <h3 className='text-[#828282]'>Don't have an account yet? <Link className='text-[#47A9E0]' to='/register'>Register</Link> </h3>
          </section>
        </section>
        <Footer />
      </div>
  )
}