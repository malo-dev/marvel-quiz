import '../../App.css';
import {Route,Routes} from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../Signup';
import ErrorPage from '../ErrorPage';

function App() {
    return (
        <div>
            <Header />
                <Routes>
                    <Route path="/landing" element={<Landing/>} />
                    <Route path='welcome' element={<Welcome/>} />
                    <Route path='login' element={<Login/>} />
                    <Route path='signup' element={<SignUp/>} />
                    <Route  path='*' element={<ErrorPage/>} />
                    <Route  path='/' element={<Landing/>} />              
                </Routes>
            <Footer />
       </div>

      
    );
}

export default App