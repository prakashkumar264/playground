import './App.css';

function App() {


  let passedinImage="neu.jpg"

  let queryString = `https://mydomain.com/images/${passedinImage}`

  return (
    <div >
    <header>
         <a href="https://www.wynisco.com/"  target="_blank" rel="noopener noreferrer"><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" height="50px" width="100px"/></a>  
      <br />
     <img src={queryString} />
      <h3>Useful Links</h3>
      <ul>
      <div class="hoverRed">
        <li>Set up call with instructor : <a href="https://calendly.com/wynisco/isa-information-session?month=2021-02" target="_blank" rel="noopener noreferrer">Here</a> or email sachin@wynisco.com</li>
        </div>
        <li>Apply for the program : <a href="https://www.wynisco.com/apply.html" target="_blank">Here</a></li>
        <li>Website : <a href="https://www.wynisco.com/bootcamp.html" target="_blank">Here</a></li>
      </ul>

<dvi class="backdemo">

</dvi>
      <h2>Core Topics</h2>
      <h2>Welcome to the course</h2>
      <h4>Application Architecture</h4>


    </header>



    </div>
  );
}

export default App;
