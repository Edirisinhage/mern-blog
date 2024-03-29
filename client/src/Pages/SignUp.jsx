import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left column */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right column */}
        <div className='flex-1 '>
          <form action='submit' className='flex flex-col gap-4'>
            <div>
            <Label value='Your username'/>
            <TextInput type='text' placeholder='username' id='username'/>
            </div>
            <div>
            <Label value='Your email'/>
            <TextInput type='email' placeholder='email@gmail.com' id='email'/>
            </div>
            <div>
            <Label value='Your Password'/>
            <TextInput type='password' placeholder='password' id='password'/>
            </div>
            <Button type='submit' gradientDuoTone='purpleToPink'>
              Sign Up
            </Button>
          </form>
          <div className='flex flex-row gap-2 mt-3 text-sm'>
            <span>Have an account ?</span>
            <Link to='/sing-in' className='text-blue-500'>Sign in</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
