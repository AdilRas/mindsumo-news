import React, {useState, useEffect} from 'react';
import ArticleCard from '../../util/ArticleCard/ArticleCard';
import {Article, ArticleInfo} from '../../../util/NewsAPI/NewsSource';
import {fetchTopHeadlines, fetchEverythingForTerm, getFilteredArticles, getFilteredArticlesByCategory} from '../../../util/NewsAPI/helper';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';

const Home = () => {
    const [allArticles, setAllArticles] = useState<Article[] | never>([]);
    const [articles, setArticles] = useState<Article[] | never>([]);
    const [searchText, setSearchText] = useState("");
    const [filterOut, setFilterOut] = useState<Set<string>>(new Set([]));

    // Upon hitting serach, this function will make an API call and update the articles from the result of that call.
    const handleSearch = (event: any) => {
        fetchEverythingForTerm(searchText).then((response: ArticleInfo[]) => {
            let res = getFilteredArticles(response);
            let ans: Article[] = [];
            for(let info of res) {
                ans.push({data: info, category: ""});
            }
            setAllArticles(ans);
            setArticles(getFilteredArticlesByCategory(allArticles, filterOut));
        });
    }

    // Updates the searchText property based on what's inside the textbox.
    const handleChange = (event: any) => {
        setSearchText(event.target.value);
    }

    // Function to toggle a checkbox and adjust which articles appear based on the new filter settings.
    const handleToggle = (event: any, category: string) => {
        if(filterOut.has(category)) filterOut.delete(category);
        else filterOut.add(category);
        setArticles(getFilteredArticlesByCategory(allArticles, filterOut));
    }
    
    // Makes the initial API call for top headlines.
    useEffect(() => {
        const fet = async () => {
            fetchTopHeadlines().then((response: Article[]) => {
                setAllArticles(response);
                setArticles(response);
            })
        }
        fet();
    }, []);

    // Render page
    return (
        <div>
            <div style={{paddingTop: "2em"}}>
                <SearchAndFilter handleChange={handleChange} handleToggle={handleToggle} handleSearch={handleSearch}/>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    {articles && articles.map((article: Article, key: number) => {
                        return(
                            <div key={key} style={{margin: "0.5em 0"}}>
                                <ArticleCard article={article}/>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
