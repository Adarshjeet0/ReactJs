import React,{useState, useEffect} from 'react'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch("http://api.github.com/users/adarshjeet0")
    //   .then(response => response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github: {data.followers}
    <img src={data.avatar_url} alt="Git_picture" width={300} />
    </div>
  )
}

export default Github