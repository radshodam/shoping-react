import React from 'react'
import Styles from './store.module.css'
import {eng} from '../../resources/Resources'
const Store = () => {
    return (
        <div className={Styles.root}>
            <h2 className={Styles.banner}>{eng.banner}</h2>
        </div>
    )
}

export default Store
