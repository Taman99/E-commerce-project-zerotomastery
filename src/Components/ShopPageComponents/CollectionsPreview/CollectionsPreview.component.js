import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import './CollectionsPreview.styles.scss';
import { withRouter } from 'react-router';

const CollectionsPreview = ({ title, items, match, history }) => {

    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, indx) => indx < 4).map((item) => (
                        <CollectionItem key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionsPreview);