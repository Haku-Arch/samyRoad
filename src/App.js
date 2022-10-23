import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import { useImages } from './queries/fetchQueries';
import { Page } from './components/Page';

const App = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  const increment = () => setPage(prev => prev+1)

  const decrement = () => setPage(prev => prev === 0 ? 0 : prev-1)

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const { isLoading, error, data } = useImages(search,page)
    
  return (
    <div className="App">
      <Navbar handleChange={handleChange}  value={search}/>
      {data && (
      <div className='d-flex flex-wrap justify-content-center mt-5'>
        {data?.map( (card) =>{
          return(
            <Cards card={card} key={card.id} id={card.id} />
          )
        }
        )}
      </div>
      )}
      <div className='d-flex justify-content-center mt-2'>
        <Page increment={increment}  decrement={decrement} page={page} />
      </div>
    </div>
  );
}

export default App;
