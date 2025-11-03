import { useEffect, useState } from 'react'

interface Appointment {
  id: number
  clientName: string
  service: string
  datetime: string
}

export default function AgendamentosUsuario() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/appointments/user/1') // ID fixo para exemplo
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [])

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow text-black">
      <h2 className="text-lg font-bold mb-4">Seus Agendamentos</h2>
      {appointments.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        <ul>
          {appointments.map(app => (
            <li key={app.id} className="mb-2 border-b pb-2">
              <strong>Serviço:</strong> {app.service}<br />
              <strong>Data:</strong> {new Date(app.datetime).toLocaleString()}<br />
              <strong>Cliente:</strong> {app.clientName}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
