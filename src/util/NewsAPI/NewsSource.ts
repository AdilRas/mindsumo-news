interface SourceIdentity {
    id: string;
    name: string;
}

interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface ArticleInfo {
    source: SourceIdentity;
    author: string;
    title: string;
    desc: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type {NewsSource, SourceIdentity, ArticleInfo};
