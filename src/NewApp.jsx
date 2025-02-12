import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InputBox from "./components/InputBox";

export default function NewApp(){ //react-심화 개념은 여기에서 다룸 ㅇㅇ
    return(
        <Router>
            <Routes>
                <Route path="/" element={<InputBox/>} />
                <Route path="/content" element={<InputBox/>} />
            </Routes> 
        </Router>
    ) 
}