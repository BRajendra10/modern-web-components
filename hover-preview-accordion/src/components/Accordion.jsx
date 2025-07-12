import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Accordion({ data }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="accordion-container">
            {data.map((el) => (
                <div className="accordion-item" key={el.id}>
                    <button
                        className="accordion-header"
                        onClick={() => setIndex(index === el.id ? null : el.id)}
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
