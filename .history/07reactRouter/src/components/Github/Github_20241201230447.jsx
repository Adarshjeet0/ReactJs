import React from 'react'

function Github() {
    const [data, setData] = useState()
    useEffect(() => {
      fetch("http://api.github.com/users/adarshjeet0")
      .then(response => response.json())
      .then(data=>{
        console.log(data);
        setData(data);
      })
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github