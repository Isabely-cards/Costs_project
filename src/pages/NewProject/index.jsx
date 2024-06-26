import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../../components/Forms/ProjectForm'


export default function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
                .then(() => {
                    navigate('/myProject')
                })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}