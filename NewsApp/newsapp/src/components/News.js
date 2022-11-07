import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor() {
    super();
    // console.log("Helllo World from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=de4ede6c9b9e434fa7cc5673149168b0&page=${this.state.page}&pageSize=${this.props.pageSize}`
    { this.setState({ loading: true }) }


    let data = await fetch(url);
    let ParseData = await data.json()
    { this.setState({ loading: false }) }

    console.log(ParseData)
    this.setState({ articles: ParseData.articles, totalResults: ParseData.totalResults })
  }

  handlePrevbtn = async () => {
    // console.log("Prev is clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=de4ede6c9b9e434fa7cc5673149168b0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    { this.setState({ loading: true }) }

    let data = await fetch(url);
    let ParseData = await data.json()
    { this.setState({ loading: false }) }
    console.log(ParseData)

    this.setState(
      {
        page: this.state.page - 1,
        articles: ParseData.articles,
      })
  }

  handleNextbtn = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      // document.getElementById("nxtbtn").disabled = true;
      // console.log("Next is clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=de4ede6c9b9e434fa7cc5673149168b0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      { this.setState({ loading: true }) }
      let data = await fetch(url);
      let ParseData = await data.json()
      { this.setState({ loading: false }) }
      console.log(ParseData)

      this.setState(
        {
          page: this.state.page + 1,
          articles: ParseData.articles
        })
    }

  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=de4ede6c9b9e434fa7cc5673149168b0&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // { this.setState({ loading: true }) }
    let data = await fetch(url);
    let ParseData = await data.json()
    { this.setState({ loading: false }) }
    console.log(ParseData)
    this.setState({ articles: this.state.articles.concat(ParseData.articles), totalResults: ParseData.totalResults, loading:false })
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className='my-5 text-center'>News Monkey | Top HeadLines </h1> {this.props.category}
          <div className="text-center">{this.state.loading && <Spiner />}</div>

          <InfiniteScroll dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spiner />}
          >
            <div className="row">
              {/* when we are using map or itreting something we need to give KEY to it. which should be unique. */}
              {this.state.articles.map((ele) => {
                return <div key={ele.url} className="col-md-4 my-3">
                  {/* we are passing props, of json that are related to ele to the item card */}
                  {/* <NewsItem key={ele.url} title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl="Todo"/>
              In above it will show an error in console. because we can not give key here. we should pass the key what we are returning. that means here div. And must note that our key should ne unique. */}
                  <NewsItem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} imageUrl={ele.urlToImage ? ele.urlToImage : "https://i.stack.imgur.com/6M513.png"} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div>
              })}
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevbtn}>&larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextbtn} id="nxtbtn">Next &rarr;</button>
          </div> */}
        </div>
      </div >
    )
  }
}

export default News
