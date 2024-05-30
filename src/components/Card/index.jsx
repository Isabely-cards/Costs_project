import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleDelet = (projectId) => {
    console.log(projectId)
    fetch(`http://localhost:5000/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
    .then(setProjects(projects.filter(project => project.id !== projectId)))
      .catch(error => console.error('Error deleting project:', error))
  };

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div key={project.id} className={styles.div}>
          <h2 className={styles.name}>{project.name}</h2>
          <h3 className={styles.value}>Orçamento: R${project.budget}</h3>
          <p className={styles.category}>{project.category.name}</p>
          <div className={styles.div_btn}>
            <button className={styles.btn} onClick={() => navigate('/EditProject')}>
                <MdEdit />Editar
            </button>
            <button className={styles.btn} onClick={() => handleDelet(project.id)}>
                <MdDelete />Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
