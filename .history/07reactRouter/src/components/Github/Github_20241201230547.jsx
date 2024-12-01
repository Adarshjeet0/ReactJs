import React from 'react'

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
    <div className="text-center m-4 bg-gray-500 text">Github: {data.followers}</div>
  )
}

export default Github