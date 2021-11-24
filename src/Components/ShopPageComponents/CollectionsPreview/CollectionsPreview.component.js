import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import './CollectionsPreview.styles.scss';

export const CollectionsPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {                  
                   items.filter((item, indx) => indx < 4 ).map( ({id , ...item}) => (
                    <CollectionItem key={id} {...item} />
                ))
                }
            </div>
        </div>
    )
}
