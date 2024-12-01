import React,{useState} from 'react'


function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://api.github.com/users/adarshjeet0")
      .then(response => response.json())
      .then(data=>{
        console.log(data);
        setData(data);
      })
    }, [])
    
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github: {data.followers}</div>
  )
}

export default Github