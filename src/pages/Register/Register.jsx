import { Link } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const userName = useRef()
  const userEmail = useRef()
  const userPassword = useRef()
  const userConfirmPassword = useRef()

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    if (userPassword.current.value !== userConfirmPassword.current.value) {
      userConfirmPassword.current.setCustomValidity("Password does't match")
    } else {
      const userInfo = {
        username: userName.current.value,
        email: userEmail.current.value,
        password: userPassword.current.value,
      }
      try {
        await axios.post('/auth/register',userInfo)
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='login w-screen h-screen bg-gray-100 flex items-center justify-center'>
      <div className='loginWrapper w-9/12 h-3/4 flex'>
        <div className='loginLeft flex flex-col justify-center flex-1 h-full'>
          <h4 className='loginLogo font-bold text-5xl text-blue-500'>
            Fb Clone
          </h4>
          <p className='loginDesc text-2xl'>
            Connect with freinds and the work around you on Fb Clone
          </p>
        </div>
        <div className='loginRight flex flex-col justify-center flex-1 h-full'>
          <form
            className='loginBox p-5 bg-white rounded-lg flex flex-col justify-between h-420'
            onSubmit={formSubmitHandler}
          >
            <input
              type='text'
              placeholder='User Name'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              required
              ref={userName}
            />
            <input
              type='email'
              placeholder='Email'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              required
              ref={userEmail}
            />
            <input
              type='password'
              placeholder='Password'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              required
              ref={userPassword}
              minLength={8}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              required
              ref={userConfirmPassword}
              minLength={8}
            />
            <button
              type='submit'
              className='loginButton h-12 bg-blue-500 text-white cursor-pointer text-xl font-medium rounded-lg'
            >
              Sign Up
            </button>
            <Link to='/login' className='inline-block'>
              <button className='loginRegisterButton h-12 bg-green-400 text-white cursor-pointer text-xl font-medium rounded-lg w-7/12 self-center'>
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
