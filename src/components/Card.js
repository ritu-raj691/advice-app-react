import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <p className="advice">{props?.advice}</p>
        </div>
    );
};

export default Card;