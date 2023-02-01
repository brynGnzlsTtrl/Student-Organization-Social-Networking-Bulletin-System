import React from 'react';

export default function Ellipse({ color, className }) {
    return (
        <svg className={className}  viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75.5" cy="75.5" r="75.5" fill={color} />
        </svg>
    )
}