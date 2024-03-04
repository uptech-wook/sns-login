import FacebookLogin from '@greatsumini/react-facebook-login';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>hihihi</div>
      <FacebookLogin
        appId="1464420907827345"
        onSuccess={(response) => {
          console.log('Login Success!', response);
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
      />
    </div>
  );
}

export default App;
