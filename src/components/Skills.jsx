import React, { useState } from 'react'

export default function Skills() {
  let [tab, setTab] = useState(0)

    let openTab = () =>{
        if (tab == 0) {
            setTab(1)
        } else {
            setTab(0)
        }
    }
  return (
    <section id='skills'>
        {tab == 0?
          <button onClick={()=>openTab()}>
            <h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> Skills</h2>
          </button>
        :<>
          <button onClick={()=>openTab()}>
            <h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> Skills</h2>
          </button>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>Responsive Design</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Figma</li>
            <li>Vite</li>
            <li>User Experience</li>
            <li>User Experience Design</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>NPM Packages</li>
            <li>Postman</li>
            <li>Agile Methodologies - SCRUM</li>
          </ul>
        </>}
    </section>
  )
}
