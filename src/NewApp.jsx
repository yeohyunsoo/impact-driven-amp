import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import InputBox from "./components/InputBox";

export default function NewApp(){ //react-심화 개념은 여기에서 다룸 ㅇㅇ
    return(
        <div>
            <h1>Okestro Knowledge Sharing System</h1>
            <InputBox />
        </div>
    )
}