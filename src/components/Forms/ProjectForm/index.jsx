import styles from "./styles.module.css"
import SubmitButton from "../../Buttons/SubmitButton"
import Select from "../../Inputs/Select"
import Input from "../../Inputs/Input"
import { useEffect, useState } from "react"


export default function ProjectForm({ handleSubmit, btnText, projectData}) {
    const[categories, setCategories] = useState([])
    const[project, setProject] = useState(projectData || ([]))

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET', 
            headers: {
                'content-type': 'application/json'
            },
        }) 
            .then(response => response.json())
                .then(data => setCategories(data))
    }, [])

    function submit(e) {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject(
            {
                ...project,
                category: {
                    id: e.target.value, 
                    name: e.target.options[e.target.selectedIndex].text
                }
            }
        )
    }

    return (
        <form 
            onSubmit={submit}
            className={styles.form}
        >
            <Input
                type="text"
                name="name"
                value={project.name}
                text="Nome do prejeto"
                handleOnChange={handleChange}
                placeholder="Insira o nome do projeto"            
            />
            <Input
                type="number"
                name="budget"
                value={project.budget}
                text="Orçamento do prejeto"
                handleOnChange={handleChange}
                placeholder="Insira o orçamento do projeto"            
            /> 

            <Select  
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}