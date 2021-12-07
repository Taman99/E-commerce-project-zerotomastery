import React from 'react'
import './MenuItem.styles.scss'
import { withRouter } from 'react-router';

function MenuItem({title , imageUrl , linkUrl , size , history, match }) {
    return (
      
            <div className={ `${size} menu-item` } onClick={ () => history.push(`${match.url}${linkUrl}`) }> 
                <div className="background-image"  style={
                    {
                        backgroundImage: `url(${imageUrl})`
                    }
                }></div>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">{'shop now'.toUpperCase()} </span>
                </div>
            </div>
    )
}

export default withRouter(MenuItem);
