import React, { useState } from 'react'

export default function Projects() {
  let [tab, setTab] = useState(0)

  let openTab = () =>{
      if (tab == 0) {
          setTab(1)
      } else {
          setTab(0)
      }
  }
  return (
    <section id='projects'> 
      {tab == 0? <button onClick={()=>openTab()}><h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> Projects</h2></button>:
      <>
        <button onClick={()=>openTab()}><h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> Projects</h2></button>
        <article>
            <h3>myTaskList</h3>
            <p>A task list webpage made as a project for a UTN course. Designed in Figma, using a warm orange palette to stimulate energy in the user,
                it is made with ReactJS + Vite, its hooks, and vanilla JS. As the project is solely based on the client side,
                it relied on localStorage.</p>
                <a href="https://my-task-list-alpha.vercel.app/"  target="_blank" rel="noopener noreferrer"> Website Link</a>
                <a href="https://github.com/EnrriquezF/myTaskList" target="_blank" rel="noopener noreferrer">GitHub Repository Link</a>
        </article>
        <article>
            <h3>MyTinerary</h3>
            <p>
            A tourism destinations webpage made as a project for MindHub Bootcamps. This repository is for the front page development,
            made with React+Vite. Its design was made in Figma, using a green palette to stimulate a calming sense of renewal in the user.
            <br />
            This project has a server-side.
            </p>
                <a href="https://mytinerary-enrriquez.vercel.app/"  target="_blank" rel="noopener noreferrer"> Website Link</a>
                <a href="https://github.com/EnrriquezF/mytinerary-Enrriquez" target="_blank" rel="noopener noreferrer">GitHub Repository Link</a>
        </article>
        <article>
            <h3>Portfolio</h3>
            <p>
              A portfolio webpage to show my projects. Made with React.js+Vite. Designed in Figma, based on a beige palette.
            </p>
                <a href="#"  target="_blank" rel="noopener noreferrer"> Website Link</a>
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repository Link</a>
        </article>
      </>
      }
        
    </section>
  )
}
