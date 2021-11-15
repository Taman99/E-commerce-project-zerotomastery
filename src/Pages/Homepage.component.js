import React from 'react'
import './Homepage.styles.scss'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">shop now </span>
                    </div>
                </div>

                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">t-shirts</h1>
                        <span className="subtitle">shop now </span>
                    </div>
                </div>

                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">Jeans</h1>
                        <span className="subtitle">shop now </span>
                    </div>
                </div>
                
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">Pants</h1>
                        <span className="subtitle">shop now </span>
                    </div>
                </div>
                

                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">Trousers</h1>
                        <span className="subtitle">shop now </span>
                    </div>
                </div>
                
            </div>            
        </div>
    )
}
