"use client";
import Image from "next/image";
export default function Home() {
  const heandleClick = async () => {
    let data = {
      name: "Gyan",
      roll: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res);

  }
  return (
    <>

      <div className="text-xl font-bold">
        This the rout demo
      </div>

      <button className="px-2 py-3 mx-auto rounded-full  w-40 bg-green-600" onClick={heandleClick}>Click me</button>
    </>
  );
}
