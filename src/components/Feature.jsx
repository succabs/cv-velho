export default function Feature(props) {
  return (
    <div className="neliö">
      <img className="w-full mb-4" src={props.picture} alt="Picture" />
      <h3 className="text-xl font-bold mb-2">{props.heading}</h3>
      <p className="text-gray-200">{props.text}</p>
    </div>
  );
}
