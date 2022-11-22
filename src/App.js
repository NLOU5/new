import logo from './logo.svg';
import './css/App.css';


function App() {

  const title = 'Welcome to the new blog';
  const chiffre = 3;

  return (

    <div className="App">

<div class="contour">

<header class="Header">
<div class="Title">
        <h3>{ title } {chiffre}</h3>

 </div>

      <nav class="navbar">
      <a class="nav-link" href="#">Nav 1 <span class="sr-only">(current)</span></a>
       <a class="nav-link" href="#">Nav 2</a>
      <a class="nav-link" href="#">Nav 3</a>
      <a class="nav-link" href="#">Nav 4</a>



       {/*<ul class="nav navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Nav 1 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Nav 2</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Nav 3</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Nav 4</a>
              </li>
          </ul> */}        
       </nav>
  </header>
  </div>

    </div>


  );
}

export default App;
