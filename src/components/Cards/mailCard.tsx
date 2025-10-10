import React from "react";

const MailCard = () => {
  return (
    <div className="w-7/8 w-full bg-black flex overflow-hidden">
      <div className="w-1/2 w-full hidden md:block">
        <h2 className="font-semibold text-md italic white p-4">
          You can find me also on:
        </h2>
      </div>
      <div className="w-1/2 w-full bg-neutral-400 px-2 py-8 md:p-8">
        <form className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-col items-start justify-center px-4">
            <input
              type="text"
              placeholder="full name"
              className="w-full px-5 py-2 font-medium text-sm text-stone-300 outline-none bg-neutral-500"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center px-4">
            <input
              type="text"
              placeholder="e-mail"
              className="w-full px-5 py-2 font-medium text-sm text-stone-300 outline-none bg-neutral-500 "
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center px-4">
            <textarea
              rows={6}
              cols={30}
              placeholder="message"
              className="w-full px-5 py-2 font-medium text-sm text-stone-300 outline-none bg-neutral-500 "
            ></textarea>
          </div>
          <div className="w-full flex flex-col items-start justify-center px-4">
            <button className="w-full px-5 py-1 font-medium text-sm text-stone-300 cursor-pointer flex items-center justify-center bg-neutral-500/50 ease duration-250 hover:bg-neutral-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailCard;
