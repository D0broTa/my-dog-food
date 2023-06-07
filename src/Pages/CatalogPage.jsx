import React from "react";
import Sorting from "../components/Sorting/Sorting";
import CardList from "../components/CardList/CardList";
import SearchResult from "../components/SearchResult/SearchResult";

function CatalogPage({title}) {
    
    document.title = `${title}`
    
    return (
        <>
            <SearchResult></SearchResult>
            <Sorting></Sorting>
            <CardList></CardList>
        </>
        
    )
}

export default CatalogPage;