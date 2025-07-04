import { useEffect, useState } from 'react'
import './index.css'
import darkModeIcon from '../assets/images/dark-mode-icon.svg'
import mainImage from '../assets/images/main-img.svg'

function App() {
   const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
      document.documentElement.setAttribute("data-bs-theme", theme)
    }, [theme])

    const toggleTheme = () => {
      setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo here!</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">SOBRE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PROJETOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTATO</a>
                </li>
                <li>
                  <button className='button-dark-mode' onClick={toggleTheme}><img src={darkModeIcon} alt="Icon Dark Mode" /></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container py-5 mt-4">
          <div className="row align-items-center g-5">
            <div className="col-md-7 pe-md-5">
              <h1 className='display-3 blue-text font-electrolize fw-bold'>Desenvolvedor Web e Unity</h1>
              <p className='h5'>Olá, meu nome é Felipe. Sou um estudante, estou focado em aprender C#, Unity e o ecossistema .NET</p>
              <p className='h6 blue-text font-orbitron fw-bold'>Estou sempre buscando aprender.</p>
            </div>
            <div className="col-md-5 text-center">
              <img src={mainImage} alt="Ilustração Principal" className="img-fluid p-4 " id='main-image'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
