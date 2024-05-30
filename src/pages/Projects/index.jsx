import styles from "./styles.module.css";
import Card from "../../components/Card";
import { LinkButton } from "../../components/LinkButton";

export default function Project() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_div}>
        <h2 style={{ fontSize: "2rem" }}>Meus Projetos</h2>
        <LinkButton to={"/newProject"} text={"Criar projeto"} />
      </div>
      <Card />
    </div>
  );
}
