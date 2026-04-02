import React from 'react'

const useMountEffect = (cb)=>{
  React.useEffect(cb,[])
}

function App() {
  const [message, setMessage] = React.useState('')
  useMountEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL+"/")
    .then(res=>res.json()).then(data =>{
      setMessage(data.message)
    })
  })
  return (
    <div className='flex min-h-screen justify-center items-center text-3xl font-bold'>{message}</div>
  )
}

export default App