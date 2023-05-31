import React from "react";
import Sorting from "../components/Sorting/Sorting";
import CardList from "../components/CardList/CardList";

function CatalogPage({title}) {
    
    document.title = `${title}`
    
    return (
        <>
            <Sorting></Sorting>
            <CardList></CardList>
        </>
        
    )
}

export default CatalogPage;