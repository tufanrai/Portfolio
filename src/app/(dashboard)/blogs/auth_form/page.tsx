import Header from "@/src/components/Cards/HeaderCard";
import ListCard from "@/src/components/Cards/ListCard";
import ParagraphCard from "@/src/components/Cards/ParagraphCard";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const page = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden flex justify-center">
      <div className="max-w-[1280px] w-full h-screen px-6 py-8">
        <Header
          headerType="prime"
          content="Login/Registration form - MERN Stack"
        />
        <br />
        <ParagraphCard
          paragraph={`In this tutorial you will learn how login and signup works behind the
          scene as we will develop a production ready login and registration
          form using MERN Stack. We will be using mongoDb as our database and
          Express.js as our server. We will use “jsonwebtoken”
          package to generate a access token and “bcryptjs”
          package to hash password before stroing it into the database. The main
          objective of this tutorial is to make you understand how does json web
          token generation works and hashing works and also why are they used.`}
        />
        <br />
        <Header headerType="tri" content="Pre-requisites" />
        <ListCard
          contents={[
            "Node.js and npm installed",
            "MongoDb initialised for storing user's data",
          ]}
        />
        <br />
        <ParagraphCard paragraph="Here is a small asmr tutorial on how to build login and registration page. From here you will be able to build the UI of the form and the only extra thing you will have to work on is to add the api connection part." />
        <br />
        <Header headerType="sec" content="Setting up the Project" />
        <br />
        <ListCard
          contents={[
            "Create a repository for the project and inside the repository create another two different folders - client for the frontend and server for the backend.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            children={`
mkdir login_register_mern
cd login_register_mern 
mkdir client server
            `}
            language="bash"
          />
        </div>
        <br />
        <Header headerType="tri" content="Backend" />
        <ListCard
          contents={[
            "On the server folder initialise node.js app and typescript",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            children={`
npm init -y
npm i typescript
npx tsc -init
            `}
            language="bash"
          />
        </div>
        <br />
        <ListCard contents={["install package and dev-dependencies"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
npm i express mongoose dotenv cors bcryptjs jasonwebtoken
npm i -D @types/express @types/bcryptjs @types/jsonwebtoken ts-node-dev
              `}
          />
        </div>
        <br />
        <ListCard contents={["update package.json and tsconfig.json files"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="json"
            children={`
// in package.json file 
"style" : {
    "build" : "tsc",
    "start" : "node dist/server.js",
    "dev" : "ts-node-dev --transipile-only --respawn src/server.ts"
}
 // in tsconfig.json file
 "rootDir" : "./src",
 "outDir" : "./dist"
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Create .env file on the roote directory ( server ) to store sensetive and important urls.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
touch .env
              `}
          />
        </div>
        <br />
        <ListCard contents={["Store all the sensetive urls on .env file"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
PORT = 5001 

DB_URL = ''

JWT_SECRET_KEY = "DoNotShare"
JWT_EXPIRY_DATE = '30d'
              `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Inside server folder create a src folder and inside it create some essential folders along with a server file.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
mkdir src && cd src
touch server.ts
mkdir config controller model router utils
              `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Server setup" />
        <br />
        <ListCard
          contents={[
            "Initialise app, connect the routes and database. ( src/server.ts )",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './router/authRouter';
import { dbConfig } from './config/dbconfig';

// import ting the root url's from .env file
const PORT = porcess.env.PORT ?? 8000;
const uri = porcess.env.DB_URI ?? '';

// initialising app  
const app = express();

// connecting the server with database
dbConfig(uri);

// using middlewares
app.use(cors({
origin: '*',
}));
app.use(express.urlencoded());
app.use(express.json());


// using the routes
app.use('/api/auth', authRouter);

app.listen(port, () => console.log('server started on port: 5001'));
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Database configuration" />
        <br />
        <ListCard
          contents={[
            "connect your server with the database. ( src/config/dbConfig.ts )",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import mongoose from 'mongoose';

// function that connects server with the database. 
export const dbConfig = (uri: string) => {
	mongoose.connect(uri)
	.then(() => console.log('server connected to database successfuly'))
	.catch(err => console.log(err));
};
          `}
          />
        </div>
        <br />
        <ListCard contents={["Create a user model. ( model/user.mode.ts )"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	full_name: {
		type: String,
		required: [true, 'please enter your full name']
	},
	email: {
		type: String,
		required: [true, 'please enter your email']
	},
	password: {
		type: String,
		required: [true, 'please enter your password']
	},
	}, { timestamps: true });
	
	const User = model('users', UserSchema);
	export default User;
            `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Helping components/Utils" />
        <br />
        <ListCard
          contents={[
            "Create helping components like asyncHandler, errorHandler, token generator and password hasher.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd utils 
touch asyncHandler.ts errorHandler.ts jwt.utils.ts bcryptjs.utils.ts
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Inside asyncHandler.ts file create async handler function",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import { Request, Response, NextFunction, RequestHandler } from 'express';

type Handler = (req: Request, res: Response, next: NextFunciton) => Promise<any>;

// async handler function
export const asyncHandler = (fun: Handler) : RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fun(req,res,next)).catch(err => next(err));
	};
};
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Create custom error handler file inside the file errorHandler.ts",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
class errorHandler extends Error {
	statusCode : number;
	status: 'success' | 'fail' | 'error';
	success: boolean 
	
	constructor (message: string, statusCode: number) {
		super(message)
		this.statusCode = statusCode
    this.status = statusCode >= 400 && statusCode < 500? 'fail' : 'error'
    this.success = false 
    Error.captureStackTrace(this, errorHandler);
	};
};

export default errorHandler;
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Create a token generator and verifiyer on the jwt.utils.ts file",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import jwt from 'jsonwebtoken';

const jwtSecretKey = process.env.JWT_SECRET_KEY ?? 'Shhh'; // This is the secret key which is used for token generation and decoding of token
const jwtExpiryDate = process.env.JWT_EXPIRY_DATE ?? '30d'; // This is the expiry date of the token, when the token exceds this time the generated token won't work so that for new token user have to login again.

// token generator function
export const generateToken = (data: IPayload) => {
	const token = jwt.sign(data, jwtSecretKey, { expiresIn: jwtExpiryDate as any });
	return token;
};

// verify token 
export const verifyToken = (token: string) => {
	return jwt.verify(token, jwtSecretKey) as jwt.JwtPayload;
};
          `}
          />
        </div>
        <ParagraphCard
          paragraph={
            "“jsonwebtoken” is one of the package that is used to generate as it’s name says ‘JSON web token’. This token comes in hand when ever you login to a site, close the site and visit it again after few hours. The generated token when you first loged in will automatically logs in for you such that the second visit to site is direct to your dashaboard."
          }
        />
        <br />
        <ListCard
          contents={[
            "create a password hasher and verifyier in bcryptjs.utils.ts file",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import bcryptjs from 'bcryptjs';

// hash password 
export const hashPassword = async (password: string) => {
	const Salt = await bcryptjs.genSalt(12); // you can generate salt of any number but usually number between 10 - 15 are prefered.
	const hashedPassword = bcryptjs.hash(password, Salt);
	return hashedPassword; // returns a hashed password
};

// verify password
export const verifyPassword = ( password: string, hash: string ) => {
	return bcryptjs.compare(password, hash); // returns a boolean value
};
          `}
          />
        </div>
        <ParagraphCard paragraph="“bcryptjs” is another package which is basically used to hash any kind of sensitive datas ( password, contact info and many more ) of user before storing into a database. " />
        <br />
        <Header headerType="sec" content="Controllers" />
        <br />
        <ListCard
          contents={[
            "create a file auth.controller.ts in the controller folder",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import errorHandler from '../utils/errorHandler';
import User from '../model/UserSchema';
import { hashPassword, verifyPassword } from '../utils/bcryptjs.utils';
import { generateToken } from '../utils/jwt.utils';


// register new user 
export const newRegister = asyncHandler( async (req: Request, res: Response) => {
	const {password, ...data} = req.body; // we receive the datas from body of request
	
	if(!data) { // returns error if all the required datas are not filled
		throw new errorHandler('please enter all the required details', 406);
	};
	
	const hashedPassword = await hashPassword(password); // the function returns hashed password
	
	if(!hashedPassowrd) { // If any problem occures while returning hashed password throws an error
		throw new errorHandler('something went wrong, please try again', 500);
	};
	
	const user = await User.create({ password: hashedPassword, ...data}); // creats new user data on the database storing all the user input data and hashed password insted of the actual password
	
	res.status(200).json({ // returns a success response to the client 
		message: 'user successfuly registered', 
		data: user,
		status: 'success',
		success: true,
	});
};

// login user 
export const loginUser = asyncHandler( async (req: Request, res: Response) => {
	const { email, password } = req.body; // receiving email and password from the body of request
	
	if(!email){ // throws an error if email is not typed
		throw new errorHandler('please enter your email', 406);
	};
	if(!password) { // throws an error if password is not typed
		throw new errorHandler('please enter your password', 406);
	};
	
	const user = await User.findOne({email}); // finds user from the database using typed email

  if(!user) {
        throw new errorHandler('user does not exists', 404);
  };
	
	const verifiedPassword = verifyPassword(password, user.password); // checks for the password and returns boolean value
	
	
	if(!verifiedPassword) { // if the password is false, returns an error
		 throw new errorHandler('either password or email is incorrect', 406);
	};
	
	const accessToken = generateToken({ // this function generats JSON web token for easy access
		full_name: user.full_name,
		email: user.email,
		password: user.password
	});
	
	if(! accessToken) { // if any problem comes while token generation throws an error 
		throw new errorHandler('something went wrong please try again, 500);
	};
	
	res.status(200).json({ // sends success response along with the access token
		message: 'user successfuly loged in',
		data: user,
		status: 'success',
		success: true,
		accessTokne,
	});
};
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Router" />
        <br />
        <ListCard
          contents={["Create auth.router.ts file to rout your controllers."]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import { Router } from 'express';
import { newRegister, loginUser } from '../controller/auth.controllers';

const authRouter = Router();

authRouter.post('/register', newRegister);
authRouter.post('/login', loginUser);

export default authRouter;
              `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Frontend work" />
        <br />
        <ListCard
          contents={["Go to client folder and initilise new next app"]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd client && npx create-next-app@latest .
// After this it will ask you questions answer them as per your requirenent if writing the code then just press enter and continue
          `}
          />
        </div>
        <br />
        <ListCard contents={["install essential packages"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
npm i react-hot-toast react-icons @tanstack/query react-hook-form @hookform/resolver yup axios
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Create a folder named components inside app folder and again inside component folder create 3 folders (schema, interface and cards)",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd app && mkdir components
cd components && mkdir cards schema interface
              `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "create two files inside cards ( LoginCard.tsx & RegisterCard.tsx)",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd cards && touch LoginCard.tsx RegisterCard.tsx
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Login card component" />
        <br />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { CiLock, CiUnlock } from "react-icons/ci";
import { ILogin } from "../interface/form.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/form.schema";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { LoginUser } from "@/app/api/form.api";

const LoginCard = () => {
  const { mutate } = useMutation({
    mutationFn: LoginUser,
    mutationKey: ["newUser"],
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const sendData = (data: ILogin) => {
    mutate(data);
  };
  return (
    <div className="max-w-100 w-full rounded-md shadow-lg/30 bg-white p-4 flex flex-col items-center justify-center gap-8">
      <h1 className="w-full font-bold text-xl text-center text-black/70">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col items-start justify-center gap-4"
      >
        <div className="w-full px-2 relative">
          <CiMail className="absolute right-4 top-2 font-bold text-xl text-black" />
          <input
            type="text"
            placeholder="e-mail"
            {...register("email")}
            className="w-full font-md text-md pl-3 pr-8 py-1 rounded-sm outline-none border border-zinc-500/32 text-black"
          />
          {errors && errors.email ? (
            <p className="w-full text-thin text-end text-red-500 text-sm">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 relative">
          <CiUnlock className="absolute right-4 top-2 font-bold text-xl text-black cursor-pointer" />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            className="w-full font-md text-md pl-3 pr-8 py-1 rounded-sm outline-none border border-zinc-500/32 text-black"
          />
          {errors && errors.password ? (
            <p className="w-full text-thin text-end text-red-500 text-sm">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 mt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-sm font-medium text-md hover:bg-blue-500 hover:text-white ease duration-300 border border-blue bg-white text-blue-500 py-2"
          >
            Login
          </button>
        </div>
      </form>
      <hr className="w-full h-[1px] bg-zinc-800" />
      <p className="w-full text-center font-medium text-sm text-black">
        Don&apos;t have an account?{" "}
        <Link
          className="font-medium text-sm text-blue-500"
          href={"/auth/register"}
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Register card component" />
        <br />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema/form.schema";
import { IRegister } from "../interface/form.interface";
import { CiMail, CiUnlock } from "react-icons/ci";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { RegisterUser } from "@/app/api/form.api";
import toast from "react-hot-toast";

const RegisterCard = () => {
  const { mutate } = useMutation({
    mutationFn: RegisterUser,
    mutationKey: ["NewUser"],
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const sendData = (data: IRegister) => {
    mutate(data);
  };
  return (
    <div className="max-w-100 w-full rounded-md shadow-lg/30 bg-white p-4 flex flex-col items-center justify-center gap-8">
      <h1 className="w-full font-bold text-xl text-center text-black/70">
        Register
      </h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col items-start justify-center gap-4"
      >
        <div className="w-full px-2 relative">
          <CiMail className="absolute right-4 top-2 font-bold text-xl text-black" />
          <input
            type="text"
            placeholder="e-mail"
            {...register("email")}
            className="w-full font-md text-md pl-3 pr-8 py-1 rounded-sm outline-none border border-zinc-500/32 text-black"
          />
          {errors && errors.email ? (
            <p className="w-full text-thin text-end text-red-500 text-sm">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 relative">
          <CiUnlock className="absolute right-4 top-2 font-bold text-xl text-black cursor-pointer" />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            className="w-full font-md text-md pl-3 pr-8 py-1 rounded-sm outline-none border border-zinc-500/32 text-black"
          />
          {errors && errors.password ? (
            <p className="w-full text-thin text-end text-red-500 text-sm">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 relative">
          <CiUnlock className="absolute right-4 top-2 font-bold text-xl text-black cursor-pointer" />
          <input
            type="password"
            placeholder="confirm password"
            {...register("c_password")}
            className="w-full font-md text-md pl-3 pr-8 py-1 rounded-sm outline-none border border-zinc-500/32 text-black"
          />
          {errors && errors.c_password ? (
            <p className="w-full text-thin text-end text-red-500 text-sm">
              {errors.c_password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 mt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center cursor-pointer rounded-sm font-medium text-md hover:bg-blue-500 hover:text-white ease duration-300 border border-blue bg-white text-blue-500 py-2"
          >
            Sign up
          </button>
        </div>
      </form>
      <hr className="w-full h-[1px] bg-zinc-800" />
      <p className="w-full text-center font-medium text-sm text-black">
        Already have an account?{" "}
        <Link
          className="font-medium text-sm text-blue-500"
          href={"/auth/login"}
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterCard;
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Schema" />
        <br />
        <ListCard
          contents={[
            "Insied schema folder create a file named form.schema.ts, here we will define the schema of login and register form.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
imoprt * as yup from 'yup';

// Login schema 
export const loginSchema = yup.object({
	email: yup.string().email('please enter a valid email').required('please enter your email'),
	password: yup.string().required('please enter your password'),
});

// register new user 
export const registerSchema = yup.object({
	full_name: yup.string().required('please enter your full name'),
	email: yup.string().emai('please enter a valid email').required('please enter your email'),
	password: yup.string().required('please enter the password').min(8, 'your password must be atleast of 8 characters').matches(/\d+$/, 'your password must contain atleast one digit'),
	c_password: yup.string().required('please re-enter the password').oneof([yup.ref('password')], 'password did not matched'),
});
            `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Interface" />
        <br />
        <ListCard
          contents={[
            "Inside the interface folder create a file form.interface.ts  where we will define the interface of the login and registration form.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
// login form interface 
export interface ILogin {
	email: string,
	password: string,
};

// registration form interface
export interface IRegister {
	full_name: string,
	email: string,
	password: string,
};
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Assemble them all" />
        <br />
        <ParagraphCard paragraph="Finally after creating all of those components, go to app folder then create a folder named auth and again inside the auth folder create two folder login and register. " />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd app && mkdir auth
cd auth && mkdir login register
          `}
          />
        </div>
        <ParagraphCard paragraph="Again create a file named page.tsx in both of the file." />
        <br />
        <ListCard contents={["../login/page.tsx"]} />
        <div>
          <SyntaxHighlighter
            language="typescript"
            children={`
import React from 'react';
import LoginCard from '@/components/cards/LoginCard';

const page = () => {
	return (
		<div className="w-full h-screen flex items-cetner justify-center">
			<LoginCard/>
		</div>
	);
};
          `}
          />
        </div>
        <br />
        <ListCard contents={["../register/page.tsx"]} />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import React from 'react';
import RegisterCard from '@/components/cards/RegisterCard';
import page from '../../page';

const page = () => {
	return (
		<div calssName="w-full h-screen flex items-center justify-center"> 
			<RegisterCard/>
		</div>
	);
};
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Backend Connection" />
        <br />
        <ParagraphCard paragraph="Lastly create an api folder inside app folder and create a file named form.api.ts" />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
cd ../
mkdir api 
cd api && touch form.api.ts
open form.api.ts
          `}
          />
        </div>
        <br />
        <ListCard
          contents={[
            "Create axios instance and connect frontend with backend.",
          ]}
        />
        <div className="w-full px-2 md:px-8">
          <SyntaxHighlighter
            language="typescript"
            children={`
import axios from 'axios';
import { ILogin, IResigster } from '@/components/interface/form.interface';

// axios instance 
const axiosInstance = axios.create({
	baseURL = 'http://localhost:port/api/auth'
});


// login form connection 
export const LoginUser = async (data: ILogin) => {
	try{
		const response = await axiosInstance.post('/login', data);
		return response.message;
	} catch (err: any) {
		return err.message;
	};
};
	
// register form connection 
export const RegisterUser = async (data: IRegister) => {
	try{
		const response = await axiosInstance.post('/register', data);
		return response.message;
	} catch (err: any) {
		return err.message;
	};
};
          `}
          />
        </div>
        <br />
        <Header headerType="sec" content="Conclusion" />
        <ParagraphCard paragraph="With this you have successfully completed building production ready login/registration form and you also might have understood how all the social medias and other applications keep record of your accounts. Thank you for giving your valuable time to read my blog. After this if still you have some doubts regarding this project, your have certain part that you are still confused about then please feel free to contact me or mail me i’ll be explaining it clearly to you guys. " />
        <Link
          className="w-full font-thin text-md md:text-lg text-blue-500 underline"
          href={"https://login-registration-form-client-nu.vercel.app"}
        >
          {" "}
          click here to check the demo!
        </Link>
      </div>
    </div>
  );
};

export default page;
