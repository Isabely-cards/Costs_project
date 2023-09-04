import styles from "./styles.module.css"
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import {v4 as uuidv4} from 'uuid'


function Footer() {
    const propsIcon = {size: 30}
    const objectToMap = [
        {elemento:<FaGithub{...propsIcon}/>, link: 'https://github.com/Isabely-cards'},
        {elemento:<FaInstagram{...propsIcon}/>, link:' https://github.com/Isabely-cards'},
        {elemento:<FaLinkedin{...propsIcon}/>, link: 'https://github.com/Isabely-cards'}
    ]
    const redireactSocialMedia = (link) => {
        const newWindow = window.open(link)
        if(newWindow !== null) newWindow.opener = null;
    }


    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                {
                    objectToMap.map(item => {
                    return (
                        <li key={uuidv4()} onClick={() => redireactSocialMedia(item.link)}>
                            {item.elemento}
                
                        </li>
                    )})
                }
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer