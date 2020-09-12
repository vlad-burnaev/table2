import React, {useState} from 'react';
import Table from "./Table/Table";


function App() {
    const smallRequestURL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    const largeRequestURL = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    const [showSmall, setShowSmall] = useState(false);
    const [showLarge, setShowLarge] = useState(false);
    return (
        <div className="app-wrapper">
            <h1>Тестовое задание</h1>
            <button onClick={() => {setShowSmall(true);setShowLarge(false);}}>Small dataset</button>
            <button onClick={() => {setShowLarge(true);setShowSmall(false);}}>Large dataset</button>
            {showSmall && <Table requestURL={smallRequestURL}/>}
            {showLarge && <Table requestURL={largeRequestURL}/>}
        </div>
    );
}

export default App;
