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
        I am a diligent senior software engineer with 10 years of experience in business applications. I am eager to join a tech company that builds out-of-the-box solutions for regional clients. I am skilled in developing plans, managing projects, and user documentation.
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
