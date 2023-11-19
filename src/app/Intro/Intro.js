import './Intro.css'
import AppBar from "./AppBar";
import bg1 from "../../assets/bg2.jpg";

const Intro = () => {
    return (
        <section className="intro" style={{ background: `url(${bg1})` }}>
            <AppBar></AppBar>
            <div className="spacer"></div>
            <span className='slogan'>plan . execute . iterate</span>
            <h1 className='text'>Think through Innovation</h1>
            <p className="description text">Thinking Through Innovation Inspiring Creative Solutions For Tomorrow In A World That Thrives On Constant Evolution And Progress, The Header "Think Through Innovation" Encapsulates A Powerful Mindset That Drives Individuals, Teams, And Organizations To Push The Boundaries Of Conventional Thinking. This Header Serves As A Rallying Cry, Inviting People To Embark On A Journey Of Discovery, Exploration, And Forward-Thinking.</p>
            <button className='get_started-btn'>Get Started</button>
        </section>
    );
}

export default Intro;