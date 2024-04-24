import Image from "next/image";
import Link from "next/link";
import React from "react"
export default function LoginForm() {
    return (
    <div className="pl-10 mt-6 h-screen py-20">
        <div className="flex justify-between ml-32">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
        </div>
      <div className=" flex justify-between">
      <div className=" w-[25%] h-[50%] ml-56 mt-20">
        <h1 className="">Login</h1>
        <form>
            <label className="input input-bordered flex items-center w-[100%] mt-3 ">
            <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center w-[100%] mt-5 ">
            <input type="text" className="grow" placeholder="***********" />
            </label>
            <div>
            <button type="submit" class="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700
             font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5">Sign in</button>
            <p class=" text-lm font-light text-gray dark:text-gray-400 mt-3">
                Don't have an account yet? <Link href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-700">Register</Link>
            </p>
            <div class="my-12 border-b text-center">
                <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  bg-white transform translate-y-1/2">
                      Continue With
                </div>
            </div>
            <label className="input input-bordered  flex items-center w-[100%] mt-5 ">
            <input type="text" className="grow text-center" placeholder="Google" />
            </label>
            </div>
        </form>
      </div>
      <div className=" w-[25%]  mr-32">
            <img src="/assets/icons/login.svg" alt="" />
        </div>
      </div>
      </div>
    )
}