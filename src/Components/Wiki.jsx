import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        // const { data } = await fetch(`https://en.wikipedia.org/w/api.php`, {method:'GET',
        params: {
          action: `query`,
          list: `search`,
          origin: `*`,
          format: `json`,
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
        <div>{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        <div className="content">
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>{" "}
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div>{renderedResults}</div>
    </div>
  );
};
export default Search;
