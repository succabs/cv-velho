export default function Feature(props) {
  return (
    <div className="neliö">
      <img src={props.picture} alt="Picture" />
      <h5 className="card-title">{props.heading}</h5>
      <p className="card-text">{props.text}</p>
    </div>
  );
}
