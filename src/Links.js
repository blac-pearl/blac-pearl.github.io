import { Link } from "react-router-dom";
const Links = () => {
    return (
      <div id="link-main">
        <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri" className="btn-link">
          <span id="links">Zuri Training</span>
        </a>
        <a href="http://books.zuri.team" target="_blank" rel="noreferrer" title="Books for Design and Coding" id="books" className="btn-link">
          <span id="links">Find amazing books on Design and Coding</span>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Blac_Pearl" target="_blank" rel="noreferrer" id="book__python" className="btn-link">
          <span id="links">Great Python Books for Beginners</span>
        </a>
        <a href="https://background.zuri.team" target="_blank" rel="noreferrer" id="pitch" className="btn-link">
          <span id="links">Free Background Checks on all new Coders</span>
        </a>
        <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design" className="btn-link">
          <span id="links">Best Design Books Available on Zuri for FREE</span>
        </a>
        <Link to="/Contact" target="_blank" rel="noreferrer" id="contact" className="btn-link">
          <span id="links">Contact Me</span>
        </Link>
        <div id="link-sub">
          <img src="slack.png" alt="slack-logo" />
          <img src="git.png" alt="git-logo" />
        </div>
      </div>
    );
  }
   
  export default Links;