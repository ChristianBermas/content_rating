import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <div className='content-rating'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            rerum, fugiat explicabo quam voluptatem alias, maiores tempore dolor
            maxime voluptatibus incidunt expedita, numquam placeat doloribus
            nostrum iure sint excepturi laudantium blanditiis? Laudantium
            expedita explicabo quas atque eum quisquam quidem nihil, sapiente
            asperiores delectus porro veritatis magnam consequuntur natus
            facilis a molestiae! Dolorem vel in nam quidem nobis tempora,
            eveniet error ea voluptatibus possimus sint numquam soluta inventore
            hic ullam cum molestias? Error totam illo recusandae exercitationem
            vel incidunt esse, dolore nisi repudiandae temporibus eos debitis et
            dicta corporis eveniet. Facilis qui obcaecati nobis autem omnis
            animi aliquid illo fuga cupiditate.
          </p>
          <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className='dislike-button'
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}

export default ContentRating;
