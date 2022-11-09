import {useState} from 'react'
import {Link} from 'react-router-dom'

const  Search = (props) => {
  const [searchText, setSearchText] = useState('');
  const [matched, setMatch] = useState([]);
  
  const [display, updateDisplay] = useState(false);
  const [focus, updateFocus] = useState(-1);

  const handleSearch = (text, keys) => {
    setSearchText(text);
    console.log(text, typeof text);
    const lowText = text.toLowerCase();
    const found = props.books.filter(b => keys.some(k => String(b[k]).toLowerCase().includes(lowText)));
    console.log("Found: ", found);
    setMatch(found);
  }

  const hideAutoSuggest = (e) => {
    e.persist();
    if(e.relatedTarget && e.relatedTarget.className === 'autosuggest-link'){
      return;
    }

    updateDisplay(true);
    updateFocus(-1);
  }

  const showAutoSuggest = () => {
    updateDisplay(false);
  }

  return (
    <>
      <div className="input-group mb-3" style={{width: 500}}>
        <input type="text" className="form-control form-input" style={{height: 40}} placeholder="Search Books ..." aria-label="Recipient's username" aria-describedby="button-addon2" value={searchText} onChange={e => handleSearch(e.target.value, ['title', 'author', 'series'])} onFocus={showAutoSuggest} onBlur={hideAutoSuggest} />
        <button className="btn btn-outline-info form-button" style={{height: 40}} type="button" id="button-addon2">Search</button>
      </div>
      <div style={{width: 500}}>
      <ul className="search-suggestions" style={{listStyle: 'none'}}>
        {(!display && searchText) && <li key={-1} className={focus === -1 ? 'active' : null}>{`Search for ${searchText}`}</li>}
        {!display && matched.map(m =>(
          <Link key={m.id} to={`/book/${m.id}`} style={{textDecoration: 'none', color: '#000'}} className="autosuggest-link">
            <li className={focus === m.id ? 'active' : null}>
              <div className="card flex-row search-result">
                <img className="card-img-left example-card-img-responsive" src={m.cover} alt="..." style={{width: '90px', height: '150px'}} />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">{m.title}</h4>
                  <p className="card-text">{m.series}</p>
                  <p className="card-text">{m.author}</p>
                </div>
              </div>
            </li>  
          </Link>
        ))}
      </ul>
    </div>
  </>
  );
}

export default  Search;
