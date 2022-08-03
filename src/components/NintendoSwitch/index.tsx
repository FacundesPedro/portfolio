import React from 'react'
import './styles.css'

export const NintendoSwitch = () => {
    return (
    <>
        <input type="checkbox" id="screen" name="screen" />
        <main className="nintendo-switch">
        
            <aside className="actions left">
                <i className="minus">-</i>
                <div className="analogic">
                <div className="center-circle"></div>
                </div>
                <div className="buttons">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                </div>
                <div className="square"></div>
            </aside>
            <label className="middle" htmlFor="screen">
                <div className="screen">
                <div className="glass"></div>
                <span>Click here to0 <br/>
                    <strong>Animate</strong>
                </span>
                
                </div>   
            </label>
            
            <aside className="actions right">
                <i className="plus">+</i>
                <div className="analogic">
                <div className="center-circle"></div>
                </div>
                <div className="buttons">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                </div>
                <div className="circle"></div>
            </aside>
            
            </main>
        </>
    )
}