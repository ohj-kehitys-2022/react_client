import React, { useState } from 'react';

function MyHook(props) {
  const [fname, setFname] = useState(props.fname);

    return (
        <div>
            <h2>MyHook</h2>
            <input  onChange={e=>setFname(e.target.value)}/>
            <p>Hello {fname}</p>
            <button className='btn btn-primary' onClick={()=>setFname("No name")}>Set to NoName</button>
        </div>
    );
}

export default MyHook;