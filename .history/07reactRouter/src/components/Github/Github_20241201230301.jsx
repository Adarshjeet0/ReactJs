import React from 'react'

function Github() {
    useEffect(() => {
      fetch("http://githu")
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github