import React, { useState } from 'react'

export default function Licenses() {
  let [tab, setTab] = useState(0)

  let openTab = () =>{
      if (tab == 0) {
          setTab(1)
      } else {
          setTab(0)
      }
  }
  return (
    <section id='licenses'>
       {tab == 0?
        <button onClick={()=>openTab()}><h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg> Licenses & Certifications</h2></button>:
        <>
          <button onClick={()=>openTab()}><h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> Licenses & Certifications</h2></button>
          <article>
            <h3>React.js Web Developer - UTN</h3>
                <a href="https://drive.google.com/file/d/1u396yoglxbc2KGvKa2-YJj3IZLXBZU9T/view"  target="_blank" rel="noopener noreferrer">View here</a>
          </article>
          <article>
            <h3>MERN Full Stack Developer - MindHub</h3>
                <a href="https://www.credly.com/badges/2df856c3-16c9-485f-9d4e-30df92c14a89/linked_in_profile"  target="_blank" rel="noopener noreferrer">View here</a>
          </article>
          <article>
            <h3>EF Standard English Test (EF SET) - C1 Advanced</h3>
                <a href="https://www.efset.org/cert/xGygcu"  target="_blank" rel="noopener noreferrer">View here</a>
          </article>
        </>
       }
    </section>
  )
}
