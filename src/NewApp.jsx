import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InputBox from "./components/InputBox";
import DefaultFetchHookComponent from "./components/DefaultFetchHookComponent";
import UseEffectTester from "./components/UseEffectTester";
export default function NewApp(){ //react-심화 개념은 여기에서 다룸 ㅇㅇ
    return(
        <Router>
            <Routes>
                <Route path="/" element={<InputBox/>} />
                <Route path="/content" element={<InputBox/>} />
                <Route path="/default-fetch-hook" element={<DefaultFetchHookComponent/>} />
                <Route path="/use-effect-tester" element={<UseEffectTester/>} />
            </Routes> 
        </Router>
    ) 
}