import React from 'react';

interface IProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
  id?: string;
  name?: string;
}

const InputField: React.FC<IProps> = ({ type = 'text', value, placeholder, onChange, id, name, labelText }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <>
      {labelText ? (
        <label>
          {labelText}
          <input type={type} placeholder={placeholder} onChange={handleChange} value={value} id={id} name={name} />
        </label>
      ) : (
        <input type={type} onChange={handleChange} value={value} placeholder={placeholder} id={id} name={name} />
      )}
    </>
  );
};

export default React.memo(InputField);
