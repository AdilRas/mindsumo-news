import React from 'react'
import styles from './ArticleCard.module.scss';
import {ArticleInfo, SourceIdentity} from '../../util/NewsAPI/NewsSource';
import Category from './Category/Category';
import { getCategory } from '../../util/NewsAPI/helper';

const getLabels = (source: SourceIdentity) => {
    const cat: string | null = getCategory(source);
    if (getCategory(source) != null) {
        return (
            <Category text={cat}/>
        );
    } else {
        return (
            <Category text="Unknown"/>
        );
    }
}

const formatTitle = (title: string) => {
    const maxLen: number = 85;
    const tail: string = "...";

    if(title.length > maxLen) {
        return title.substring(0, maxLen - tail.length) + tail;  
    } else {
        return title;
    }
}

const ArticleCard = (props: {article: ArticleInfo}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <a href={props.article.url} target="_blank" rel="noreferrer noopener">
                    <h4 className={styles.cardTitle}>
                        {formatTitle(props.article.title)}
                    </h4>
                </a>
                <div>
                    <hr className={styles.cardDivider}/>
                    {getLabels(props.article.source)}
                </div>

            </div>
            <img src={props.article.urlToImage} alt="" width="300px" height="200px"/>
        </div>
    )
}

export default ArticleCard;
