import "./App.css";


//Logic:
//0 1 2
//3 4 5
//6 7 8

function Square({value}){
  return <button className="square">{value}</button>
}


function App() {
  return (
    <>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="row">
        <Square/>
        <Square/>
        <Square/>
        </div>
        <div className="row">
        <Square/>
        <Square/>
        <Square/>
        </div>
      </div>
    </>
  );
}

export default App;
