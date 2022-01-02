import { useRef } from 'react'
import { loginCall } from '../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import {selectIsFetching} from '../../features/user/userSlice'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const isFetching = useSelector(selectIsFetching)

  const userEmail = useRef()
  const userPassword = useRef()
  const formSubmitHandler = (e) => {
    e.preventDefault()
    const userCreditails = {
      email: userEmail.current.value,
      password: userPassword.current.value,
    }
    dispatch(loginCall(userCreditails))
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
            className='loginBox p-5 bg-white rounded-lg flex flex-col justify-between h-96'
            onSubmit={formSubmitHandler}
          >
            <input
              type='email'
              placeholder='Email'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              ref={userEmail}
              required
            />
            <input
              type='password'
              placeholder='Password'
              className='loginInput h-12 rounded-lg border border-gray-500 text-lg pl-5 focus:outline-none'
              ref={userPassword}
              minLength={8}
              required
            />
            <button type='submit' disabled={isFetching} className='loginButton h-12 bg-blue-500 text-white cursor-pointer text-xl font-medium rounded-lg disabled:bg-gray-300'>
              {isFetching? <Loader /> : 'Login'}
            </button>
            <div className='loginForgot text-blue-500 text-center'>
              Forgot Password ?
            </div>
            <Link to='/register' className='w-full'>
              <button
                type='button'
                disabled={isFetching}
                className='loginRegisterButton h-12 bg-green-400 text-white cursor-pointer text-xl font-medium rounded-lg w-7/12 self-center disabled:bg-gray-300'
              >
                Create New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
