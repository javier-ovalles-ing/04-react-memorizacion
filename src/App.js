import Contador from "./Components/Contador";

function App() {
      return (
      <div>
        <h1>Memorizacion en React</h1>
        <hr/>
        <h2>Teoria</h2>
        <h3>
          <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
          >
            memo
          </a> 
        </h3>
        <hr/>
        
        <Contador/>
      </div>
      )
}

export default App;
