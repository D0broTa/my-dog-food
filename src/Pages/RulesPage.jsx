import React from "react";

const RulesPage = ({title}) => {
    document.title = `${title}`
    return (
        <>
            <h2>Пользовательское соглашение</h2>
            <p>Абзацы пользовательсткого соглашения</p>
        </>
        
    )
}

export default RulesPage;