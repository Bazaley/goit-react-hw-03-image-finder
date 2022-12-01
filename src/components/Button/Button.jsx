export const Button = ({ text, onLoadeMore }) => {
  return (
    <button type="button" onClick={onLoadeMore}>
      {text}
    </button>
  );
};
