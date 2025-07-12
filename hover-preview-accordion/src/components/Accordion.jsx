import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Accordion({ data }) {
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(null);
    const [enter, setEnter] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);

    function handleEvent(image, { clientX, clientY }) {
        setEnter(true);
        setImage(image);
        setClientX(clientX);
        setClientY(clientY - 10);
    }

    return (
        <div className="accordion-container">
            {enter && <Preview image={image} clientX={clientX} clientY={clientY} />}
            {data.map((el) => (
                <div className="accordion-item" key={el.id}>
                    <button
                        className="accordion-header"
                        onClick={() => setIndex(index === el.id ? null : el.id)}
                        onMouseEnter={(e) => handleEvent(el.image, e)}
                        onMouseLeave={() => setEnter(false)}
                    >
                        <h4>{el.title}</h4>
                        {index === el.id ? (
                            <RxCross2 className="icon" />
                        ) : (
                            <AiOutlinePlus className="icon" />
                        )}
                    </button>
                    {index === el.id && (
                        <div className="accordion-body">
                            <p>{el.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


function Preview({image, clientX, clientY}) {
    return (
        <div
            className="preview"
            style={{
                position: "absolute",
                top: clientY,
                left: clientX,
                width: "500px",
                height: "330px",
                pointerEvents: "none",
            }}
        >
            <img src={image} alt="" />
        </div>
    )
}