import React, { useState } from 'react'
import { useUser } from '../Contexts/UserContext'

function Inputform() {
    const [data, setData] = useState('')
    const { Adduser, user, Deleteuser } = useUser()

    const Handlesubmit = (e) => {
        e.preventDefault()
        Adduser(data)
        setData('')

    }
    console.log(user);

    return (
        <div>
            <form onSubmit={Handlesubmit}>
                <input type='text' value={data}
                    onChange={(e) => setData(e.target.value)}
                ></input>
            </form>
            {
                user.map((user) => {
                    return <div style={{ display: "flex" }}
                        key={user.name}><h2 key={user.name}>{user.name}</h2>
                        <button onClick={() => Deleteuser(user.id)}>X</button>
                        <button>edit</button>
                    </div>

                })
            }
        </div>
    )
}

export default Inputform
