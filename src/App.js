import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

import MainKz from './pages/Main';
import QuizKz from './pages/Quiz';
import FormKz from './pages/Form';
import ThanksKz from './pages/Thanks';
import ConfirmKz from './pages/Confirm';
import ShareKz from './pages/Share';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainKz />} />
        <Route path="/quiz" element={<QuizKz />} />
        <Route path="/form" element={<FormKz />} />
        <Route path="/thanks" element={<ThanksKz />} />
        <Route path="/confirm" element={<ConfirmKz />} />
        <Route path="/share" element={<ShareKz />} />
      </Routes>
    </Router>
  )
}

export default App;
