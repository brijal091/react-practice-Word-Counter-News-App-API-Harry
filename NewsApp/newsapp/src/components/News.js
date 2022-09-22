import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';

export class News extends Component {
  constructor() {
    super();
      this.state = {
        articles: [],
        loading: false,
        page: 1
      }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&category=${this.props.category}&apiKey=de4ede6c9b9e434fa7cc5673149168b0&page=1&pageSize=${this.props.pageSize}`
    {this.setState({loading: true})}
    let data = await fetch(url);
    let ParseData = await data.json()
    {this.setState({loading: false})}
    this.setState({articles: ParseData.articles, totalResults: ParseData.totalResults})
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevbtn = async () =>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNextbtn = async () =>{
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className='my-5 text-center'>News Monkey | Top HeadLines </h1> {this.props.category}
          <div className="text-center">{this.state.loading && <Spiner />}</div>
          
          <div className="row">
            {/* when we are using map or itreting something we need to give KEY to it. which should be unique. */}
          {this.state.articles.map((ele) => {
            return <div key={ele.url} className="col-md-4 my-3">
              {/* we are passing props, of json that are related to ele to the item card */}
              {/* <NewsItem key={ele.url} title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl="Todo"/>
              In above it will show an error in console. because we can not give key here. we should pass the key what we are returning. that means here div. And must note that our key should ne unique. */}
              <NewsItem title={ele.title?ele.title.slice(0,45):""} description={ele.description?ele.description.slice(0,88):""} imageUrl={ele.urlToImage?ele.urlToImage:"https://i.stack.imgur.com/6M513.png"} newsUrl={ele.url}  author={ele.author} date ={ele.publishedAt}/>
          </div>
          })}
            </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevbtn}>&larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextbtn} id="nxtbtn">Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
