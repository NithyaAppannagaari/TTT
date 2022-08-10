import logo from './logo.svg';
import './App.css';
var perf =require('./homePage.html');

class Index extends React.Component {
   render(){
      return (
         <iframe src={perf }></iframe>  
      );
   }
}

export default App;
