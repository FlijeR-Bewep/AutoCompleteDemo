import './App.css';
import AutoComplete from './components/AutoComplete/AutoComplete';
import { useFetch } from './utils/hooks';

function App() {  
  const {data, isLoading, error} = useFetch('https://pokeapi.co/api/v2/pokemon')   

  if (error) {
    return <div className="App">  
              <h1>AutoComplete Component Demo</h1>           
              <h2>Oups something wrong</h2>
            </div>
  }
  else if (!isLoading && !data?.results) {
    return <div className="App">                  
              <h1>AutoComplete Component Demo</h1>         
              <h2>No datas</h2>
            </div>
  }

  return (
    <div className="App"> 
      <h1>AutoComplete Component Demo</h1>     
      {isLoading ? (
            <div className="LoaderWrap">
              <div className="Loader" data-testid="loader" />
            </div>
          ) : (
            <AutoComplete datas={data?.results} />
          )}
    </div>
  );
}

export default App;
