import React from "react";

const Welcome = () => {
  return (
    <>
      <div className=" relative w-full h-[500px] flex justify-center items-center">
        <img
          className="absolute w-full h-full object-cover -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/f8e8e28b-fd6d-4896-bae0-f8472b3c61c3/SE-sv-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="bg-black/60 absolute top-0 left-0 w-full h-full z-0"></div>
        <div className="z-10 text-white w-full h-full text-center flex flex-col justify-center items-center ">
          <h2 className=" text-3xl font-bold max-w-[400px] mx-auto">
            Obegränsat med filmer, serier och annat
          </h2>
          <p className="my-5 text-lg">
            Titta var du vill. Avsluta när du vill.
          </p>
          <p className="text-lg max-w-[400px] mx-auto">
            Redo att börja titta? Ange din e-postadress för att skapa eller
            återaktivera ett konto.
          </p>
          <form className="flex flex-col gap-4 mt-4 w-full">
            <input
              type="email"
              className="bg-gray-600/50 outline-none border border-gray-500 text-md w-[80%] rounded mx-auto py-2 px-2"
            />
            <button className=" bg-red-600 px-6 py-2 mx-auto w-[150px] rounded cursor-pointer text-white text-lg">
              Kom igång
            </button>
          </form>
        </div>
      </div>

      <div className=" relative bg-black w-full flex mt-2 py-12 justify-center items-center">
        <div className="text-white mx-6 text-center flex flex-col">
          <h2 className="text-3xl font-bold">Titta på din tv</h2>
          <p className="text-lg my-4">
            Titta på smart-tv-apparater, Playstation, Xbox, Chromecast, Apple
            TV, Blu-ray-spelare och många fler.
          </p>
          <div className="relative mx-auto ">
            <img
              className="absolute top-5 z-10"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/f8e8e28b-fd6d-4896-bae0-f8472b3c61c3/SE-sv-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              alt=""
            />
            <img
              className=" relative z-20"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="relative bg-black w-full flex mt-2 py-12 justify-center items-center">
        <div className="text-white mx-6 text-center flex flex-col">
          <h2 className="text-3xl font-bold mt-6">Titta på din tv</h2>
          <p className="text-lg mt-2">
            Titta på smart-tv-apparater, Playstation, Xbox, Chromecast, Apple
            TV, Blu-ray-spelare och många fler.
          </p>
          <img
            className=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
