import axios from 'axios';
import sources from '../../data/sources.json';
import {ArticleInfo, NewsSource, SourceIdentity} from './NewsSource';
import {validIds, validNames} from '../../data/validSources';

const baseURL: string = 'http://newsapi.org/v2/';

const allowedCategories = new Set(["sports", "entertainment", "technology"]);

const getEverything = async (term: string) => {
    let ans: ArticleInfo[] = [];
    await axios.get(`${baseURL}/everything?q=${encodeURIComponent(term)}`, {
        headers: {
            'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
        }
    }).then((response) => {
        ans = response.data.articles;
    });
    return ans;
}

const getFilteredArticles = (articles: ArticleInfo[]) => {
    return articles.filter((element: ArticleInfo) => {
        // console.log(element.source);
        return validNames.has(element.source.name) || validIds.has(element.source.id);
    });
}

const getValidSources = (): NewsSource[] => {
    let ans: NewsSource[] = [];
    let source: NewsSource;
    for (source of sources.sources) {
        if(source.category === "entertainment" || source.category === "sports" || source.category === "technology") {
            ans.push(source);
        }
    }
    return ans;
}

const getCategory = (src: SourceIdentity) => {
    if(src.id != null) {
        for(let source of sources.sources) {
            if(source.id === src.id) return source.category;
        }
    } else if(src.name != null) {
        for (let source of sources.sources) {
            if(source.name === src.name) return source.category;
        }
    }
    return null;
}

export {getEverything, getValidSources, getFilteredArticles, getCategory};