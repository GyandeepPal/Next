import Image from "next/image";

const Home = () => {
  return (
    <div className=" container my-5 size-100 relative  bg-amber-600 mx-auto ">
      <Image
        className=" object-cover "
        quality={100}
        fill={true}

        
        src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Home"
      />


    </div>
  );
};

export default Home;

export const metadata = {
  title: "Facebook",
  description:
    "This is home Facebook and we can connect with the world using Facebook",
};