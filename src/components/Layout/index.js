import './index.scss'
import Sidebar from '../Sidebar'
import "@fontsource/space-mono"

const Layout = () => {
  return (
    <>
    <div className='container'>
      <div className="left-section">
        <Sidebar />
      </div>
      <div className="right-section">
        <div className="content">
        <h1 className='title__about'>&lt;About Me&gt;</h1>
        <p className='about__text'>
        Former electrician, School of Code bootcamp graduate pursuing my passion for technology. With a strong background in problem-solving and attention to detail, I bring a methodical approach to crafting user-friendly applications. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js.
        </p>

        </div>
        <div className='buttons'>
        <button className='buttons__cv'>CV</button>
        <button className='buttons__portfolio'>Portfolio</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Layout
