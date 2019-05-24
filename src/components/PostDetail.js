import React, {Component} from 'react';

class PostDetail extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    const { 
      id,
      timestamp, 
      title,
      body,
      author,
      category,
      voteScore,
      deleted,
    } = this.props;
    
    return (
      <div>Post Detail</div>
    )
  }
}  

export default PostDetail;