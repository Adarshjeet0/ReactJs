import React from 'react'

function Github() {
    useEffect(() => {
      fetch("http://api.github.com/users/")
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github