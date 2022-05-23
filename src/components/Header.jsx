import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter, FaGithub } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        <h1 className="title-text">あなたの名前</h1>
                        <h3 className="title-text">あなたの肩書き</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://twitter.com/"></a>
                                <FaTwitter color="white" size="2rem" />
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/"></a>
                                <FaGithub color="white" size="2rem" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};