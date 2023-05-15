import { BsSearch, BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  return (
    <>
      <form className="flex w-full m5-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
        <BsSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </>
  );
};

export default HomeSearch;
