import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/Signup.png'
import BackGroundImg from '../components/BackGroundImg'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ErrorMsg from '../components/ErrorMsg'
import { RectLogoIcon, Spinner } from '../components/icons'
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/auth/user/sign-up', {
                email: formData.email,
                password: formData.password,
                name: formData.name
            })
            toast.success(data.message)
            navigate('/home');
            window.location.reload();
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <BackGroundImg bg={bg}>
            <div className='w-full h-full flex justify-center items-center md:justify-between'>
                <div className='hidden md:flex flex-col items-center justify-center gap-5'>
                    <Link to={'/'}>
                        <RectLogoIcon className={""} />
                    </Link>
                    <div>
                        <span className='text-white-White text-lg'>
                            Sign Up
                        </span>
                    </div>
                </div>
                <div className=''>
                    <form onSubmit={onSubmit} >
                        <div className='bg-white-White p-14 w-[350px] sm:w-[450px] md:w-[500px] space-y-5'>
                            <div className='space-y-3'>
                                <h3 className='text-4xl font-bold'>Sign Up</h3>
                                <div>
                                    Already here?&nbsp;
                                    <Link className='text-blue-500 underline' to={'/sign-in'}>Sign in</Link>
                                </div>
                            </div>
                            <div className='space-y-5 pb-14'>
                                <div>
                                    <input
                                        placeholder='Full name'
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('name', { required: "Please enter Name field" })}
                                        type="text"
                                    />
                                    <ErrorMsg message={errors?.name?.message} />
                                </div>
                                <div>
                                    <input
                                        placeholder='Email'
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('email', { required: "Please enter Email field" })}
                                        type="email"
                                    />
                                    <ErrorMsg message={errors?.email?.message} />
                                </div>
                                <div>
                                    <input
                                        placeholder='Password'
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('password', { required: "Please enter Password field" })}
                                        type="password"
                                    />
                                    <ErrorMsg message={errors?.password?.message} />
                                </div>
                                <button
                                    disabled={loading}
                                    className='bg-primary-blue disabled:bg-black-black/30 w-full py-3 text-white-White font-semibold flex items-center justify-center'>
                                    {loading ? <Spinner className={'animate-spin'} /> : "Sign Up"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </BackGroundImg>
    )
}

export default SignUp