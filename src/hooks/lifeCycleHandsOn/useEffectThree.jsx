import React, { useEffect } from 'react';

export default function useEffectThree({ name, age }) {
    useEffect(() => {
        console.log('only happens when name changes');
    }, [name]);
}