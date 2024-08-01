// "use client"
// import UserContext from '@/context/userContext'
// import { deleteUser } from '@/services/signup'
// import React, { useContext } from 'react'
// import toast from 'react-hot-toast'
// import { FiTrash2 } from "react-icons/fi"


// const DeleteUser = () => {

//     const context = useContext(UserContext)

//     const handleDeleteAccount =async()=>{
//         await deleteUser(context.user._id)
//         // console.log(context.user._id)
//         toast.success("User Deleted Successfully")
//         context.setUser(null)


        


//     }
//   return (
//     <>
//     <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
//       <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
//         <FiTrash2 className="text-3xl text-pink-200" />
//       </div>
//       <div className="flex flex-col space-y-2">
//         <h2 className="text-lg font-semibold text-richblack-5">
//           Delete Account
//         </h2>
//         <div className="w-3/5 text-pink-25">
//           <p>Would you like to delete account?</p>
//           <p>
//             This account may contain Paid Courses. Deleting your account is
//             permanent and will remove all the contain associated with it.
//           </p>
//         </div>
//         <button
//           type="button"
//           className="w-fit cursor-pointer italic text-pink-300"
//           onClick={handleDeleteAccount}
//         >
//           I want to delete my account.
//         </button>
//       </div>
//     </div>
//   </>
//   )
// }

// export default DeleteUser



"use client"
import UserContext from '@/context/userContext'
import { deleteUser } from '@/services/signup'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { FiTrash2 } from "react-icons/fi"

const DeleteUser = () => {
    const context = useContext(UserContext)
    const router = useRouter();

    const handleDeleteAccount = async () => {
        const confirmDeletion = confirm("Are you sure you want to delete your account? This action is irreversible.");
        if (!confirmDeletion) return;

        try {
            await deleteUser(context.user._id)
            toast.success("User Deleted Successfully")
            context.setUser(null)
            router.push('/')
        } catch (err) {
            toast.error("Failed to delete User. Please try again.")
        }
    }

    return (
        <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
            <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
                <FiTrash2 className="text-3xl text-pink-200" />
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-semibold text-richblack-5">
                    Delete Account
                </h2>
                <div className="w-3/5 text-pink-25">
                    <p>Would you like to delete your account?</p>
                    <p>
                        This account may contain Paid Courses. Deleting your account is
                        permanent and will remove all the content associated with it.
                    </p>
                </div>
                <button
                    type="button"
                    className="w-fit cursor-pointer italic text-pink-300"
                    onClick={handleDeleteAccount}
                >
                    I want to delete my account.
                </button>
            </div>
        </div>
    )
}

export default DeleteUser
