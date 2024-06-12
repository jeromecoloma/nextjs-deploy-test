"use client";
import { useEffect, useState } from 'react';

export default function Hello() {

  const [resultFromRouteHanlder, setResultFromRouteHandler] = useState("");

  useEffect(() => {
    const getResult = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();

      setResultFromRouteHandler(data.message);

    };

    getResult();
  });

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl">Hello Client Component</h1>
      <div>
        Result from route handler:
        <p>{resultFromRouteHanlder}</p>
      </div>
    </div>
  );
};
