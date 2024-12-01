import React from 'react'

function Github() {
    useEffect(() => {
      fetch("http://api.github.com/users/adarshjeet0")
      .then(response => response.json())
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github