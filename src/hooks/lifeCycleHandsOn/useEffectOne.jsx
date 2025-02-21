import React, { useEffect } from 'react';

export default function useEffectOne({ name, age }) {
    useEffect(() => {
        console.log('any status update including mount happened');
        console.log(`Name: ${name}, Age: ${age}`);
    });
}