'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const  LoginForm = () => {
  const router = useRouter()
  //defind hander login
  async function handlelogin(userInfo){
    
    //define structure object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password")
    }
    //calling next auth service and passing"newUserInfo"
    console.log("hello")
    const res = await signIn('credentials',{
      redirect: false,
      ...newUserInfo,
    });
    if(res.ok){
      router.push("/todo-list");
    }
  }
  return (
    <div className="pl-10 mt-6 h-screen py-20">
        <div className="flex justify-between ml-32">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
        </div>
      <div className=" flex justify-between">
      <div className=" w-[25%] h-[50%] ml-56 mt-20">
        <h1 className="">Login</h1>
        <form action={handlelogin}>
            <label className="input input-bordered flex items-center w-[100%] mt-3 ">
            <input type="email" name="email" id="email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center w-[100%] mt-5 ">
            <input type="password" name="password" id="password" className="grow" placeholder="******" />
            </label>
            <div>
            <button type="submit" class="w-full bg-blue-700 text-white bg-primary-600 hover:bg-blue-600
             font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5">Sign in</button>
            <p class=" text-lm font-light text-gray dark:text-gray-400 mt-3">
                Don't have an account yet? <Link href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-700">Register</Link>
            </p>
            <div class="my-12 border-b text-center">
                <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  bg-white transform translate-y-1/2">
                      Continue With
                </div>
            </div>
            <label className="input input-bordered  flex items-center w-[100%] mt-5 ">
            <input type="google" className="grow text-center" placeholder="Google" />
            </label>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs mt-10 text-gray">
                    &copy;2020 Acme Corp. All rights reserved.
          </p>
      </div>
      <div className=" w-[25%]  mr-32">
            <img src="/assets/icons/login.svg" alt="" />
        </div>
      </div>
      </div>
  )
}

export default LoginForm