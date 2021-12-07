
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../../Redux/Shop/Shop.selector';
import  CollectionsPreview  from '../CollectionsPreview/CollectionsPreview.component';
import './CollectOverview.styles.scss';

const CollectOverview = ({collections}) => {
    // collections is an object , Object.values give all values of keys in collections obj as an array[]
    const collectionsArray = Object.values(collections); 
    return (
           <div className='collections-overview'>
            {
                collectionsArray.map(collection => (
                    <CollectionsPreview key={collection.id} title={collection.title} items={collection.items} />
                ))
                
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps) (CollectOverview);