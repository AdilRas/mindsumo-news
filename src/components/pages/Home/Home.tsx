import React, {useState, useEffect} from 'react';
import ArticleCard from '../../util/ArticleCard/ArticleCard';
import {Article, ArticleInfo} from '../../../util/NewsAPI/NewsSource';
import {fetchTopHeadlines, fetchEverythingForTerm, getFilteredArticles, getFilteredArticlesByCategory} from '../../../util/NewsAPI/helper';
import {Button, Input, InputGroupAddon, InputGroupText, InputGroup} from 'reactstrap';
import styles from './Home.module.scss';
import Checkbox from '../../util/Checkbox/Checkbox';



const Home = () => {
    const [allArticles, setAllArticles] = useState<Article[] | never>([]);
    const [articles, setArticles] = useState<Article[] | never>([]);
    const [searchText, setSearchText] = useState("");
    const [filterOut, setFilterOut] = useState<Set<string>>(new Set([]));

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

    const handleChange = (event: any) => {
        setSearchText(event.target.value);
    }

    const handleToggle = (event: any, category: string) => {
        if(filterOut.has(category)) filterOut.delete(category);
        else filterOut.add(category);
        setArticles(getFilteredArticlesByCategory(allArticles, filterOut));
    }
    
    useEffect(() => {
        const fet = async () => {
            fetchTopHeadlines().then((response: Article[]) => {
                setAllArticles(response);
                setArticles(response);
            })
        }
        fet();
    }, []);

    return (
        <div>
            <div>
                <h1>Top Headlines</h1>
                <div className={styles.filterBar}>
                    <div className={styles.filters}>
                        <Checkbox text={"Sports"} handleToggle={(event: any) => handleToggle(event, 'sports')}/>
                        <Checkbox text={"Entertainment"} handleToggle={(event: any) => handleToggle(event, 'entertainment')}/>
                        <Checkbox text={"Technology"} handleToggle={(event: any) => handleToggle(event, 'technology')}/>
                    </div>
                    <div className={styles.navSearch}>
                        <InputGroup className="">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-zoom-split-in" />  
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search" type="text" id="search-bar" onChange={handleChange}/>
                            <Button color="primary" outline type="button" onClick={handleSearch}>Search</Button>
                        </InputGroup>
                    </div>
                </div>
                
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
