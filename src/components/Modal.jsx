import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
function Modal() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => console.log(data)
  return (
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">

    <div class="modal-action flex flex-col justify-center mt-0">
    <form className="card-body  " onSubmit={handleSubmit(onSubmit)} method='dialog'>
        <h3 className='font-bold text-lg'>Login!</h3>
        <div className="form-control">
         
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  {...register("email")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required   {...register("password")}/>
          <label className="label mt-1">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Login' className="btn bg-green" />
        </div>
        <p className='text-center my-2'>Do not have an account ? <Link to='/signup' className='underline text-red ml-1'>Signup</Link></p>
      </form>

      <div className='text-center space-x-6 mb-1'>
        <button ><FaGoogle/></button>
        <button><FaFacebook/></button>
        <button><FaGithub/></button>
   
      </div>
    </div>
  </div>
</dialog>
  )
}

export default Modal