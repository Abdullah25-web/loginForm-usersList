import {BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
          {/* <Login /> */}
          {/* <Flex /> */}
          {/* <Login/>
          <br/>
          <br/>
          <br/>

          <Users/>
          <br/>
          <br/>
          
          <Users/>
          <br/>
          <br/>
          <Users/> */}
          

           <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="users" element={<Users /> }  />
          
          
         
        {/* </Route>  */}
      </Routes>
    </BrowserRouter> 


    </div>
  );
}

export default App;
