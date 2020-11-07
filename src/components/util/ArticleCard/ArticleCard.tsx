import React from 'react'
import styles from './ArticleCard.module.scss';
import {Article} from '../../../util/NewsAPI/NewsSource';
import Category from './Category/Category';
import { getCategory } from '../../../util/NewsAPI/helper';

const getLabels = (source: Article) => {
    const cat: string | null = getCategory(source.data.source);
    let cats: string[] = [cat ? cat : "", source.category != cat ? source.category : ""];
    if(source.category !== "" && source.data != null) {
        return (
            <div style={{display: "flex",justifyContent: "space-evenly"}}>
                {cats.map((category: string, key: number) => {
                    if(category !== "") return  <Category text={category} key={key}/>;
                })}
            </div>
        );
    }
    if (cat != null) {
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

const ArticleCard = (props: {article: Article}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <a href={props.article.data.url} target="_blank" rel="noreferrer noopener">
                    <h4 className={styles.cardTitle}>
                        {formatTitle(props.article.data.title)}
                    </h4>
                </a>
                <div>
                    <div className={styles.source} style={{fontFamily: "nunito, sans-serif", fontSize: "1.2em"}}>{props.article.data.source.name}</div>
                    {props.article.data.author ? <p>By: {props.article.data.author}</p> : ""}
                    <hr className={styles.cardDivider}/>
                    {getLabels(props.article)}
                </div>

            </div>
            <img src={props.article.data.urlToImage} alt="" width="300px" height="200px"/>
        </div>
    )
}

export default ArticleCard;
