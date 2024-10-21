// import { SignupForm } from "@/Interface/login";
// import Api from "@/services/axios";
// import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";


// const router = useRouter();

// export const signupUser = () =>{
//    return  useMutation({
//         mutationFn: async (datas: SignupForm) => {
//           const response = await Api.post('/user/signup', datas); 
//           return response.data;
//         },
//         onSuccess: () => {
//           toast.success('Signup successful!');
//           router.push('/login'); // Redirect after successful signup
//         },
//         onError: (error: any) => {
//           console.log('ooooooo',error);
          
//           // toast.error(error.response?.data?.message || 'Something went wrong!');
//         }
//       });
    
// }


import { useMutation } from "@tanstack/react-query";
import { SignupForm } from "@/Interface/login";
import Api from "@/services/axios";
import { toast } from "react-toastify";

export const useSignup = () => {

  return useMutation({
    mutationFn: async (datas: SignupForm) => {
      const response = await Api.post('/user/signup', datas);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Signup successful!');
    },
    onError: (error: any) => {
      console.error('Signup error', error);
    },
  });
};
