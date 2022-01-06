import React from 'react'
import classes from './Settings.module.css'
import closebutton from '../../assests/closebutton.png'
import SetMinutes from './parametrs/SetMinutes'

const Settings = () => {
    return (
        <div className={classes.container}>
        <div className={classes.main}>
            <div className={classes.header}>
                <p>TIMER SETTING</p>
                <img className={classes.closebutton} src={closebutton} alt='closebutton'/>
            </div>
            <SetMinutes/>

            
            <div></div>
            
        </div>
        <div className={classes.footer}>
                <button >OK</button>
            </div>
        </div>
    )
}

export default Settings
