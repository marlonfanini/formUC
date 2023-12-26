import React from 'react'
import '@/styles/styles.css';

function Checkbox1() {
    return (
        <div>
            <label className="custom-checkbox">
                <input type="checkbox" />
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                    <circle cx="12" cy="12" r="8" fill="#072f5a" />
                </svg>
            </label>
        </div>
    )
}

export default Checkbox1;