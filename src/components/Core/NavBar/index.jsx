import styles from "./styles.module.css"
import logo from '../../../assets/costs_logo.png'
import Container from "../../Container"
import { Link } from 'react-router-dom'
import {v4 as uuid4} from 'uuid'

function NavBar(prosp) {
    const objectItens = [
        {to: '/', nome: 'Home'},
        {to: '/project', nome: 'Projetos'},
        {to: '/company', nome: 'Empresa'},
        {to: '/contact', nome: 'Contato'}
        
    ]
    return(
    
        <div className={styles.navbar}>
            <Container>
                <Link to={"/"}>
                    <img src={logo} alt="Logo do site(Moeda)"/>
                </Link>
                <ul className={styles.list}>
                    {objectItens.map(item => {
                        return(
                            <li key={uuid4()} className={styles.item}>
                                <Link to={item.to} >{item.nome} </Link >
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </div>
    )
}

export default NavBar