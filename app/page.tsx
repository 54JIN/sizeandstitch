import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <div>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">Hello</h1>
      </div> */}
      <div className="flex w-screen justify-center ">
        <div className="flex flex-col justify-center items-center pt-[100px] sm:pt-[200px] md:pt-[200px] lg:pt-[200px] xl:pt-[200px] 2xl:pt-[200px]  gap-[9vw] sm:gap-[5vw] md:gap-[2vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw]">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-center w-[90vw] sm:w-[80vw] md:w-[80vw] lg:w-[80vw] xl:w-[60vw] 2xl:w-[60vw] max-w-[745px]">
            Networking platform for producers & singers
          </h1>
          <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-center w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] xl:w-[45vw] 2xl:w-[45vw] max-w-[700px]">
            Are you a singer looking for the perfect producer to bring your
            voice to life? Or a beatmaker searching for talented vocalists to
            take your music to the next level?
          </p>
          <div className="flex flex-col gap-3 w-full justify-center items-center hidden xl:flex">
            <div className="flex justify-center items-center bg-[#f5f5f7] gap-2 md:gap-[1vw] pt-1 pb-1 pl-4 pr-1 rounded-md w-full sm:w-[65vw] md:w-[80vw] lg:w-[45vw] xl:w-[30vw] 2xl:w-[30vw] max-w-[432px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-black focus:outline-none text-base md:text-lg w-full h-[6vh] sm:h-[10vh] md:h-[6vh] lg:h-[6vh] xl:h-[6vh] 2xl:h-[6vh]"
              />
              <button className="btn btn-primary">Join Waitlist</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-[60vw] md:w-[45vw] justify-center items-center xl:hidden">
            <div className="flex justify-center items-center bg-[#f5f5f7] gap-2 md:gap-[1vw] pt-1 pb-1 pl-4 pr-1 rounded-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-black focus:outline-none text-base md:text-lg w-full h-[6vh] sm:h-[50px] md:h-[50px]"
              />
            </div>
            <button className="btn btn-primary w-full h-[6vh] sm:h-[50px] md:h-[50px]">Join Waitlist</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}