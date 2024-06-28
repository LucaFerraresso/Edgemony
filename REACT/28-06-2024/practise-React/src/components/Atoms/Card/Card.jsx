import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt="random image" />
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, fuga.
        </p>
      </div>
    </div>
  );
};

export default Card;
