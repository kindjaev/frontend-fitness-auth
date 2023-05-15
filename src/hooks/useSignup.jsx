
import {useState} from "react"
import { useAuthContext } from './useAuthContext'

function useSignup() {
const [error, setError] = useState(null)
const [loading, setLoading] = useState(null)
const {dispatch} = useAuthContext()

const signup = async (email, password) => {
    setLoading(true)
    setError(null)

    const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': "application/json"
        }
    })
    const json = await res.json()
    if(!res.ok){
        setLoading(false)
        setError(json.error)
        console.log(error)
    } else {
        localStorage.setItem("user", JSON.stringify(json))
        dispatch({type: "LOGIN", payload: json})
        setLoading(false)
    }
}
  return {signup, error, loading}
}

export default useSignup