"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("")

  
  useEffect(() => {
 setInterval(()=> {
      setTime(new Date().toLocaleTimeString());
  }, 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="p-5">Welcome to my first NextJs sample project</h2>
      <p className="">Current time is: {time}</p>

    </div>
  );
}