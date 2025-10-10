import Header from "@/src/components/Cards/HeaderCard";
import ListCard from "@/src/components/Cards/ListCard";
import ParagraphCard from "@/src/components/Cards/ParagraphCard";
import { Sunflower } from "next/font/google";
import Link from "next/link";
import React from "react";
import { LiaStackExchange } from "react-icons/lia";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const page = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden flex justify-center">
      <div className="max-w-[1280px] w-full h-screen px-6 py-8">
        <Header headerType="prime" content="Simple Note Taking App - MERN" />
        <br />
        <ParagraphCard paragraph="In this tutorial we will be building a super simple note taking app usign MERN Stack. We will be using Next.js for the frontend, MongoDb atlas for the database, Node.js/Express.js for the backend and typescript for the type safety. Our goal for this project is to understand the CRUD (Create, Read, Update and Delete) operation, see how frontend talks to backend and how we can keep our references and commands clean, tidy and consistent." />
        <br />
        <Header headerType="tri" content="Pre-requisites" />
        <ListCard
          contents={[
            "Node.js and npm installed",
            "A MongoDb Atlas cluster",
            "A code editor installed",
          ]}
        />
        <br />
        <br />
        <Header headerType="sec" content="Project setup" />
        <br />
        <ListCard contents={["Create the project folder"]} />
        <SyntaxHighlighter
          language="bash"
          children={`mkdir Note_Taking_App && cd Note_Taking_App`}
        />
        <ListCard
          contents={["Create separate folder for client and server "]}
        />
        <SyntaxHighlighter language="bash" children={`mkdir client server`} />
        <br />
        <br />
        <Header headerType="sec" content="BackendSetup" />
        <br />
        <ListCard
          contents={["From now on, we work inside the server folder."]}
        />
        <SyntaxHighlighter language="bash" children={`cd server`} />
        <ListCard contents={["Intall TypeScript and initialise config."]} />
        <SyntaxHighlighter
          language="bash"
          children={`npm init -y
npm i typescript
npx tsc --init`}
        />
        <ListCard contents={["Install dependencies."]} />
        <SyntaxHighlighter
          language="bash"
          children={`npm i express mongoose cors dotenv bcrypt jsonwebtoken
npm i -D @types/express @types/cors @types/bcrypt @types/jsonwebtoken ts-node-dev`}
        />
        <ListCard contents={["Add script and basic TS output config"]} />
        <SyntaxHighlighter
          language="json"
          children={`// package.json
{
	"scripts": {
		"build": "tsc",
		"start": "node dist/server.js",
		"dev": "ts-node-dev --respawn --transpile-only src/server.ts"
	}
}`}
        />
        <SyntaxHighlighter
          language="json"
          children={`// tsconfig.json (ensure these are set)
{
	"rootDir": "./src",
	"outDir": "./dist"
}`}
        />
        <ListCard contents={["Create a .env file for secrets."]} />
        <SyntaxHighlighter language="bash" children={`touch .env`} />
        <SyntaxHighlighter
          language="javascript"
          children={`# .env
PORT=5001
DB_URI="<your-mongodb-connection-string>"
JWT_SECRET_KEY="<random-long-secret>"
JWT_EXPIRY_DATE="30d"`}
        />
        <br />
        <div className="w-full rounded-md bg-stone-600 px-5 py-2">
          <p className="font-medium text-md text-neutral-100">
            🧹 Replace placeholders with your own values. If you previously
            shared secrets, rotate them immediately.
          </p>
        </div>
        <br />
        <br />
        <Header headerType="sec" content="Source structure" />
        <br />
        <ListCard
          contents={[
            "Create the root src and some folders to keep things organised",
          ]}
        />
        <SyntaxHighlighter
          language="bash"
          children={`mkdir -p src/{controller,router,middleware,model,interface,types,utils,config}`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Server entry" />
        <br />
        <ListCard contents={["Create src/server.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./router/auth.router";
import userRouter from "./router/user.router";
import noteRouter from "./router/note.router";
import dbConfig from "./config/database.config";
import { customError } from "./utils/errorHandler";

const port = process.env.PORT ?? 8000;
const uri = process.env.DB_URI ?? "";

const app = express();
dbConfig(uri);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", noteRouter);
app.use(customError);

app.listen(port, () => console.log('server started on port: 5001 🚀'));
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Interface" />
        <br />
        <ListCard contents={["Create src/interface/payloads.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import mongoose from "mongoose";

export interface IPayload {
  _id: mongoose.Types.ObjectId;
  full_name: string;
  email: string;
  password: string;
  birth: string;
}

export interface IUser {
  userId: mongoose.Types.ObjectId;
  full_name: string;
  email: string;
}
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Model" />
        <br />
        <ListCard contents={["Create src/model/user.model.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "please enter your full name"],
    },
    birth: {
      type: String,
      required: [true, "please enter your birth"],
    },
    email: {
      type: String,
      required: [true, "please entre your email"],
      unique: [true, "user with this email exists"],
    },
    password: {
      type: String,
      required: [true, "please enter passowrd"],
    },
  },
  { timestamps: true }
);

const Users = model("user", UserSchema);
export default Users;
`}
        />
        <ListCard contents={["Create src/model/note.model.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import mongoose, { Schema, model } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "please give a title to your note"],
      default: "Untitled",
    },
    note: {
      type: String,
      required: [true, "please enter the notes that you want to store"],
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "please enter the user's id"],
      ref: "user",
    },
  },
  { timestamps: true }
);

const Notes = model("note", NoteSchema);
export default Notes;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Configuration" />
        <br />
        <ListCard contents={["Create src/config/db.config.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import mongoose from "mongoose";

const dbConfig = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log("server connected to database successfuly 💾"))
    .catch((err) => console.log(err));
};

export default dbConfig;`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Utilities/Helpingcomponents" />
        <br />
        <ListCard contents={["Create src/utils/errorHandler.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response, NextFunction } from "express";

class errorHandler extends Error {
  statusCode: number;
  status: "success" | "fail" | "error";
  success: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.success = false;

    Error.captureStackTrace(this, errorHandler);
  }
}

export const customError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "server side error";
  const status = err.status || "error";
  const success = err.success || false;
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    statusCode,
    message,
    status,
    success,
  });
};

export default errorHandler;
`}
        />
        <ListCard contents={["Create src/utils/asyncHandler.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response, NextFunction, RequestHandler } from "express";

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler = (fun: Handler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fun(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
`}
        />
        <ListCard contents={["Create src/utils/jwt.utils.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import jwt, { JwtPayload } from "jsonwebtoken";
import { IPayload } from "../interface/interfaces";

const secretKey = process.env.JWT_SECRET_KEY ?? "Shhh";
const expiryDate = process.env.JWT_EXPIRY_DATE ?? "30d";

// generate token
export const generateToken = (user: IPayload) => {
  const token = jwt.sign(user, secretKey, { expiresIn: expiryDate as any });
  return token;
};

// verify token
export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, secretKey) as JwtPayload;
};
`}
        />
        <ListCard contents={["Create src/utils/bcrypt.utils.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import bcrypt from "bcrypt";

// hash passowrd
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(15);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

// verify password
export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Middleware" />
        <br />
        <ListCard contents={["Create src/middleware/authMiddleware.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response, NextFunction } from "express";
import errorHandler from "../utils/errorHandler";
import { verifyToken } from "../utils/jwt.utils";

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rawToken = req.headers["authorization"];

    if (!rawToken) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    if (rawToken && !rawToken.startsWith("BEARER")) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    const refinedToken = rawToken.split(" ")[1];

    if (!refinedToken) {
      throw new errorHandler("unauthorized access, access denied", 406);
    }

    const validToken = verifyToken(refinedToken);

    if (!validToken) {
      throw new errorHandler("token expired please login again", 406);
    }

    if (validToken.exp && validToken.exp > Date.now()) {
      throw new errorHandler("token expired please login again", 406);
    }

    console.log(validToken._id);

    req.user = {
      userId: validToken._id,
      full_name: validToken.full_name,
      email: validToken.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

export default authenticateUser;`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Types" />
        <br />
        <ListCard contents={["Create src/types/global.d.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { IUser } from "../interface/interfaces";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Controller" />
        <br />
        <ListCard contents={["Create src/controller/auth.controller.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";
import { hashPassword, verifyPassword } from "../utils/bcrypt.utils";
import { generateToken } from "../utils/jwt.utils";

// register new user
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { password, ...data } = req.body;

    if (!password) {
      throw new errorHandler("Please enter your passsword", 406);
    }
    if (!data) {
      throw new errorHandler("Please enter all the required data", 406);
    }

    const hashedPassword = await hashPassword(password);

    const user = await Users.create({ password: hashedPassword, ...data });

    res.status(200).json({
      message: "user created successfuly",
      data: user,
      status: "success",
      success: true,
    });
  }
);

// log user
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    throw new errorHandler("please enter your email", 406);
  }
  if (!password) {
    throw new errorHandler("please enter your password", 406);
  }

  const user = await Users.findOne({ email });

  if (!user) {
    throw new errorHandler("user does not exists", 404);
  }

  const validPassword = await verifyPassword(password, user.password);

  if (!validPassword) {
    throw new errorHandler("either password or email is incorrect", 406);
  }

  const accessToken = generateToken({
    _id: user._id,
    full_name: user.full_name,
    email: user.email,
    password: user.password,
    birth: user.birth,
  });

  res.status(200).json({
    message: "user successfuly loged in",
    data: user,
    status: "success",
    success: true,
    accessToken,
  });
});
`}
        />
        <ListCard contents={["Create src/controller/user.controller.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";
import { DayContext } from '../../../../utils/Providor/Context';

// get all the details of the user
export const getUserData = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw new errorHandler("please pass the user's id", 406);
  }

  const user = await Users.findOne({ _id: id });

  if (!user) {
    throw new errorHandler("user not found", 404);
  }

  res.status(200).json({
    message: "user's data found",
    data: user,
    status: "success",
    success: true,
  });
});

// update user's data
export const updateUserData = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    if (!id) {
      throw new errorHandler("please enter the user's id", 406);
    }

    const user = await Users.findById(id);

    if (!user) {
      throw new errorHandler("user not found", 404);
    }

    if (data.full_name) user.full_name = data.full_name;
    if (data.email) user.email = data.email;
    if (data.password) user.password = data.password;

    const updatedUser = user.save({ validateModifiedOnly: true });

    res.status(200).json({
      message: "user's data updated successfuly",
      data: updatedUser,
      status: "success",
      success: true,
    });
  }
);

// remove user's data
export const removeUserData = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params;

    if (!id) {
      throw new errorHandler("please enter the user's id", 406);
    }

    const user = await Users.findByIdAndDelete(id);

    if (!user) {
      throw new errorHandler("user does not exists", 404);
    }

    res.status(200).json({
      message: "user's data removed successfuly",
      data: user,
      status: "success",
      success: true,
    });
  }
);
`}
        />
        <ListCard contents={["Create src/controller/note.controller.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";
import Notes from "../model/note.model";

// create note
export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const data = req.body;

  if (!userId) {
    throw new errorHandler("please pass user's id", 406);
  }

  if (!data) {
    throw new errorHandler("please enter all the required data", 406);
  }

  const note = await Notes.create({ userId: userId, ...data });

  res.status(200).json({
    message: "note successifuly created",
    data: note,
    status: "success",
    success: true,
  });
});

// get all notes
export const getAllNotes = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;

  const notes = await Notes.find({ userId: userId });

  if (!notes) {
    throw new errorHandler("you do not have any notes", 404);
  }

  res.status(200).json({
    message: "notes fetched successfuly",
    data: notes,
    status: "success",
    success: true,
  });
});

// get specific note
export const specificNote = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.user;
    const { id } = req.params;

    console.log("this is a specific note id", id);

    if (!id) {
      throw new errorHandler("please enter the note id", 406);
    }

    const note = await Notes.findOne({ _id: id });
    console.log(note);

    if (!note) {
      throw new errorHandler("not not found", 404);
    }

    res.status(200).json({
      message: "note fetchend successfuly",
      data: note,
      status: "success",
      success: true,
    });
  }
);

// update note
export const updateNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { id } = req.params;
  const data = req.body;

  if (!id) {
    throw new errorHandler("please enter the note id", 406);
  }

  const note = await Notes.findById({ _id: id });

  if (!note) {
    throw new errorHandler("not not found", 404);
  }

  if (data.title) note.title = data.title;
  if (data.note) note.note = data.note;

  const updatedNote = note.save({ validateModifiedOnly: true });

  res.status(200).json({
    message: "note fetchend successfuly",
    data: updatedNote,
    status: "success",
    success: true,
  });
});

// remove note
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { id } = req.params;

  if (!id) {
    throw new errorHandler("please enter the note id ", 406);
  }

  const note = await Notes.findOneAndDelete({ _id: id, userId: userId });

  res.status(200).json({
    message: "note successfuly removed",
    data: note,
    status: "success",
    success: true,
  });
});
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Router" />
        <br />
        <ListCard contents={["Create src/router/auth.router.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Router } from "express";
import { registerUser, loginUser } from "../controller/auth.controller";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
`}
        />
        <ListCard contents={["Create src/router/user.router.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Router } from "express";
import {
  getUserData,
  updateUserData,
  removeUserData,
} from "../controller/user.controller";
import authenticateUser from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.get("/:id", authenticateUser, getUserData);
userRouter.put("/:id", authenticateUser, updateUserData);
userRouter.delete("/:id", authenticateUser, removeUserData);

export default userRouter;
`}
        />
        <ListCard contents={["Create src/router/note.router.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import { Router } from "express";
import {
  createNote,
  getAllNotes,
  specificNote,
  updateNote,
  deleteNote,
} from "../controller/notes.controller";
import authenticateUser from "../middleware/auth.middleware";

const noteRouter = Router();

noteRouter.post("/", authenticateUser, createNote);
noteRouter.get("/", authenticateUser, getAllNotes);
noteRouter.get("/:id", authenticateUser, specificNote);
noteRouter.put("/:id", authenticateUser, updateNote);
noteRouter.delete("/:id", authenticateUser, deleteNote);

export default noteRouter;
`}
        />
        <br />
        <ParagraphCard paragraph="With this our server side code is completed. Now we move towards the client side coding." />
        <br />
        <Header headerType="sec" content="Frontend setup" />
        <br />
        <ListCard
          contents={[
            "Now it is the time to work on the client side of the web application.",
          ]}
        />
        <SyntaxHighlighter language="bash" children="cd client" />
        <ListCard contents={["Initialise next.js app inside the folder."]} />
        <SyntaxHighlighter
          language="bash"
          children="npx create-next-app@latest . // once you enter this code you will be asked certain questions you can just keep on entering default answers of the querstions."
        />
        <ListCard contents={["Install dependencies"]} />
        <SyntaxHighlighter
          language="bash"
          children={`npm i react-icons react-hot-toast react-hook-form @hookform/resolvers yup 
@tanstack/react-query axios && npm i -D @tanstack/eslint-plugin-query
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Source structure" />
        <br />
        <ListCard
          contents={[
            "Create the root folder src and some other folders to keep the codes organised",
          ]}
        />
        <SyntaxHighlighter
          language="bash"
          children={`mkdir -p src/{app/{"(dashboard)",api,auth/{login,register},components}`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Components" />
        <br />
        <ListCard
          contents={[
            "First we will create all the components then at last we will combine them all. Thus, go to components folder and create some essential components.",
          ]}
        />
        <SyntaxHighlighter
          language="bash"
          children={`mkdir -p components/{cards,dashboard,interface,schema,provider,navigation}`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Cards" />
        <br />
        <ListCard contents={["Create components/cards/LoginCard.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ILog } from "../interface/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schema/authForm.schema";
import { useMutation } from "@tanstack/react-query";
import { logUser } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LuEye, LuEyeClosed, LuMail } from "react-icons/lu";

const LoginCard = () => {
  // initialising router to rout user from login to dashboard on success.
  const router = useRouter();

  const [seePassword, setSeePassword] = useState<boolean>(false);

  //  mutating the data received from the login form on the client to the server.
  const { mutate, isPending } = useMutation({
    mutationFn: logUser,
    mutationKey: ["validateUser"],
    onSuccess: (data) => {
      toast.success(data.message);
      Cookies.set("ticket", data.accessToken);
      Cookies.set("userId", data.data._id);
      Cookies.set("name", data?.data?.full_name);
      setTimeout(() => {
        reset();
        router.replace("/");
      }, 3000);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // validating the proper inputs on the login form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // function that mutates login form data to the backend
  const sendData = (data: ILog) => {
    mutate(data);
  };
  return (
    <div className="max-w-110 w-full flex flex-col items-center justify-center gap-4 rounded-md shadow-lg/50 bg-neutral-100 shadow-blue-400 py-6 px-4">
      <h1 className="font-semibold text-xl text-stone-700">Login</h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col mt-2 gap-4"
      >
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">E-mail</label>
          <div className="w-full relative">
            <LuMail className="absolute top-2 right-4 font-bold text-lg text-stone-800" />
            <input
              type="text"
              {...register("email")}
              placeholder="demomail@gmail.com"
              className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
            />
          </div>
          {errors && errors.email ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">Password</label>
          <div className="w-full relative">
            {seePassword && seePassword ? (
              <>
                <LuEye
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            ) : (
              <>
                <LuEyeClosed
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            )}
          </div>
          {errors && errors.password ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={"w-full px-5 py-2 flex $ {isPending ? "cursor-not-allowed" : "cursor-pointer"} items-center justify-center font-medium text-md text-stone-800 bg-blue-300 rounded-sm ease duration-300 hover:bg-blue-400"}
          >
            Login
          </button>
        </div>
      </form>
      <hr className="w-full border-neutral-300 h-[2px] mt-3 mb-1" />
      <p className="font-medium text-sm text-stone-600 mb-8 mt-3">
        Don&apos;t have an account?{" "}
        <Link href={"/auth/register"}>
          <b>Register</b>
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
`}
        />
        <ListCard contents={["Create components/cards/NewNote.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { NoteSchema } from "../schema/noteForm.schema";
import { INote } from "../interface/interfaces";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const NewNote = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    mutationKey: ["newNote"],
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["fetchNotes"] });
      setTimeout(() => {
        reset();
        router.replace("/");
      }, 1000);
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
    resolver: yupResolver(NoteSchema),
  });

  const createNewNote = (data: INote) => {
    mutate(data);
  };
  return (
    <div className="max-w-150 w-full rounded-md shadow-lg/30 shadow-blue-400 px-5 py-4">
      <form
        onSubmit={handleSubmit(createNewNote)}
        className="w-full flex flex-col items-start justify-center gap-4"
      >
        <div className="w-full px-2 flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-lg italic text-blue-400">
            Title
          </label>
          <input
            type="text"
            placeholder="API's"
            {...register("title")}
            className="w-full rounded-sm font-semibold text-md text-stone-800 px-5 py-2 outline-none inset-shadow-xs/30 inset-shadow-blue-500 shadow-blue-400 shadow-xs/30"
          />
          {errors && errors ? (
            <p className="w-full font-medium text-sm text-end text-red-500">
              {errors.title?.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-2 flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-lg italic text-blue-400">
            Note
          </label>
          <textarea
            rows={10}
            cols={30}
            {...register("note")}
            placeholder="APIs (Application Programming Interfaces) are sets of rules and protocols that enable different software applications to communicate and share data with each other. They act as intermediaries that allow developers to integrate external services and functionality into their own applications without needing to understand the underlying code. From web services and mobile apps to cloud platforms and IoT devices, APIs power modern digital experiences by enabling seamless connectivity between diverse systems and technologies."
            className="w-full rounded-sm font-normal text-md text-stone-800 px-5 py-2 outline-none inset-shadow-xs/30 inset-shadow-blue-500 shadow-blue-400 shadow-xs/30"
          />
        </div>
        <div className="w-full py-2 flex items-center justify-end gap-4">
          <Link href={"/"}>
            <button
              type="reset"
              disabled={isPending}
              className={"w-22 px-5 py-2 flex items-center justify-center rounded-sm shadow-sm/30 $ {  isPending ? "cursor-not-allowed" : "cursor-pointer" } font-normal text-md text-neutral-100 ease duration-300 bg-rose-400 hover:bg-rose-500"}
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className={"w-22 px-5 py-2 flex items-center justify-center rounded-sm shadow-sm/30 $ { isPending ? "cursor-not-allowed" : "cursor-pointer"} font-normal text-md text-neutral-100 ease duration-300 bg-blue-400 hover:bg-blue-500"}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
`}
        />
        <ListCard contents={["Create components/cards/NoteCard.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React from "react";

interface IProps {
  title?: string;
  note?: string;
  updatedDate?: string;
}

const NoteCard = ({ title, note, updatedDate }: IProps) => {
  return (
    <div className="max-w-68 h-50 overflow-hidden rounded-md shadow-sm/30 shadow-blue-500 relative">
      <div className="w-full p-5 flex flex-col items-start justify-center gap-4">
        <h3 className="font-semibold text-lg italic text-stone-800">{title}</h3>
        <p className="max-h-14 h-screen overflow-hidden font-normal text-sm md:text-md text-stone-700">
          {note}
        </p>
      </div>
      <div className="w-full bg-blue-200 flex items-center justify-start px-5 py-2 absolute bottom-0">
        <span className="font-thin text-sm text-neutral-100">
          {updatedDate}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
`}
        />
        <ListCard contents={["Create components/cards/ProfileCard.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  fetchUserData,
  removeUserData,
  updateUserData,
} from "@/app/api/apiUrls";
import { IRegister, IUser } from "../interface/interfaces";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema, UpdateUser } from "../schema/authForm.schema";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileCard = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const endPoint = Cookies.get("userId") ?? "";
  const queryUpate = useQueryClient();
  const router = useRouter();

  // fetch user's data
  const { data, error } = useQuery({
    queryKey: ["fetchUserData"],
    queryFn: fetchUserData,
  });

  // mutate new datas
  const { mutate, isPending } = useMutation({
    mutationFn: updateUserData,
    mutationKey: ["updateUser"],
    onSuccess: (data) => {
      toast.success(data?.message);
      queryUpate.invalidateQueries({ queryKey: ["fetchUserData"] });
      console.log(data);
      setTimeout(() => {
        setEdit(!edit);
        window.location.reload();
      }, 500);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  // validate inputs
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(UpdateUser),
  });

  // data fetching function
  const sendUpdatedData = (data: IUser) => {
    mutate({
      endPoint,
      full_name: data.full_name,
      email: data.email,
    });
  };

  // remove note
  const deleteData = () => {
    removeUserData(endPoint);
    toast.success("note deleted successfuly", { duration: 1000 });
    Cookies.remove("ticket");
    Cookies.remove("userId");
    setTimeout(() => {
      toast.error("token expired, please login");
      router.replace("/auth/login");
    }, 1000);
  };

  return (
    <div className="max-w-110 w-full md:rounded-md md:shadow-sm/30 p-6">
      <h1 className="font-bold text-xl italic text-stone-600">Profile</h1>
      <div className="w-full flex items-center justify-end gap-2 px-4 py-1">
        <Link
          className="mr-auto cursor-pointer ease duration-200 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-200 hover:bg-neutral-300"
          href={"/setting"}
        >
          <IoChevronBackSharp className=" font-black text-lg text-stone-800" />
        </Link>
        <button
          onClick={() => setEdit(!edit)}
          className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
        >
          <MdOutlineEdit />
        </button>
        <button
          onClick={() => deleteData}
          className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 cursor-pointer ease duration-200 hover:bg-rose-400"
        >
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="rounded-full w-15 h-15 flex items-center justify-center bg-stone-400 overflow-hidden">
          <FaUserLarge className="font-black text-3xl text-stone-600" />
        </div>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(sendUpdatedData)}
          className="w-full flex flex-col items-start justify-center gap-1 mt-4 px-2"
        >
          {edit && edit ? (
            <input
              type="text"
              {...register("full_name")}
              defaultValue={data?.data?.full_name}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.full_name}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <input
              type="text"
              {...register("email")}
              defaultValue={data?.data?.email}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.email}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <input
              type="date"
              {...register("birth")}
              defaultValue={data?.data?.birth}
              className="font-medium text-md text-stone-800/50 px-5 py-2 w-full shadow-xs/30 inset-shadow-xs/30 outline-none"
            />
          ) : (
            <>
              <span className="font-medium text-md text-stone-800/50 px-5 py-2">
                {data?.data?.birth}
              </span>
              <hr className="w-full h-1 border-neutral-300" />
            </>
          )}
          {edit && edit ? (
            <div className="w-full flex items-center justify-end gap-4 px-5 py-2">
              <button
                type="reset"
                onClick={() => setEdit(!edit)}
                className="font-medium text-sm text-stone-800 bg-rose-400 ease duration-300 hover:bg-rose-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className={"font-medium text-sm text-stone-800 bg-blue-400 ease duration-300 hover:bg-blue-500 $ { isPending ? "cursor-not-allowed" : "cursor-pointer" } flex items-center justify-center rounded-md px-5 py-2"}
              >
                Update
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
`}
        />
        <ListCard contents={["Create components/cards/RegisterCard.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IRegister } from "../interface/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../schema/authForm.schema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/api/apiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  LuEye,
  LuEyeClosed,
  LuMail,
  LuUser,
  LuCalendarDays,
  LuLock,
} from "react-icons/lu";

const LoginCard = () => {
  // initialising router to rout user to login form once the user is registered successfuly.
  const router = useRouter();

  const [seePassword, setSeePassword] = useState<boolean>(false);

  // mutating the registration data received from the client to backend.
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    mutationKey: ["registerNewUser"],
    onSuccess: () => {
      router.replace("/auth/login");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  // validating the proper inpust on the registration form.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  // function that mutates the registration data to the backend.
  const sendData = (data: IRegister) => {
    mutate(data);
  };
  return (
    <div className="max-w-110 w-full flex flex-col items-center justify-center gap-4 bg-neutral-100 rounded-md shadow-lg/50 shadow-blue-400 py-6 px-4">
      <h1 className="font-semibold text-xl text-stone-700">Register</h1>
      <form
        onSubmit={handleSubmit(sendData)}
        className="w-full flex flex-col mt-2 gap-4"
      >
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Full name
          </label>
          <div className="w-full relative">
            <LuUser className="absolute top-2 right-4 font-bold text-lg text-stone-800" />
            <input
              type="text"
              {...register("full_name")}
              placeholder="Jhon Doe"
              className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
            />
          </div>
          {errors && errors.full_name ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.full_name.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">E-mail</label>
          <div className="w-full relative">
            <LuMail className="absolute top-2 right-4 font-bold text-lg text-stone-800" />
            <input
              type="text"
              {...register("email")}
              placeholder="demomail@gmail.com"
              className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
            />
          </div>
          {errors && errors.email ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">Password</label>
          <div className="w-full relative">
            {seePassword && seePassword ? (
              <>
                <LuEye
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            ) : (
              <>
                <LuEyeClosed
                  className="absolute top-2 right-4 font-bold text-lg text-stone-800"
                  onClick={() => setSeePassword(!seePassword)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
                />
              </>
            )}
          </div>
          {errors && errors.password ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <label className="font-medium text-md text-stone-700">
            Confirm password
          </label>
          <div className="w-full relative">
            <LuLock className="absolute top-2 right-4 font-bold text-lg text-stone-800" />
            <input
              type="password"
              placeholder="Password"
              {...register("confirmPassword")}
              className="w-full border border-stone-200 inset-shadow-xs rounded-sm px-5 py-1 font-medium text-sm text-stone-800 outline-none"
            />
          </div>
          {errors && errors.confirmPassword ? (
            <p className="w-full font-normal text-sm text-end text-red-500">
              {errors.confirmPassword.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={" w-full $ {isPending ? "cursor-not-alowed" : "cursor-pointer" } px-5 py-2 flex items-center justify-center font-medium text-md text-stone-800 bg-blue-300 rounded-sm ease duration-300 hover:bg-blue-400"}
          >
            Register
          </button>
        </div>
      </form>
      <hr className="w-full border-neutral-300 h-[2px] mt-3 mb-1" />
      <p className="font-medium text-sm text-stone-600 mb-8 mt-3">
        Already have an account?{" "}
        <Link href={"/auth/login"}>
          <b>Login</b>
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
`}
        />
        <ListCard contents={["Create components/cards/SettingCard.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import Link from "next/link";
import React from "react";

const SettingCard = () => {
  return (
    <div className="max-w-150 w-full md:rounded-md md:shadow-sm/80 px-8 py-4">
      <h1 className="font-bold md:text-xl text-lg text-stone-700 italic">
        Setting
      </h1>
      <div className="w-full p-2 mt-8 md:mt-0">
        <Link className="w-full" href={"/setting/profile"}>
          <p className="w-full font-medium text-md text-stone-800/50 px-5 py-2 ease duration-300 hover:bg-neutral-300">
            Profile setting
          </p>
        </Link>
        <hr className="w-full h-3 my-1 border-black" />
      </div>
    </div>
  );
};

export default SettingCard;
`}
        />
        <ListCard contents={["Create components/cards/SpecificNote.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  removeSpecificNote,
  specificNoteData,
  updateNoteData,
} from "@/app/api/apiUrls";
import Cookies from "js-cookie";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { NoteSchema } from "../schema/noteForm.schema";
import { INote } from "../interface/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";

const SpecificNote = () => {
  const updatedNote = useQueryClient();
  const router = useRouter();
  const [edit, setEdit] = useState<boolean>(false);

  // fetch note
  const endPoint = Cookies.get("page") ?? "";
  const { data, error, isPending } = useQuery({
    queryKey: ["fetchSpecificData"],
    queryFn: () => specificNoteData(endPoint),
  });

  // update note
  const { mutate, isSuccess } = useMutation({
    mutationFn: updateNoteData,
    mutationKey: ["updateNote"],
    onSuccess: (data) => {
      toast.success(data?.message);
      updatedNote.invalidateQueries({ queryKey: ["fetchSpecificData"] });
      setTimeout(() => {
        setEdit(!edit);
        window.location.reload();
      }, 300);
    },
    onError: (err) => {
      toast.error(err?.message);
      reset();
    },
  });

  // input validation
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(NoteSchema),
  });

  // data collecting function
  const sendNewData = (data: INote) => {
    mutate({
      endPoint,
      title: data.title,
      note: data.note,
    });
  };

  // remove note
  const deleteData = () => {
    removeSpecificNote(endPoint);
    toast.success("note deleted successfuly");
    setTimeout(() => {
      router.replace("/");
    }, 500);
  };

  return (
    <div className="max-w-150 h-screen overflow-hidden w-full p-8">
      <div className="w-full flex items-center justify-end gap-2 px-4 py-1">
        <Link
          onClick={() => {
            Cookies.remove("page");
          }}
          className="mr-auto cursor-pointer ease duration-200 w-6 h-6 flex items-center justify-center rounded-sm bg-neutral-200 hover:bg-neutral-300"
          href={"/"}
        >
          <IoChevronBackSharp className=" font-black text-lg text-stone-800" />
        </Link>

        {edit && edit ? (
          <button
            onClick={() => setEdit(!edit)}
            className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
          >
            <MdOutlineEdit />
          </button>
        ) : (
          <button
            onClick={() => setEdit(!edit)}
            className="w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-blue-300 cursor-pointer ease duration-200 hover:bg-blue-400"
          >
            <MdOutlineEdit />
          </button>
        )}
        <button
          onClick={deleteData}
          disabled={isPending}
          className={" w-6 h-6 flex items-center justify-center rounded-sm shadow-xs/30 bg-rose-300 $ {  isPending ? "cursor-not-allowed" : "cursor-pointer"  }  ease duration-200 hover:bg-rose-400"}
        >
          <GoTrash className="font-bold text-lg" />
        </button>
      </div>
      <form onSubmit={handleSubmit(sendNewData)} className="w-full">
        {edit && edit ? (
          <input
            type="text"
            {...register("title")}
            defaultValue={data?.data?.title}
            className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2 shadow-sm/30 rounded-sm mt-4"
          ></input>
        ) : (
          <h1 className="w-full font-semibold text-xl italic text-stone-700 outline-none px-5 py-2">
            {data?.data?.title}
          </h1>
        )}
        <br />
        {edit && edit ? (
          <textarea
            rows={10}
            defaultValue={data?.data?.note}
            {...register("note")}
            className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none rounded-sm shadow-sm/30 mt-2"
          />
        ) : (
          <span className=" w-full h-4/5 font-normal text-md text-stone-800 text-start p-5 outline-none overflow-y-auto">
            {data?.data?.note}
          </span>
        )}
        {edit && edit ? (
          <div className="w-full flex items-center justify-end gap-4 px-5 py-2">
            <button
              type="reset"
              onClick={() => setEdit(!edit)}
              className="font-medium text-sm text-stone-800 bg-rose-400 ease duration-300 hover:bg-rose-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="font-medium text-sm text-stone-800 bg-blue-400 ease duration-300 hover:bg-blue-500 cursor-pointer flex items-center justify-center rounded-md px-5 py-2"
            >
              Update
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default SpecificNote;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Dashboard" />
        <br />
        <ListCard contents={["Create components/dashboard/AllNotes.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React from "react";
import NoteCard from "@/components/cards/NoteCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/app/api/apiUrls";
import Link from "next/link";
import Cookies from "js-cookie";
import { DayContext } from '@/src/utils/Providor/Context';

const AllNotes = () => {
  const { data, error } = useQuery({
    queryKey: ["fetchNotes"],
    queryFn: fetchNotes,
  });

  return (
    <div className="w-full flex flex-wrap  items-center md:justify-start justify-center gap-4 px-4 md:px-8 pb-24 pt-8 md:py-10">
      {data && data?.data
        ? data.data.map((note: any, index: string) => (
            <Link
              onClick={() => {
                Cookies.set("page", note._id);
              }}
              key={index}
              href={"/$ {index}"}
            >
              <NoteCard
                title={note?.title}
                note={note?.note}
                updatedDate={note?.updatedAt}
              />
            </Link>
          ))
        : ""}
    </div>
  );
};

export default AllNotes;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Interface" />
        <br />
        <ListCard contents={["Create components/interface/interfaces.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`export interface ILog {
  email: string;
  password: string;
}

export interface IRegister {
  full_name: string;
  email: string;
  password: string;
}

export interface IUser {
  full_name: string;
  email: string;
}

export interface INote {
  title: string;
  note?: string;
}
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Navigation" />
        <br />
        <ListCard
          contents={["Create components/navigaiton/HigherOrderComp.tsx"]}
        />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React, { ReactElement, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtDecode, JwtPayload } from "jwt-decode";
import toast from "react-hot-toast";

export function HigherOrderComp<T>(Component: React.ComponentType<T>) {
  return function Authorised(props: any) {
    const token = Cookies.get("ticket") ?? "";
    const router = useRouter();
    useEffect(() => {
      try {
        const validatedToken = jwtDecode<JwtPayload>(token, {});
        console.log(
          "This is the response of the validateToken:",
          validatedToken
        );

        const currentTime = Math.floor(Date.now() / 1000);

        if (validatedToken.exp && validatedToken.exp < currentTime) {
          toast.error("Session expired : Please Login again");
          router.replace("/auth/login");
        }
      } catch (err: any) {
        toast.error("Session expired : Please Login");
        console.log(err);
        router.replace("/auth/login");
      }
    }, []);

    return <Component {...props} />;
  };
}
`}
        />
        <ListCard
          contents={["Create components/navigation/NavigationComp.tsx"]}
        />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RiStickyNoteAddFill } from "react-icons/ri";

const NavigationComp = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();

  const removeCookiedata = () => {
    toast.success("Successfuly loged out");
    Cookies.remove("name");
    Cookies.remove("ticket");
    Cookies.remove("userId");
    setTimeout(() => {
      router.replace("/auth/login");
    }, 1000);
  };

  const user = Cookies.get("name") ?? "User";
  return (
    <div className="max-w-[1280px] w-full h-screen flex items-start justify-center bg-neutral-100 shadow-lg/30 shadow-white">
      <div className="max-w-[240px] w-full h-screen hidden md:block border-r border-neutral-400">
        <ul className="w-full h-screen flex flex-col items-center justify-starts py-8">
          <li className="w-full flex items-center justify-center p-2">
            <span className="flex items-center justify-center gap-2 font-bold text-xl text-stone-800 italic">
              NoteMe!
            </span>
          </li>
          <li className="w-full items-center justify-center mt-18">
            <Link className="w-full" href={"/"}>
              <span className="w-full h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                <CgNotes /> Notes
              </span>
            </Link>
          </li>
          <li className="w-full px-5 mt-4">
            <hr className="w-full border-stone-400" />
          </li>
          <li className="w-full items-center justify-center mt-2">
            <Link href={"/setting"}>
              <span className="w-full h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                <IoSettingsOutline /> Setting
              </span>
            </Link>
          </li>
          <li className="w-full mt-auto flex items-center justify-center px-5">
            <button
              onClick={removeCookiedata}
              className="max-w-30 w-full font-thin text-md text-white flex items-center justify-center py-2 px-5 rounded-md bg-red-500 ease duratio-250 cursor-pointer hover:bg-red-600"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full h-screen overflow-y-auto relative">
        <div className="w-full h-15 flex items-center justify-end px-5 border-b border-b-neutral-200 bg-neutral-200">
          <span className="flex mr-auto items-center justify-center gap-2 block md:hidden font-bold text-xl text-stone-800 italic">
            NoteMe!
          </span>
          <Link href="/setting/profile">
            <div className="md:max-w-80 max-w-48 w-full h-10 flex items-center justify-center gap-2">
              <div className="rounded-full md:w-10 md:h-10 w-8 h-8 flex items-center justify-center bg-stone-400 overflow-hidden">
                <FaUserLarge className="font-black text-xl text-stone-600" />
              </div>
              <div className=" px-2">
                <span className="font-medium text-sm md:text-md text-stone-800/50">
                  <b>{user}</b>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full h-5/6 md:h-screen relative overflow-hidden">
          {children}
          <Link href={"/newnote"}>
            <button className="w-10 h-10 flex items-center justify-center absolute bottom-8 right-8 rounded-md bg-blue-500 cursor-pointer ease duration-200 hover:bg-blue-600 font-black text-xl text-white">
              <RiStickyNoteAddFill />
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full md:hidden block bg-neutral-200 px-5 py-2">
          <ul className="w-full flex items-center justify-center gap-4">
            <li className="max-w-50 w-full h-10 relative">
              <Link href={"/"}>
                <span className="h-full flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                  <CgNotes /> Notes
                </span>
              </Link>
            </li>
            <li className="max-w-50 w-full items-center justify-center relative">
              <Link href={"/setting"}>
                <span className=" h-10 flex items-center justify-center gap-2 font-medium text-md text-stone-800 cursor-pointer ease duration-300 hover:bg-neutral-400">
                  <IoSettingsOutline /> Setting
                </span>
              </Link>
            </li>
            <li className="w-full flex items-center justify-center px-5">
              <button
                onClick={removeCookiedata}
                className="max-w-30 w-full font-thin text-md text-white flex items-center justify-center py-2 px-5 rounded-md bg-red-500 ease duratio-250 cursor-pointer hover:bg-red-600"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationComp;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Provider" />
        <br />
        <ListCard contents={["Create components/provider/QueryProvider.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="Schema" />
        <br />
        <ListCard contents={["Create components/schema/authForm.schema.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import * as yup from "yup";

// log schema
export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: yup.string().required("please enter your password"),
});

// register schema
export const RegisterSchema = yup.object({
  full_name: yup.string().required("please enter your full name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: yup
    .string()
    .required("please enter your password")
    .matches(/\d/, "your password must have at least one digits"),
  confirmPassword: yup
    .string()
    .required("please re-enter your password")
    .oneOf(
      [yup.ref("password")],
      "your re-entered password did not match the password"
    ),
});

// update user schema
export const UpdateUser = yup.object({
  full_name: yup.string().required("please enter your full name"),
  birth: yup.string().required("please enter your DOB"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
});
`}
        />
        <ListCard contents={["Create components/schema/noteForm.schema.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import * as yup from "yup";

// note schema
export const NoteSchema = yup.object({
  title: yup.string().required("please enter the title for your note"),
  note: yup.string(),
});
`}
        />
        <br />
        <ParagraphCard paragraph="With this we successfully have completed creating all the essential components. Now we will use them in the respective end-points on the actual pages. So for that we will move inside the app directory and create some endpoints ( folders ).  and also you can delete pre-built page.tsx file as the contents inside the “(dashboard)” folder will be displayed by default when we load the site or visit the site." />
        <SyntaxHighlighter
          language="bash"
          children="cd ../app && mkdir (dashboard) api auth"
        />
        <ParagraphCard paragraph="Once you do all mentioned above let’s add some toasters and query providers in the layout.tsx file." />
        <SyntaxHighlighter
          language="typescript"
          children={`import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/provider/QueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Me!",
  description: "Take a note of everyting and take a chillpill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"$ {geistSans.variable} $ {geistMono.variable} antialiased"}
      >
        <Toaster position="top-center" />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="(dashboard)" />
        <br />
        <ParagraphCard paragraph="Inside (dashboard) folder before adding the codes first let’s create some required end-points ( folders ) for this project." />
        <SyntaxHighlighter
          language="bash"
          children={`cd "(dashboard)" && mkdir -p [id] newnote setting/{profile}`}
        />
        <ListCard contents={["Create (dashboard)/layout.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import React from "react";
import NavigationComp from "@/components/Navigation/NavigationComp";
import { HigherOrderComp } from "@/components/Navigation/HigherOrderComp";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex justify-center bg-linear-to-r from-neutral-300 to-stone-300 overflow-hidden">
      <NavigationComp>{children}</NavigationComp>
    </div>
  );
};

export default HigherOrderComp(layout);
`}
        />
        <ListCard contents={["Create app/(dashboard)/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import AllNotes from "@/components/dashboard/AllNotes";

export default function Home() {
  return (
    <div className="w-full h-screen relative p-8 overflow-y-auto">
      <h1 className="font-bold text-xl italic text-stone-800">Notes</h1>
      <AllNotes />
    </div>
  );
}
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="[id]" />
        <br />
        <ListCard contents={["Create (dashboard)/[id]/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`"use client";
import SpecificNote from "@/components/cards/SpecificNote";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <SpecificNote />
    </div>
  );
};

export default page;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="newnote" />
        <br />
        <ListCard contents={["Create (dashboard)/newnote/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import NewNote from "@/components/cards/NewNote";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <NewNote />
    </div>
  );
};

export default page;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="setting" />
        <br />
        <ListCard contents={["Create (dashboard)/setting/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import SettingCard from "@/components/cards/SettingCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen overflow-hidden md:flex md:justify-center md:items-center">
      <SettingCard />
    </div>
  );
};

export default page;
`}
        />
        <ListCard contents={["Create setting/profile/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import ProfileCard from "@/components/cards/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <ProfileCard />
    </div>
  );
};

export default page;
`}
        />
        <br />
        <br />
        <Header headerType="sec" content="api" />
        <br />
        <ListCard contents={["Create app/api"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import axiosInstance from "./axiosInstance";
import { ILog, IRegister, INote } from "@/components/interface/interfaces";
import Cookies from "js-cookie";

const userId = Cookies.get("userId");

interface IProps {
  endPoint: string;
  title?: string;
  note?: string;
}

interface IUser {
  endPoint: string;
  full_name?: string;
  email?: string;
  birth?: string;
  password?: string;
}

// login user
export const logUser = async (data: ILog) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    console.log(err.response.data);
    return err.response.data;
  }
};

// register user
export const registerUser = async (data: IRegister) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// update user
export const updateUserData = async ({ endPoint, ...data }: IUser) => {
  try {
    const resopnse = await axiosInstance.put("/user/$ {endPoint}", { ...data });
    return resopnse.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// remove user data
export const removeUserData = async (endPoint: string) => {
  try {
    const response = await axiosInstance.delete("/user/$ {endPoint}");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch user data
export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get("/user/$ {userId}");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// create notes
export const createNote = async (data: INote) => {
  try {
    const response = await axiosInstance.post("/", data);
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch notes
export const fetchNotes = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// fetch specific note
export const specificNoteData = async (endPoint: String) => {
  try {
    const response = await axiosInstance.get("/$ {endPoint}");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// update specific note
export const updateNoteData = async ({ endPoint, ...data }: IProps) => {
  try {
    const resopnse = await axiosInstance.put("/$ {endPoint}", { ...data });
    return resopnse.data;
  } catch (err: any) {
    return err.response.data;
  }
};

// delete specific note
export const removeSpecificNote = async (endPoint: string) => {
  try {
    const response = await axiosInstance.delete("/$ {endPoint}");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};
`}
        />
        <ListCard contents={["Create app/api/apiInstance.ts"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "<url-where-the-server-is-being-hosted>/api",
  headers: {
    authorization: "BEARER $ {Cookies.get("ticket")}",
  },
});

export default axiosInstance;
`}
        />
        <ParagraphCard paragraph="With this our dashboard is ready now we need to work on the login and registration form to log and register user’s to get access to the dashboard and let them take and make notes." />
        <br />
        <br />
        <Header headerType="sec" content="auth" />
        <br />
        <Header headerType="tri" content="login" />
        <br />
        <ListCard contents={["Create auth/login/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import LoginCard from "@/components/cards/LoginCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-200">
      <LoginCard />
    </div>
  );
};

export default page;
`}
        />
        <br />
        <br />
        <Header headerType="tri" content="register" />
        <br />
        <ListCard contents={["Create auth/register/page.tsx"]} />
        <SyntaxHighlighter
          language="typescript"
          children={`import RegisterCard from "@/components/cards/RegisterCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-200">
      <RegisterCard />
    </div>
  );
};

export default page;
`}
        />
        <br /><br />
        <Header headerType="sec" content="Build"/>
        <br />
        <ParagraphCard paragraph="Once we successfully create all the above files and folders successfully we will build it before hosting it live. So run the following command on both repository (client & server)."/>
        <SyntaxHighlighter language="bash" children={`npm run build`}/>
        <ParagraphCard paragraph="Basically what it does is that it will convert all the codes that we wrote in typescript language into plain JavaScript language."/>
        <br />
        <br />
        <Header headerType="sec" content="Conclusion"/>
        <br />
        <ParagraphCard paragraph="After building the code the super simple note taking app is ready for hosting. Also with this a full mern stack web application project comes to an end. Hope you learned something good and made yourself productive. For the explanation you can make a visit to my youtube channel where I have explained you how it works in detail."/>
      </div>
    </div>
  );
};

export default page;
