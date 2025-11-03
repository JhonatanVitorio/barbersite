const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-[url('/bg-barber.jpg')] bg-cover bg-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Transforme sua Barbearia com um Site Profissional</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">Conquiste mais clientes com uma presença online poderosa. Assine nosso plano mensal e tenha um site completo e moderno.</p>
      <a href="#plans" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition">Ver Planos</a>
    </section>
  )
}

export default Hero