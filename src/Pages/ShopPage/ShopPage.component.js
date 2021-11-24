import React from "react";
import ShopData from "./ShopData";
import { CollectionsPreview } from "../../Components/ShopPageComponents/CollectionsPreview/CollectionsPreview.component";


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: ShopData
        }

    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(collection => (
                        <CollectionsPreview key={collection.id} title={collection.title} items={collection.items} />
                    ))
                }
               
            </div>
        )
    }
}

export default ShopPage;