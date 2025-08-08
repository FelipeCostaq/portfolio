import React, { useEffect, useState} from 'react';
import './index.css';
import axios from 'axios';
import '../i18n'
import { Trans } from 'react-i18next'



import mainImage from '../assets/images/main-img.svg'

/* Import Cards Web Images */
import weatherForecastImage from '../assets/images/Cards/weather-forecast-image.png'
import quickonvertImage from '../assets/images/Cards/quickonvert-logo.png'
import generatorPassowordImage from '../assets/images/Cards/generator-password-image.png'

/* Import Cards Games Images */
import trinitroImage from '../assets/images/Cards/trinitro-image.png'
import avarusRexImage from '../assets/images/Cards/avarus-rex-image.png'


import unityLightIcon from '../assets/images/icons/unity-light-mode.png'
import mudblazorIcon from '../assets/images/icons/mudblazor.png'
import csIcon from '../assets/images/icons/cs.png'
import cssIcon from '../assets/images/icons/css3.png'
import darkModeIcon from '../assets/images/icons/dark-mode-icon.svg'
import lightModeIcon from '../assets/images/icons/light-mode-icon.png'
import { useTranslation } from 'react-i18next';

/* FLAGS */
import flagBrasilIcon from '../assets/images/flags/flagBrasil.svg'
import flagUKIcon from '../assets/images/flags/flagUK.svg'




function App() {
   const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
      document.documentElement.setAttribute("data-bs-theme", theme)
    }, [theme])

    const toggleTheme = () => {
      setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    const { t, i18n } = useTranslation()

    useEffect(() => {
      setCurrentLang(i18n.language);
    }, [i18n.language]);

    const [currentLang, setCurrentLang] = useState(i18n.language);

    const toggleLanguage = () => {
      const newLang = i18n.language === 'en' ? 'pt' : 'en';
      i18n.changeLanguage(newLang)
      setCurrentLang(newLang); 
    }



    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      setFormData({ ...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try{
        const response = await axios.post('https://sendemailapi-y7yd.onrender.com/Email/send', formData);

        if(response.status === 200){
         
          setFormData({name: '', email: '', message: ''});
        }
      }catch( error:unknown ){
        console.error(error);
      }
      }
    


  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Felipe C.</a>
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
                <a className="nav-link" href="#about-me" style={{color: 'var(--bs-text-color)'}}>{t('headerAboutText')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects-web" style={{color: 'var(--bs-text-color)'}}>{t('headerProjectsText')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" style={{color: 'var(--bs-text-color)'}}>{t('headerContactText')}</a>
                </li>
                <li>
                  <button className='button-dark-mode' onClick={toggleTheme}><img src={theme === 'dark' ? lightModeIcon : darkModeIcon} alt="Icon Dark Mode" /></button>
                  <button id='button-flag' onClick={toggleLanguage}>
                    <img id='flag' src={currentLang === 'pt' ? flagUKIcon : flagBrasilIcon} alt="Flag" />
                  </button>
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
              <h1 className='display-3 blue-text font-electrolize fw-bold mb-3'>{t('mainTitleText')}<span style={{color: 'var(--bs-text-color)'}}>.</span></h1>
              <p className='h5 font-source-sans-3 fw-normal'>
                <Trans i18nKey="mainAboutText">
                  Olá, meu nome é Felipe. Sou desenvolvedor web, crio interfaces usando
                  <span className="blue-text fw-bold">React</span> e
                  <span className="blue-text fw-bold">Blazor</span> e APIs usando C# e Node.js.
                  Também desenvolvo jogos na <span className="blue-text fw-bold">Unity</span>.
                </Trans>
              </p>
              <p className='h5 blue-text font-orbitron fw-bold mt-4'>{t("mainAsidePart1Text")}<br></br> {t("mainAsidePart2Text")}</p>
            </div>
            <div className="col-md-5 text-center">
              <img src={mainImage} alt="Ilustração Principal" className="img-fluid p-4 " id='main-image'/>
            </div>
          </div>
        </div>
      </main>
        <section className="container-fluid py-4" style={{ minHeight: '43rem', width: '100%' }}>
          <div className="container">
            <h1 id='about-me' className='fw-bold' style={{color: 'var(--bs-text-color)'}}>{t("sectionAboutTitleText")}</h1>
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
                <h1 className="mb-3 fw-bold" style={{color: 'var(--bs-text-color)'}}>{t("sectionAboutKnowTitleText")}</h1>
                <p className="h5" style={{ color: 'var(--bs-text-color)' }}>
                <Trans
                  i18nKey="sectionAboutKnowText"
                  components={[
                    <br key="br1" />,
                    <strong key="strong1" />,
                    <strong key="strong2" />,
                    <strong key="strong3" />,
                    <strong key="strong4" />,
                    <strong key="strong5" />
                  ]}
                />
                </p>
              </div>
              <div className="col-md-6 ps-md-5">
                <h1 className="mb-3 fw-bold" style={{color: 'var(--bs-text-color)'}}>{t("sectionAboutTechTitleText")}</h1>
                <div className="d-flex flex-wrap gap-3" id='tech'>
                    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" width="40"/>
                    <img src={cssIcon} alt="CSS3" width="40"/>
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="40" />
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="40" />
                    <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt=".NET" width="40" /> 
                    <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" alt="Blazor" width="40" />
                    <img src="https://logo.svgcdn.com/l/webassembly.svg" alt="Wasm" width="40" />
                    <img src={mudblazorIcon} alt="MudBlazor" width="40" />
                    <img src={theme === 'dark' ? unityLightIcon : 'https://cdn.simpleicons.org/unity/000000'} alt="Unity" width={40} />
                    <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="40"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <h1 id="projects-web" className="fw-bold text-center mb-5" style={{color: 'var(--bs-text-color)'}}>{t("sectionWebTitleText")}</h1>
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
                  <p className="card-text">{t("cardWeatherForecastDescription")}</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={cssIcon} width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="16" alt="JavaScript" />
                      JavaScript
                    </span>
                      <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://static.cdnlogo.com/logos/n/22/nodejs.svg" width="16" alt="NodeJS" />
                      Node.js
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      API Open Weather Map
                    </span>
                  </div>
                  <a href="https://felipecostaq.github.io/WeatherForecast/" target='_blank' rel='noopener noreferrer' className="btn btn-primary mt-auto">{t("cardWebButton")}</a>
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
                  <p className="card-text">{t("cardQuicKonvertDescription")}</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML5" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                    <img src={cssIcon} width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/dotnet/512BD4" width="16" alt="C#" />
                      .NET
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" width="16" alt="Blazor" />
                      Blazor
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://logo.svgcdn.com/l/webassembly.svg" width="16" alt="Wasm" />
                      Wasm
                    </span>
                    
                      <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={mudblazorIcon} width="16" alt="MudBlazor" />
                      MudBlazor
                    </span>
                  </div>
                  <a href="https://quickonvert.netlify.app/" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>{t("cardWebButton")}</a>
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
                  <h5 className="card-title">{t("cardGeneratorPasswordTitle")}</h5>
                  <p className="card-text">{t("cardGeneratorPasswordDescription")}</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/html5/E34F26" width="16" alt="HTML5" />
                      HTML5
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={cssIcon} width="16" alt="CSS3" />
                      CSS3
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/dotnet/512BD4" width="16" alt="C#" />
                      .NET
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="16" alt="JavaScript" />
                      JavaScript
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://static.cdnlogo.com/logos/b/67/blazor.svg" width="16" alt="Blazor" />
                      Blazor
                    </span>
                  </div>
                  <a href="https://github.com/FelipeCostaq/gerador-senha" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>{t("cardWebButton")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <h1 id="projects-web" className="fw-bold text-center mb-5" style={{color: 'var(--bs-text-color)'}}>{t("sectionUnityTitleText")}</h1>
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
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img 
                  src={trinitroImage} 
                  className="card-img-top" 
                  alt="Previsão do Tempo" 
                  style={{ height: '350px', objectFit: 'cover'}} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Trinitro</h5>
                  <p className="card-text">{t("cardTrinitroDescription")}</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/unity/FFFFFF" width="16" alt="Unity" />
                      Unity
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={csIcon} width="16" alt="C#" />
                      C#
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/itchdotio/FA5C5C" width="16" alt="Itch.io" />
                      Itch.io
                    </span>
                  </div>
                  <a href="https://game-soulcode.web.app/Trinitro/#home" target='_blank' rel='noopener noreferrer' className="btn btn-primary mt-auto">{t("cardUnityButton")}</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img 
                  src={avarusRexImage} 
                  className="card-img-top" 
                  alt="Conversor de Unidades" 
                  style={{ height: '350px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Avarus Rex</h5>
                  <p className="card-text">{t("cardAvarusRexDescription")}</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/unity/FFFFFF" width="16" alt="Unity" />
                      Unity
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src={csIcon} width="16" alt="C#" />
                      C#
                    </span>
                    <span className="d-flex align-items-center gap-1 badge rounded-pill text-bg-dark">
                      <img src="https://cdn.simpleicons.org/itchdotio/FA5C5C" width="16" alt="Itch.io" />
                      Itch.io
                    </span>
                  </div>
                  <a href="https://aragamestudio.itch.io/avarus-rex" className="btn btn-primary mt-auto" target='_blank' rel='noopener noreferrer'>{t("cardUnityButton")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id='contact' className='container py-5 mt-5'>
        </div>
        <div className="container py-5 " style={{ maxWidth: '700px' }}>
          <h2 className="mb-3 fw-bold" style={{color: 'var(--bs-text-color)'}}>{t("sectionContactTitleText")}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                {t("sectionContactNameLabel")}
              </label>
              <input type="text" className="form-control" id="name" placeholder={t("sectionContactNamePlaceholder")} value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder={t("sectionContactEmailPlaceholder")} value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                {t("sectionContactMessageLabel")}
              </label>
              <textarea className="form-control" id="message" rows={4} placeholder={t("sectionContactMessagePlaceholder")} value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-100">
              {t("contactSubmitButton")}
            </button>
            
            <p className='mt-3'>{t("sectionContactAsideText")}<a href="mailto:felipecostasiqu@gmail.com">felipecostasiqu@gmail.com</a></p>
          </form>
        </div>
        <div className='container py-5 mt-5'>
        </div>
        <footer className="text-light py-5" style={{backgroundColor: 'var(--bs-body-footer-color)'}}>
          <div className="container d-flex justify-content-between align-items-center">
            <span>&copy; 2025 Felipe Costa. {t("footerMessage")}</span>
            <div>
              <a
                href="https://github.com/FelipeCostaq"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
              <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/felipecostasiq/"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
    
  )
}

export default App
