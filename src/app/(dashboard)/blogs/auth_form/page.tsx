"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const page = () => {
  const code = [
    `
mkdir login_registration_mern
cd login_registration_mern
mkdir client server
`,
    `
npm init -y
npm i typescript
npx tsc -init
`,
    `
npm i express mongoose dotenv cors bcryptjs jasonwebtoken
npm i -D @types/express @types/bcryptjs @types/jsonwebtoken ts-node-dev
`,
    `
// in package.json file 
"style" : {
    "build" : "tsc",
    "start" : "node dist/server.js",
    "dev" : "ts-node-dev --transipile-only --respawn src/server.ts"
}
 // in tsconfig.json file
 "rootDir" : "./src",
 "outDir" : "./dist"
    `,
    `
touch .env
`,
    `
PORT = 5001 

DB_URL = '' // you will be provided the connection url when you create a cluster on the atlas mongodb cloud

JWT_SECRET_KEY = 'Shhh' // you can write anything you want
JWT_EXPIRY_DATE = '30d'
`,
    `
mkdir src && cd src
touch server.ts
mkdir config controller model router utils
`,
    `
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from '@/router/authRouter';
import { dbConfig } from '@/config/dbconfig';

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
`,
  ];

  const [data, setData] = useState(code);
  return (
    <div className="w-full h-screen overflow-x-hidden flex justify-center">
      <div className="max-w-[1280px] w-full h-screen px-6 py-4">
        <h1 className="w-full text-center font-bold text-xl text-neutral-200">
          Login/Registration from - MERN Stack
        </h1>
        <br />
        <p className="font-medium text-md text-neutral-300">
          In this tutorial you will learn how login and signup works behind the
          scene as we will develop a production ready login and registration
          form using MERN Stack. We will be using mongoDb as our database and
          Express.js as our server. We will use{" "}
          <b>
            <i>“jsonwebtoken”</i>
          </b>{" "}
          package to generate a access token and{" "}
          <b>
            <i>“bcryptjs”</i>
          </b>{" "}
          package to hash password before stroing it into the database. The main
          objective of this tutorial is to make you understand how does json web
          token generation works and hashing works and also why are they used.
        </p>
        <br />
        <h4 className="font-semibold text-lg text-neutral-200">
          Pre-requisites
        </h4>
        <div className="w-full pl-8 mt-2">
          <ul className="font-medium text-sm text-neutral-300 list-disc">
            <li>Node.js and npm installed</li>
            <li>MongoDb initialised for storing user&apos;s data</li>
          </ul>
        </div>
        <br />
        <div>
          <h2 className="font-semibold text-lg text-neutral-200">
            Setting up the Project
          </h2>
          <br />
          <div className="w-full px-4">
            <ul className="font-medium text-md text-neutral-300 list-disc">
              <li>
                <p className="font-medium text-md text-neutral-300">
                  Create a repository for the project and inside it create 2
                  separate folders (client & server) for frontend and backend.
                </p>
                <br />
                <div className="w-full px-8">
                  <SyntaxHighlighter language="bash">
                    {data.at(0)}
                  </SyntaxHighlighter>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <h4 className="font-semibold text-lg text-neutral-200">Backend:</h4>
          <ul className="font-medium text-md text-neutral-300 list-disc">
            <li>
              <p className="font-medium text-md text-neutral-300">
                On the server folder initialise node.js app and typescript
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="bash">
                  {data.at(1)}
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="mt-2">
              <p className="font-medium text-md text-neutral-300">
                install package and dev-dependencies
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="bash">
                  {data.at(2)}
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="mt-2">
              <p className="font-medium text-md text-neutral-300">
                update package.json and tsconfig.json files
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="json">
                  {data.at(3)}
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="mt-2">
              <p className="font-medium text-md text-neutral-300">
                Create .env file on the root directory (server) to store
                sensetive and important url&apos;s
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="bash">
                  {data.at(4)}
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="mt-2">
              <p className="font-medium text-md text-neutral-300">
                Store all the senseitve url&apos;s on .env file
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="bash">
                  {data.at(5)}
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="mt-2">
              <p className="font-medium text-md text-neutral-300">
                Inside server folder create a src folder and inside it create
                some essential folders along with a server file
              </p>
              <br />
              <div className="w-full px-8">
                <SyntaxHighlighter language="bash">
                  {data.at(6)}
                </SyntaxHighlighter>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-neutral-200">
            Server Setup
          </h2>
          <br />
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
