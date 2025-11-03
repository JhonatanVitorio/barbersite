import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Plans from './components/Plans'
import Contact from './components/Contact'
import ChatBotAgendamento from './components/ChatBotAgendamento'
import AgendamentosUsuario from './components/AgendamentosUsuario'

function App() {
  return (
    <div className="font-sans text-white bg-neutral-900">
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Contact />

      {/* Chatbot de agendamento no final da página */}
      <div className="flex justify-center py-10 px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">Agende seu horário</h2>
          <ChatBotAgendamento />
        </div>
      </div>

      {/* Lista de agendamentos do usuário */}
      <div className="flex justify-center pb-16 px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">Seus Agendamentos</h2>
          <AgendamentosUsuario />
        </div>
      </div>
    </div>
  )
}

export default App
