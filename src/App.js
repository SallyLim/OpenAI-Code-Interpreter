import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Component/LandingPage/LandingPage';
import Qna from './Component/QnA/Qna';
import SearchHistory from './Component/SearchHistory/SearchHistory';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/ai" element={<Qna/>}/>
        <Route path="/history" element={<SearchHistory />}/>
        <Route path="/" element={<LandingPage/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
