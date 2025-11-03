import { useState } from 'react'

const services = ['Corte de cabelo', 'Barba', 'Sobrancelha', 'Combo Corte + Barba']
const availableHours = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

export default function ChatBotAgendamento() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    service: '',
    datetime: '',
    clientName: '',
    clientPhone: '',
  })
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Olá! Vamos agendar seu horário. Por favor, selecione um serviço abaixo:' }
  ])

  const addMessage = (from: 'bot' | 'user', text: string) => {
    setMessages(prev => [...prev, { from, text }])
  }

  const handleService = (service: string) => {
    setData({ ...data, service })
    addMessage('user', service)
    addMessage('bot', '🕒 Agora escolha um horário disponível:')
    setStep(1)
  }

  const handleTime = (time: string) => {
    const date = new Date()
    const [hour, minute] = time.split(':')
    date.setHours(+hour, +minute)
    setData({ ...data, datetime: date.toISOString() })
    addMessage('user', time)
    addMessage('bot', '👤 Qual o seu nome completo?')
    setStep(2)
  }

  const handleTextInput = (input: string) => {
    if (step === 2) {
      setData({ ...data, clientName: input })
      addMessage('user', input)
      addMessage('bot', '📱 Agora, informe seu número de telefone:')
      setStep(3)
    } else if (step === 3) {
      const appointmentData = { ...data, clientPhone: input, userId: 1 }
      fetch('http://localhost:3333/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
      }).then(() => {
        addMessage('user', input)
        addMessage('bot', '✅ Seu agendamento foi confirmado com sucesso!')
        setStep(4)
      })
    }
  }

  return (
    <div className="chatbot-container border rounded-xl p-4 max-w-md mx-auto shadow-lg bg-white">
      <div className="space-y-2 mb-3">
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'bot' ? "text-left" : "text-right"}>
            <p className={`inline-block rounded-xl px-4 py-2 m-1 text-sm max-w-[80%] ${m.from === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}`}>
              {m.text}
            </p>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid grid-cols-2 gap-3">
          {services.map(service => (
            <button
              key={service}
              onClick={() => handleService(service)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded-lg"
            >
              {service}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="grid grid-cols-3 gap-3">
          {availableHours.map(hour => (
            <button
              key={hour}
              onClick={() => handleTime(hour)}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-2 rounded-lg"
            >
              {hour}
            </button>
          ))}
        </div>
      )}

      {step === 2 || step === 3 ? (
        <input
          type="text"
          placeholder={step === 2 ? "Digite seu nome completo" : "Digite seu telefone"}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleTextInput(e.currentTarget.value)
              e.currentTarget.value = ''
            }
          }}
          className="border border-gray-300 text-black rounded px-3 py-2 w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoFocus
        />
      ) : null}
    </div>
  )
}
