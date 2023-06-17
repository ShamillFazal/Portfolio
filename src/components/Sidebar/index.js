import { Link } from 'react-router-dom'
import './index.scss'
import sAvatar from '../../images/SAvatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="sidebar">
    <Link className="logo" to="/">
      <img src={sAvatar} alt="logo" />
    </Link>
    <div className="sidebar-content">
      <h1 className="title__name">&lt;Shamill Fazal&gt;</h1>
      <h2 className="title__job">Software Engineer (he/him)</h2>
      <div className="email">
      <a className="email__btn" href="mailto:sam.h111@outlook.com">
        <button className="email__btn--btn">Email Me</button>
        </a>
      </div>
      <nav>
        <a
          className="github-link"
          href="https://github.com/ShamillFazal"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2xl" />
        </a>

        <a
          className="LinkedIn-link"
          href="https://www.linkedin.com/in/shamill-fazal"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2xl" />
        </a>
      </nav>
    </div>
  </div>
)

export default Sidebar
