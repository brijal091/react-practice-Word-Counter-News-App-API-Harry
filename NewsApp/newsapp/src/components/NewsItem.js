import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    // we need to use props in class based components. 
    let {title, description, imageUrl, newsUrl, author,date} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              {/* Using Props  */}
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author} On {new Date(date).toDateString()}</small></p>
              <a href={newsUrl} arget="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
 