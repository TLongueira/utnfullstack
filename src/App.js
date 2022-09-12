import { useContext, useReducer } from 'react';
import { useEffect } from 'react';
import { actions } from './actions/noticiasActions';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { AppRouter } from './components/routers/AppRouter';
import noticiasReducer from './reducer/noticiasReducer';
import noticiasContext from './context/noticiasContext'

function App() {

  const [state, dispatch] = useReducer(noticiasReducer, {
    data: [],
    filter: {
      q:"",
      pais:"",
      categoria:""
    }
  });
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=ar&apiKey=c6f7a287fb6d45e68ca50c958701107d")
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: actions.set_data,
          payload: json,
        })
      );
  }, [])
  

  {
    if (!state.data) return <div>fetching news...</div>;
  }

  return (
    <noticiasContext.Provider value={{state,dispatch}}>
      <AppRouter />
    </noticiasContext.Provider>
  );
}

export default App;
