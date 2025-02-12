import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import InputBox from "./components/InputBox";

export default function NewApp(){ //react-심화 개념은 여기에서 다룸 ㅇㅇ
    return(
        <Routes>
            <Route path="/" element={<InputBox/>} />
            <Route path="/content" element={<InputBox/>} />
        </Routes>   
    )
}