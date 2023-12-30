const Loader = () => {
  return (
    <div
      className="h-screen w-screen bg-bgColor flex 
    items-center justify-center"
    >
      <div
        className="inline-block h-10 w-10 rounded-full animate-spin bg-transparent
      border-[4px] border-mainColor border-t-transparent "
      ></div>
    </div>
  );
};

export default Loader;
