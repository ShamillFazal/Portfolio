// import { Link, NavLink } from 'react-router-dom'
// import './index.scss'
// import sAvatar from '../../images/SAvatar.jpg'
// // import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

// const Sidebar = () => (
//   <div className="sidebar">
//     <Link className="logo" to="/">
//       <img src={sAvatar} alt="logo" />
//       {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
//     </Link>
//     <nav>
//       <NavLink exact="true" activeclassname="active" to="/">
//       {/* <FontAwesomeIcon icon={faGitHub}  color="#4d4d4e" /> */}
//       <FontAwesomeIcon icon="fa-brands fa-github" />
//       </NavLink>
//       <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
//         <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//       </NavLink>
//       <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
//         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//       </NavLink>
//     </nav>
//     <h1 className='title__name'>&lt;  Shamill Fazal  &gt;</h1>
//   </div>
// )

// export default Sidebar

import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import sAvatar from '../../images/SAvatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="sidebar">
    <Link className="logo" to="/">
      <img src={sAvatar} alt="logo" />
    </Link>
    <div className="sidebar-content">
      <h1 className='title__name'>&lt;Shamill Fazal&gt;</h1>
      <h2 className='title__job'>Software Engineer (he/him)</h2>
      <div className='email'>
          <button className='email__btn'>Email Me</button>
      </div>
      <nav>
        <NavLink exact activeClassName="active" className="github-link" to="/github">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size='2xl' />
        </NavLink>
        <NavLink exact activeClassName="active" className="linkedin-link" to="/linkedin">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size='2xl'/>
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Sidebar;
