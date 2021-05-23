import React, {useState} from 'react'
import {Card,  Button, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


function Dashboard() {

    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()


  async function handlelogout() {
       setError('')

       try{
          await logout()
          history.push('/login')
       } catch{
           setError('fAILED TO LOGOUT')
       }
   }


    return (
        <div>
            <Card>
              <Card.Body>
                 <h2 className="text-center mb-4">Profile</h2>
                 {error && <Alert variant="danger">{error}</Alert>}
                 <strong>Email:</strong>{currentUser.email}
                 <Link to="update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handlelogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default Dashboard
