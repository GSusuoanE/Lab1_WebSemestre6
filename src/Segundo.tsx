import React from 'react'
import {users} from './assets/users-list'

function Segundo() {
    const nom = "Gabriel"
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <h2>{nom}, estos son tus usuarios vecinos.</h2>

      <h3>Lista de Bancos</h3>
            <ul>
              {users.map((a) => (
                <li key={a.id}>
                  {a.id} — {a.name} — {a.emial} -- {a.role}
                </li>
              ))}
            </ul>
    </div>
  )
}

export default Segundo
