'use client'

import { useEffect, useState } from "react"

const DataPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts');
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ul>
      {data?.map((p) => (
        <>
          <li key={p.id} className="border m-5 py-2 px-4">{p.title}</li>
        </>
      ))}
    </ul>
  )
}

export default DataPage