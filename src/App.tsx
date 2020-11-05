import React, {useState, useEffect} from 'react';
import './App.scss';
import { getFilteredArticles, getEverything, getValidSources } from './util/NewsAPI/helper';
import { ArticleInfo, NewsSource } from './util/NewsAPI/NewsSource';
import ArticleCard from './components/ArticleCard/ArticleCard';
import "argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css";
import "argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "argon-design-system-react/src/assets/scss/argon-design-system-react.scss";

const fetchData = async (term: string) => {
  let ans: ArticleInfo[] = [];
  await getEverything(term).then((response) => {
    ans = response;
  });
  return ans;
}

function App() {
  const [articles, setArticles] = useState<ArticleInfo[]>([]);
  useEffect(() => {
    fetchData("DAZN").then((response: ArticleInfo[]) => {
      setArticles(() => {
        // console.log(oldState);
        return getFilteredArticles(response)
      });
    }, (reason) => {
      console.log(reason);
    });
    // console.log(ans);
    // console.log(ans);
  }, []);
  return (
    <div className="App">
      <h1>Hi</h1>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      {articles.map((article: ArticleInfo, key: number) => {
        return(
          <div style={{margin: "0.5em 0"}}>
            <ArticleCard article={article}/>
          </div>
        );
      })
      }
      </div>
    </div>
  );
}

export default App;
