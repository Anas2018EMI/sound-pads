import { useState } from "react"
import Pad from "./components/Pad";
import padsDats from "./pads"

export default function App(props) {

    const [pads, setPads] = useState(padsDats);

    function toggle(id) {
        console.log(id);
        setPads( pads => pads.map( pad => 
            pad.id === id ? {...pad, on: !pad.on} : pad
        ))}

    return (

        <main>
            <div className="pad-container">
                {pads.map(pad => <Pad key={pad.id}  id={pad.id} 
                color={pad.color} isOn={pad.on} switch={toggle} />
                )}
            </div>
        </main>
    )
}