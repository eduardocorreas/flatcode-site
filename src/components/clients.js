import React from 'react'
import ClientList from './clientList'

export default function Clients() {
  return (
    <div className="p-20 mx-auto  bg-white">
      <h2 className="title-section mb-10">
        Nossos <span style={{ color: '#ff7400' }}>clientes</span>
      </h2>
      <div className="justify-center mx-auto">
        <ClientList />
      </div>
    </div>
  )
}
