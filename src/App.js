import './style/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="container flex-wrapper">
            <div class="logo-wrapper">
                <a class="logo" href="#">Layout</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            
        </div>
    </header>
    <div class="layout">
        <h1 class="container">Layout</h1>
        <p class="container">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="remember container">
        <h2>Lorem</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
    </div>
    <div class="tables container">
        <div class="apple">
            <img src="img/apple.png" width="75px" height ="75px" alt="html"></img>
            <h3>Apple</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>
        <div class="microsoft">
            <img src="img/microsoft.png" width="75px" height ="75px" alt="css"></img>
            <h3>Microsoft</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>
        <div class="linux">
            <img src="img/linux.svg.png" width="75px" height ="75px" alt="bootstrap"></img>
            <h3>Bookstrap</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>

    </div>
    <footer>
        <div class="container">
            <p>© 2023 All right reserved.</p>
            <div class="social">
                <img src="img/inst.svg" alt="instagram" class="inst"></img>
                <img src="img/Vk.svg" alt="Vk" class="vk"></img>
            </div>
        </div>
    </footer>

    </div>
  );
}

export default App;
