import { useEffect, useState } from 'react'
import './index.css'
import darkModeIcon from '../assets/images/dark-mode-icon.svg'
import mainImage from '../assets/images/main-img.svg'
import unityLightMode from '../assets/images/unity-light-mode.png'

/* Import Card Images */
import weatherForecastImage from '../assets/images/Cards/weather-forecast-image.png'
import quickonvertImage from '../assets/images/Cards/quickonvert-logo.png'
import generatorPassowordImage from '../assets/images/Cards/generator-password-image.png'



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
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
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
                  <a className="nav-link" href="#about-me">SOBRE</a>
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
      <main className='main-content'>
        <div className="container py-5 mt-5"> 
          <div className="row align-items-center g-5">
            <div className="col-md-7 pe-md-5">
              <h1 className='display-3 blue-text font-electrolize fw-bold mb-3'>Desenvolvedor Web e Unity<span className='text-black'>.</span></h1>
              <p className='h5 font-source-sans-3 fw-normal'>Olá, meu nome é Felipe. Sou um estudante, estou focado em aprender <span className='blue-text fw-bold'>C#</span>,<br /> <span className='blue-text fw-bold'>Unity</span> e o ecossistema <span className='blue-text fw-bold'>.NET</span></p>
              <p className='h5 blue-text font-orbitron fw-bold mt-4'>Estou sempre<br></br> buscando aprender.</p>
            </div>
            <div className="col-md-5 text-center">
              <img src={mainImage} alt="Ilustração Principal" className="img-fluid p-4 " id='main-image'/>
            </div>
          </div>
        </div>
      </main>
        <section className="container-fluid py-4" style={{ minHeight: '43rem', width: '100%' }}>
          <div className="container">
            <h1 id='about-me' className='fw-bold'>SOBRE MIM</h1>
            <hr 
              style={{ 
                width: '60px', 
                height: '9px',
                margin: '-2rem auto 8rem auto', 
                border: '0', 
                borderTop: '9px solid #407BFF', 
                borderRadius: '10px',
                opacity: 1,
              }} 
            />
            <div className="row d-flex align-items-start mt-5">
              <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
                <h1 className="mb-3 fw-bold">ME CONHEÇA</h1>
                <p className='h5 mt-3'>
                  Olá! Meu nome é <strong>Felipe</strong>. Tenho 17 anos e moro em São Paulo. Desde cedo, sempre fui engajado por <strong>tecnologia</strong> e <strong>programação</strong>. <br /> <br />

                  Atualmente, estou focado no estudo do ecossistema <strong>.NET</strong>, explorando as possibilidades que ele oferece para o desenvolvimento de inúmeras aplicações. <br /> <br />

                  Meu objetivo é me especializar como desenvolvedor <strong>Web</strong> e <strong>Unity</strong>, contribuindo para projetos. Estou em busca de mais aprendizado e aprimoramento das minhas habilidades.
                </p>
              </div>
              <div className="col-md-6 ps-md-5">
                <h1 className="mb-3 fw-bold">TECNOLOGIAS</h1>
                <div className="d-flex flex-wrap gap-3" id='tech'>
                    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" width="40"/>
                    <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" width="40"/>
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="40" />
                    <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" width="40" />
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="40" />
                    <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt=".NET" width="40" />
                    <img src="https://cdn.simpleicons.org/openjdk/007396" alt="Java" width={40} />
                    <img src={theme === 'dark' ? unityLightMode : 'https://cdn.simpleicons.org/unity/000000'} alt="Unity" width={40} />
                    <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="40"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <h1 id="projects-web" className="fw-bold text-center mb-5">PROJETOS WEB</h1>
            <hr 
              style={{ 
                width: '60px', 
                height: '9px',
                margin: '-2rem auto 8rem auto', 
                border: '0', 
                borderTop: '9px solid #407BFF', 
                borderRadius: '10px',
                opacity: 1,
              }} 
            />
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={weatherForecastImage} 
                  className="card-img-top" 
                  alt="Previsão do Tempo" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Weather Forecast</h5>
                  <p className="card-text">Consulte o clima do sua cidade usando a API Open Weather Map.</p>
                  <a href="https://felipecostaq.github.io/WeatherForecast/" target='_blank' rel='noopener noreferrer' className="btn btn-primary mt-auto">Ver Projeto</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={quickonvertImage} 
                  className="card-img-top" 
                  alt="Conversor de Unidades" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">QuicKonvert</h5>
                  <p className="card-text">Várias as conversões em um só lugar. Simples e rápido.</p>
                  <a href="https://quickonvert.netlify.app/" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={generatorPassowordImage}
                  className="card-img-top" 
                  alt="Projeto Exemplo" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Gerador de Senha</h5>
                  <p className="card-text">Um gerador de senha feito com Blazor Server.</p>
                  <a href="https://github.com/FelipeCostaq/gerador-senha" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default App
