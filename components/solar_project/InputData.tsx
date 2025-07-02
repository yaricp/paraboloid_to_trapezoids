import { useState } from 'react';

type InputDataProps = {
    sendData: any;
}

const InputDataComponent = (props: InputDataProps) => {
    const { sendData } = props;

    const [focal_length, setInputFocus] = useState("");
    const [max_radius, setInputRadius] = useState("");
    const [body_size, setInputBody] = useState("");

    const handleChangeRadius = (event: any) => {
        setInputRadius(event.target.value);
    };
    const handleChangeFocus = (event: any) => {
        setInputFocus(event.target.value);
    };
    const handleChangeBody = (event: any) => {
        setInputBody(event.target.value);
    };

    return (
        <>
        <h1>Input parameters:</h1>
        Focal Length: <input
                type="text"
                name="focal_length"
                value={focal_length}
                onChange={handleChangeFocus}
            />
            <p></p>
            Max radius: <input
                type="text"
                name="max_radius"
                value={max_radius}
                onChange={handleChangeRadius}
            />
            <p></p>
            Size heating body: <input
                type="text"
                name="size_heating_body"
                value={body_size}
                onChange={handleChangeBody}
            />
            <p></p>
            <button
            onClick={() => sendData({
                "focal_length": focal_length,
                "max_radius": max_radius,
                "body_size": body_size
            })}
            >
                Send
            </button>
        </>
    )
}

export default InputDataComponent;