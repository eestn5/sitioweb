import React from 'react';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { SearchContext } from '../../context/search';
const Search = () => {
  const { value, setValue, results, setFResults } = React.useContext(SearchContext);
  const setResults = (res) => {
    if (results.length >= 1 && value && value.length > 1) {
      setFResults(res);
    } else if (value && value.length <= 1) {
      setFResults([{
        title: "Escribe al menos 2 letras"
      }]);
    } else {
      setFResults([{
        title: "No se han encontrado resultados"
      }]);
    }
  }

  React.useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then(res => res.json())
      .then(data => {
        setResults(
          data.articles.filter(
            article => article.title.toLowerCase().includes(value.toLowerCase())
          )
        )
      })
  }, [value]);
  return (
    <React.Fragment>
      <section className="navbar__main--search">
        <input type="text" placeholder="Buscar..." value={value} onChange={
          (e) => setValue(e.target.value)
        } />
        <button className="navbar__main--search-button">
          <IoSearch />
        </button>
        <section className="navbar__main--search-results">
          {
            results.map(result => (
              <Link href={`http://localhost:3000/${result.url}`} key={result.title}>
                <a className="navbar__main--search-results-item">
                  {result.title}
                </a>
              </Link>
            ))
          }
        </section>
      </section>
    </React.Fragment>
  )
}
export default Search;