import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='header-container'>
            <div>
                <h1>Florencia Enrriquez</h1>
                <h2>Frontend Developer, Web Designer</h2>
                <nav>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/florencia-enrriquez-34bb61234/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li><a href="https://github.com/EnrriquezF" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://drive.google.com/file/d/1k2XMJ0MmgiQJUih-awxf4JVv-GeaVA2j/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li>Berazategui, Buenos Aires, Argentina</li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src="/image.jpg" alt="A photo of the portfolio owner" />
            </div>
        </div>
    </header>
  )
}
