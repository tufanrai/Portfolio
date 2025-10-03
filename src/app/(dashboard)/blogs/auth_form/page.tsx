import Header from "@/src/components/Cards/HeaderCard";
import ListCard from "@/src/components/Cards/ListCard";
import ParagraphCard from "@/src/components/Cards/ParagraphCard";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const page = () => {
 
  return (
    <div className="w-full h-screen overflow-x-hidden flex justify-center">
      <div className="max-w-[1280px] w-full h-screen px-6 py-4">
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
        <Header headerType="sec" content="Setting up the Project" />
        <br />
        <ListCard
          contents={[
            "Create a repository for the project and inside the repository create another two different folders - client for the frontend and server for the backend.",
          ]}
        />
        <div className="w-full px-8">
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
        <div className="w-full px-8">
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
        <div className="w-full px-8">
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
        <div className="w-full px-8">
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
        <ListCard contents={["Create .env file on the roote directory ( server ) to store sensetive and important urls."]}/>
        <div className="w-full px-8">
              <SyntaxHighlighter 
                language="bash"
                children={`
touch .env
              `}/>
        </div>
        <br/>
        <ListCard contents={["Store all the sensetive urls on .env file"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter
            language="bash"
            children={`
PORT = 5001 

DB_URL = ''

JWT_SECRET_KEY = "DoNotShare"
JWT_EXPIRY_DATE = '30d'
              `}/>
        </div>
        <br />
        <ListCard contents={["Inside server folder create a src folder and inside it create some essential folders along with a server file."]}/>
        <div className="w-full px-8">
              <SyntaxHighlighter language="bash" children={`
mkdir src && cd src
touch server.ts
mkdir config controller model router utils
              `}/>
        </div>
        <br />
        <Header headerType="sec" content="Server setup"/>
        <ListCard contents={["Initialise app, connect the routes and database. ( src/server.ts )"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="typescript" children={`
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from '@/router/authRouter';
import { dbConfig } from '@/config/dbconfig';

// import ting the root url's from .env file
conimport { DayContext } from '../../../../utils/Providor/Context';
st PORT = porcess.env.PORT ?? 8000;
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
          `}/>
        </div>
        <br />
        <Header headerType="sec" content="Database configuration"/>
        <ListCard contents={["connect your server with the database. ( src/config/dbConfig.ts )"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="typescript" children={`
import mongoose from 'mongoose';

// function that connects server with the database. 
export const dbConfig = (uri: string) => {
	mongoose.connect(uri)
	.then(() => console.log('server connected to database successfuly')
	.catch(err => console.log(err));
};
          `}/>
        </div>
        <br />
        <ListCard contents={["Create a user model. ( model/user.mode.ts )"]}/>
        <div className="w-full px-8">
            <SyntaxHighlighter language="typescript" children={`
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
            `}/>
        </div>
        <br />
        <Header headerType="sec" content="Helping components/Utils"/>
        <ListCard contents={["Create helping components like asyncHandler, errorHandler, token generator and password hasher."]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="bash" children={`
cd utils 
touch asyncHandler.ts errorHandler.ts jwt.utils.ts bcryptjs.utils.ts
          `}/>
        </div>
        <br />
        <ListCard contents={["Inside asyncHandler.ts file create async handler function"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="typescript" children={`
import { Request, Response, NextFunction, RequestHandler } from 'express';

type Handler = async (req: Request, res: Response, next: NextFunciton) => Promise<any>;

// async handler function
export const asyncHandler = (fun: Handler) : RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fun(req,res,next)).catch(err => next(err));
	};
};
          `}/>
        </div>
        <br />
        <ListCard contents={["Inside asyncHandler.ts file create async handler function"]}/>
        <div className="w-full px-8">
            <SyntaxHighlighter language="typescript" children={`
import { Request, Response, NextFunction, RequestHandler } from 'express';

type Handler = async (req: Request, res: Response, next: NextFunciton) => Promise<any>;

// async handler function
export const asyncHandler = (fun: Handler) : RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fun(req,res,next)).catch(err => next(err));
	};
};
            `}/>
        </div>
        <br />
        <ListCard contents={["Create custom error handler file inside the file errorHandler.ts"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="typescript" children={`
class errorHandler extends Error {
	statusCode : number;
	status: 'success' | 'fail' | 'error';
	success: boolean 
	
	constructor (message: string, statusCode: number) {
		super(message)
		(this.statusCode = statusCode);
		(this.status = statusCode >= 400 && statusCode < 500? 'fail' : 'error');
		(this.success = false);
		Error.capturetimestamp(this, errorHandler);
	};
};

export default errorHandler;
          `}/>
        </div>
        <br />
        <ListCard contents={["Create a token generator and verifiyer on the jwt.utils.ts file"]}/>
        <div className="w-full px-8">
          <SyntaxHighlighter language="typescript" children={`
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
	return jwt.verify(token) as jwt.JwtPayload;
};
          `}/>
        </div>
        <ParagraphCard paragraph={"'jsonwebtoken' is one of the package that is used to generate as it's name says 'JSON web token'. This token comes in hand whenever you login to a site, close the site and visit it again after few hours. The generated token when you first loge in will automatically logs in for you such that the second visit to site is direct to your dashboard."} />
        <br />
      </div>
    </div>
  );
};

export default page;
