import React from 'react'

function Github() {
    useEffect(() => {
      fetch("http://api.github")
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github