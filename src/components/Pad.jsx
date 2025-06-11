export default function Pad(props){
    return (
        <button style={{backgroundColor: props.color}} 
        onClick={() => props.switch(props.id)} className={props.isOn ? "on": ""} ></button>
    );
};