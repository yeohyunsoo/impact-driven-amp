import React, { useEffect } from 'react';

export default function useEffectTwo({ name, age }) {
    useEffect(() => {
        console.log('only happens on mount');
    }, []);
}