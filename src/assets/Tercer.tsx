import React from 'react'
import { users } from "./users-list";

// 1. Primer componente: Hola Mundo
function HolaMundo() {
  return <h1>Hola Mundo</h1>;
}

// 2. Segundo componente: utiliza una variable
function Saludo() {
  const nombre = "Gabriel";

  return <h2>Hola, {nombre}</h2>;
}

// 3. Tercer componente: utiliza los datos importados desde users-list.js
function ListaUsuarios() {
  return (
    <div>
      <h2>Lista de Usuarios</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Rol: {user.role}</p>
        </div>
      ))}
    </div>
  );
}

// Componente principal
function Tercer() {
  return (
    <div>
      <HolaMundo />
      <Saludo />
      <ListaUsuarios />
    </div>
  );
}

export default Tercer;