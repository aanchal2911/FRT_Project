import React from 'react'

const NewsItem =(props)=> {
        let {title,description,imageUrl,newsUrl,author,publishedAt}=props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/02/23/242794-nasa-hubble-galaxy-collision.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
 
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem
