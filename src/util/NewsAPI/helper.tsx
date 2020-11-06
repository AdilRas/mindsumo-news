import axios from 'axios';
import sources from '../../data/sources.json';
import {Article, ArticleInfo, NewsSource, SourceIdentity} from './NewsSource';
import {validIds, validNames} from '../../data/validSources';

const baseURL: string = 'http://newsapi.org/v2/';

const allowedCategories = new Set(["sports", "entertainment", "technology"]);

const extractArticlesFromRequest = async (request: string) => {
    let articles: ArticleInfo[] = [];
    await axios.get(request, {
        headers: {
            'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
        }
    }).then((response) => {
        articles = response.data.articles;
    });
    return articles;
}

const fetchEverythingForTerm = async (term: string) => {
    const request: string = `${baseURL}/everything?q=${encodeURIComponent(term)}`;
    return await extractArticlesFromRequest(request);
}

const fetchTopHeadlines = async () => {
    
    let result: Article[] = [];
    var requests: string[] = [];

    allowedCategories.forEach((item: string) => {
        const request: string = `${baseURL}top-headlines?category=${item}&country=us`;
        requests.push(request);
    });

    for(let req of requests) {
        await extractArticlesFromRequest(req).then((response: ArticleInfo[]) => {
            response.forEach((item: ArticleInfo) => result.push({data: item, category: `${req.split("=")[1].split("&")[0]}`}));
        })
    }

    // Shuffle the list before returning. O(n) time.
    for(let i = 0; i < result.length; i++) {
        const ind: number = Math.round(Math.random()*i);
        const temp = result[ind];
        result[ind] = result[i];
        result[i] = temp;
    }

    return result;
}

const getFilteredArticles = (articles: ArticleInfo[]) => {
    return articles.filter((element: ArticleInfo) => {
        // console.log(element.source);
        return validNames.has(element.source.name) || validIds.has(element.source.id);
    });
}

const getFilteredArticlesByCategory = (articles: Article[], filter: Set<string>) => {
    return articles.filter((element: Article) => {
        let bad: boolean = false;
        filter.forEach((item: string) => {
            if(element.category && item===element.category) bad = true;
            if(element.data.source && item===getCategory(element.data.source)) bad = true;
        })
        return !bad && (validNames.has(element.data.source.name) || validIds.has(element.data.source.id));
    })
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



export {fetchTopHeadlines, fetchEverythingForTerm, getValidSources, getFilteredArticles, getFilteredArticlesByCategory, getCategory};