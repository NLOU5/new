import logo from './logo.svg';
import './css/App.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"></meta>

function App() {

  const title = 'All-4-One';
  const web = 'web site'

  return (

    <div className="App">


<header class="Header">
<div class="contour">
<div class="Title">
        <h3>{ title } {web}</h3>

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

<div class="searchbardiv">
       <p class="searchBarText">Search on the page</p><input class="searchbar" type="text" placeholder="Search.."/>
       </div>
       </div>
  </header>


  </div>



  );
}

export default App;
