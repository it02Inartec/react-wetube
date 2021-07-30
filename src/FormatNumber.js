import React from 'react'

export const FormatNumber = ({ number }) => (
    <span>{ new Intl.NumberFormat().format( number ) }</span>
);
