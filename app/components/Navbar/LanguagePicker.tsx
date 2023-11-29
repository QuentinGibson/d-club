
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './dropdown.css';

export const LanguagePicker = () => {
  const options = [
    "EN", "ES"
  ];
  const defaultOption = options[0];
  return <Dropdown options={options} value={defaultOption} placeholder="Select a Language" />;

}