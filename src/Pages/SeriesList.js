import React from 'react'
import Header from '../Components/Header';
import NotFound from '../Pages/NotFound';

import {useHistory, Link} from 'react-router-dom';

export default function SeriesList(props) {
    const history = useHistory();

    const series = props.books.filter(b => b.series && b.series.toLowerCase().split(" ").slice(0,-1).join("-") === props.match.params.name);
    console.log(series);
    console.log("param name", props.match.params.name, typeof props.match.params.name);
    
    if(series === undefined){
        return(
            <NotFound />
        );
    }

    return (
        <>
            <Header/>
            <div className="container content-box p-3 d-flex flex-column align-items-center justify-content-center">
            <button type="button" className="btn btn-outline-info mt-2 align-self-start form-button" onClick={() => history.goBack()}>Back</button>
                <ul style={{listStyle: 'none'}}>
                    {series.map(s => (
                        <Link key={s.id} to={`/book/${s.id}`} style={{textDecoration: 'none', color: '#000'}}>
                            <li className="mb-4 form">
                                <div className="card flex-row" style={{background: 'transparent', color: '#fff', border: 'none'}}>
                                    <img className="card-img-left example-card-img-responsive" src={s.cover} alt="..." style={{width: '120px', height: '180px'}} />
                                    <div className="card-body">
                                        <h4 className="card-title h5 h4-sm">{s.title}</h4>
                                        <p className="card-text">{s.series}</p>
                                        <p className="card-text">{s.author}</p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}
