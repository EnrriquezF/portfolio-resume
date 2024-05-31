import React, { useState } from 'react'

export default function About() {
    let [tab, setTab] = useState(0)

    let openTab = () =>{
        if (tab == 0) {
            setTab(1)
        } else {
            setTab(0)
        }
    }
  return (
    <section id='about'>
        {tab == 0?
        <>
            <button onClick={()=>openTab()}><h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg> About me</h2></button>
            <article>
                <p>Hi! I am Florencia, a frontend developer specialized on React.js and Vue.js frameworks. My main passion is web design,
                    along with the creation of attractive and functional user interfaces. Besides my React.js and Vue.js skills, I am familiarized with web design tools, like Figma.</p>
                <p>My main goal is to keep growing professionally: to make project contributions, to make a difference on the users' lives.</p>
            </article>
        </>:
        <>
            <button onClick={()=>openTab()}><h2> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> About me</h2></button>
        </>}
        
        
    </section>
  )
}
