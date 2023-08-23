import styles from "./styles.module.css"
import { memo } from "react"

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}> { text }: </label>
            <select 
                name={name}
                id={name}
                value={value || ''}
                onChange={handleOnChange}
            >
                <option>Selecione uma opção:</option>
                {
                    options.map(option => (
                        <option
                            key={option.id}
                            value={option.id}
                        
                        >
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

const SelectMemorized = memo(Select)
export default SelectMemorized   