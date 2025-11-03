const Plans = () => {
  return (
    <section id="plans" className="py-16 px-4 bg-neutral-950">
      <h2 className="text-3xl font-bold text-center mb-10">Planos</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className="bg-neutral-800 p-6 rounded-xl w-full md:w-1/2 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Plano Essencial</h3>
          <p className="mb-4">Site moderno + hospedagem + domínio + manutenção</p>
          <p className="text-3xl font-bold mb-6">R$ 79/mês</p>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full">Assinar</a>
        </div>
        <div className="bg-yellow-500 text-black p-6 rounded-xl w-full md:w-1/2 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Plano Premium</h3>
          <p className="mb-4">Inclui tudo do plano essencial + SEO + Instagram integrado</p>
          <p className="text-3xl font-bold mb-6">R$ 119/mês</p>
          <a href="#contact" className="bg-black hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-full">Assinar</a>
        </div>
      </div>
    </section>
  )
}

export default Plans