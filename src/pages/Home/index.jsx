import styles from "./styles.module.css"
import savings from "../../assets/savings.svg"
import LinkButton from "../../components/LinkButton"

export default function Home() {
    return(
        <section className={styles.home_container}>

            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkButton 
                to={"/newProject"}
                text={"Criar projeto"}
            />
            <img 
                src={savings}
                alt="savings"
            
            />

        </section>
    )
}