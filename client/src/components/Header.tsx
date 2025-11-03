const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-neutral-800 shadow-md">
      <img src="/logo.png" alt="Logo" className="h-10" />
      <nav className="space-x-6">
        <a href="#services" className="hover:text-yellow-400">Serviços</a>
        <a href="#plans" className="hover:text-yellow-400">Planos</a>
        <a href="#contact" className="hover:text-yellow-400">Contato</a>
      </nav>
    </header>
  )
}

export default Header