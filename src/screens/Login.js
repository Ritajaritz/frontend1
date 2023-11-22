import '../styles/App.css';
import '../styles/Login_screen_style.css';
import Login_box from "../components/login_box";

function Login(){
    return (
        <div className="background">
            <h1 id="header_login">
               Welcome To Employee Time Tracker
            </h1>
            <Login_box/>
        </div>
    );
}

export default Login;