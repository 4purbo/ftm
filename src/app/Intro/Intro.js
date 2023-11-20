// File name: Intro.js

// Description: Responsible for the Intro section of the site. Only the appbar is refactored into
// another component for the sake of the beauty of code.

import './Intro.css'
import AppBar from "./AppBar";
import bg1 from "../../assets/bg1.jpg";

const Intro = () => {
    return (
        <section className="intro" style={{ background: `url(${bg1})` }}>
            {/* [AppBar] (responsible for the appbar on the site) <- path(./AppBar.js) */}
            <AppBar></AppBar>
            <div className="spacer"></div>
            <span className='slogan'>plan . execute . iterate</span>
            <h1 className='text'>Think through Innovation</h1>
            <p className="description text">Thinking through innovation, inspiring creative solutions for tomorrow in a world that thrives on constant evolution and progress. The header "Think Through Innovation" encapsulates a powerful mindset that drives individuals, teams, and organizations to push the boundaries of conventional thinking. This header serves as a rallying cry, inviting people to embark on a journey of Discovery, Exploration, And Forward-Thinking.</p>
            <button className='get_started-btn'>Get Started</button>
        </section>
    );
}

export default Intro;