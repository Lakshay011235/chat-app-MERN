import { useState } from "react"

export default function Register(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input 
          type="text" 
          value={username}
          className="block w-full rounded-sm p-2 mb-2 border" 
          placeholder="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
        />
        <input 
          type="password" 
          value={password}
          className="block w-full rounded-sm p-2 mb-2 border" 
          placeholder="password" 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm">Register</button>
      </form>
    </div>
  )
}