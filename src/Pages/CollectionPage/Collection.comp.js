import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem.component';
import { selectCollection } from '../../Redux/Shop/Shop.selector';

import './Collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
    console.log(match, collection)
    return (
        <div className='collection-page'>
            <h2 className='title'>{collection.title}</h2>
                <div className='items'>
                    {
                        collection.items.map(item => (
                            <CollectionItem key={item.id} {...item} />
                        ))
                    }
                </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);