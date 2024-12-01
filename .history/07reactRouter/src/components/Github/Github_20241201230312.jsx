import React from 'react'

function Github() {
    useEffect(() => {
      fetch("http://api.github.com/user")
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github