import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import BackGroundImg from "../../../components/BackGroundImg";
import { RectLogoIcon, Spinner } from "../../../components/icons";
import ErrorMsg from "../../../components/ErrorMsg";
import bg from '../../../assets/doctor-sign-in.jpg'
import { doctorSpecialization } from "../../../utils/doctorSpecialization";
import { middleEasternCountries } from "../../../utils/middleEasternCountries";

const DoctorSignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/auth/doctor/sign-up', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                country: formData.country,
                phone: formData.phone,
                specialization: formData.specialization
            })
            toast.success(data.message)
            navigate('/');
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
                        <div className='bg-white-White p-10 w-[350px] sm:w-[450px] md:w-[500px] space-y-5'>
                            <div className='space-y-3'>
                                <h3 className='text-4xl font-bold'>Sign Up</h3>
                                <div>
                                    Already here?&nbsp;
                                    <Link className='text-blue-500 underline' to={'/sign-in'}>Sign in</Link>
                                </div>
                            </div>
                            <div className='space-y-3 pb-5'>
                                <div>
                                    <input
                                        placeholder='Full name'
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('name', { required: "Please enter name field" })}
                                        type="name"
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
                                        placeholder='Phone'
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('phone', { required: "Please enter phone field" })}
                                        type="phone"
                                    />
                                    <ErrorMsg message={errors?.phone?.message} />
                                </div>
                                <div>
                                    <select
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('country', { required: "Please enter country field" })}
                                    >
                                        <option className="" value="">Country</option>
                                        {
                                            middleEasternCountries.map((item) =>
                                                <option value={item} key={item}>{item}</option>
                                            )
                                        }
                                    </select>
                                    <ErrorMsg message={errors?.country?.message} />
                                </div>
                                <div>
                                    <select
                                        className='border w-full py-3 px-2 outline-none focus:border-primary-blue'
                                        {...register('specialization', { required: "Please enter specialization field" })}
                                    >
                                        <option value="">Specialization</option>
                                        {
                                            doctorSpecialization.map((item) =>
                                                <option value={item} key={item}>{item}</option>
                                            )
                                        }
                                    </select>
                                    <ErrorMsg message={errors?.specialization?.message} />
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

export default DoctorSignUp