import React from "react";
import { Route } from "react-router";
import CollectOverview from "../../Components/ShopPageComponents/CollectionsOverview/CollectOverview.comp";
import CollectionPage from "../CollectionPage/Collection.comp";


const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}



export default  (ShopPage);