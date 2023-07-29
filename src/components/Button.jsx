import "../styles/button.css";
function Button({ message, color, onClick }) {
  return (
    <>
      <button className={`btn btn-${color} onClick={onClick}`}>
        {message}
      </button>
    </>
  );
}
export default Button;
