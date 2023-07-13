import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const MobileInputField = (props) => {
    const handleChange = (value) => {
        props.OnChange(value);
    };
    return (
        <div className="py-4 w-full">
            <div className="bg-transparent border-b border-[#B1B1B1] w-full h-full flex flex-row">
                <PhoneInput
                    country={'in'}
                    placeholder='Mobile Number'
                    value={props.value}
                    onChange={handleChange}
                    containerStyle={{ backgroundColor: 'transparent', border: 'none', width: '60%' }}
                    inputStyle={{ color: 'white', background: 'transparent', border: 'none' }}
                    buttonStyle={{ backgroundColor: 'white', color: 'black' }}
                    dropdownStyle={{ backgroundColor: 'black', color: 'white' }}
                />

            </div>
        </div>
    );
};
export default MobileInputField;
