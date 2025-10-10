import * as yup from 'yup'; 

export const mailSchema = yup.object({
    full_name: yup.string().required('please enter your full name'),
    email: yup.string().email('please enter a vlaid email').required("please enter your email"),
    message: yup.string().required('please enter the message that you want to deliver.')
})