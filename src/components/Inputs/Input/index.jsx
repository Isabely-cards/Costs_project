import styles from "./styles.module.css"
import { memo } from "react"

function Input({ type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                id={name}
                type={type} 
                name={name}
                value={value}
                onChange={handleOnChange} 
                placeholder={placeholder}
            />
        </div>
    )
}

const InputMemorized = memo(Input)
export default InputMemorized