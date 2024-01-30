import React, { useState, useEffect } from 'react';
import '@/styles/checkbox.css';
import { v4 as uuidv4 } from 'uuid';

interface CheckboxItemsProps {
    checkboxLabels: string[];
}

interface CheckboxState {
    [key: string]: boolean;
}

const CheckboxItems: React.FC<CheckboxItemsProps> = ({ checkboxLabels }) => {
    const initialState: CheckboxState = Object.fromEntries(
        checkboxLabels.map((label) => [label, false])
    );

    const [checkboxes, setCheckboxes] = useState<CheckboxState>(initialState);
    const [uuidMap, setUuidMap] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const uuidMap: { [key: string]: string } = {};
        checkboxLabels.forEach((label) => {
            uuidMap[label] = uuidv4();
        });
        setUuidMap(uuidMap);
    }, [checkboxLabels]);

    const handleCheckboxChange = (key: string) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [key]: !prevCheckboxes[key],
        }));
    };

    return (
        <div className="container500">
            <ul className="ks-cboxtags">
                {checkboxLabels.map((label) => (
                    <li key={label} className={checkboxes[label] ? 'ks-selected' : ''}>
                        <input
                            type="checkbox"
                            id={`checkbox${uuidMap[label]}`} 
                            value={label}
                            checked={checkboxes[label]}
                            onChange={() => handleCheckboxChange(label)}
                        />
                        <label htmlFor={`checkbox${uuidMap[label]}`}>{label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CheckboxItems;
