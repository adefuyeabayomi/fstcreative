import "./style.css";
interface InputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputPlain = ({ value, onChange }: InputProps) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="fst-input-main"
      />
    </div>
  );
};

export default InputPlain;

export const TextAreaPlain = ({ value, onChange }: InputProps) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="fst-textarea-main"
      />
    </div>
  );
};
