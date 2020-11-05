import React from 'react'
import { Badge } from 'reactstrap';
import styles from './Category.module.scss';

const getIconClass = (category: string | null) => {
    if (category == null) {
        return "fa fa-question";
    } else if (category.toUpperCase() === "SPORTS") {
        return "ni ni-trophy";
    } else if(category.toUpperCase() === "ENTERTAINMENT") {
        return "ni ni-satisfied";
    } else if(category.toUpperCase() === "TECHNOLOGY") {
        return "ni ni-atom";
    } else {
        return "fa fa-question";
    }
}

const Category = (props: {text: string | null}) => {
    return (
        <div>
            <Badge color="primary" className={styles.categoryPill} pill>
                <div className={styles.pillContent}>
                    <i className={getIconClass(props.text)}></i>
                    <div className={styles.pillText}>
                        {props.text != null ? props.text.toUpperCase() : ""}
                    </div>
                </div>
            </Badge>            
        </div>
    )
}

export default Category;
