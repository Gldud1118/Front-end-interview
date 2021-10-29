import React from 'react';
import InputField from '@components/InputField';

interface IProps {
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyForm: React.FC<IProps> = ({ onFormChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange(e);
  };
  return (
    <div>
      <InputField onChange={handleChange} labelText="회사명" />
      <InputField onChange={handleChange} labelText="입사일" />
      <InputField onChange={handleChange} labelText="퇴사일" />
      <InputField onChange={handleChange} labelText="직급" />
      <InputField onChange={handleChange} labelText="담당업무" />
    </div>
  );
};

export default React.memo(CompanyForm);
