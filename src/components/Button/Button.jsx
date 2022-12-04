import { Btn } from './Button.styled';

export const Button = ({ text, onLoadeMore }) => {
  return (
    <Btn type="button" onClick={onLoadeMore}>
      {text}
    </Btn>
  );
};
