import React from 'react'
import styles from "./button.module.css"
const Button = (props) => {
    return (
        <div>
            <button className={styles.button}>{props.text}</button>
        </div>
    )
}

export default Button
