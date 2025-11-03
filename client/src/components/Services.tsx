const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-10">O que oferecemos</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-neutral-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Design Responsivo</h3>
          <p>Sites que funcionam perfeitamente em computadores, tablets e celulares.</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Página de Serviços</h3>
          <p>Exiba os serviços da barbearia de forma clara e atrativa para seus clientes.</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Formulário de Contato</h3>
          <p>Receba mensagens direto no WhatsApp ou e-mail com um formulário simples.</p>
        </div>
      </div>
    </section>
  )
}

export default Services