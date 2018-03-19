import React, { Component } from 'react';
import { Header, Card, Description, Button, Grid, Container, Form, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts, newPost, deletePost } from '../actions/posts';


// import PostForm from './PostForm'

class ViewCUPosts extends Component {
  
  state = {
    title: '',
    body: '',
  }
  
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch(newPost(post))
    this.setState({ title: '', body: ''})
  }
  
  removePost = (id) => {
    console.log("I Should not be clicked right now")
    const { dispatch, history } = this.props
    dispatch(deletePost(id))
    history.push('/posts')
  }
  
  posts = () =>
  {
    const { coolPerson, posts } = this.props
    return posts.map( post =>
      
      <Card key={ post.id }>
        <Card.Content>
          <Card.Header>
            { post.title }
          </Card.Header>
          <Card.Description>
            { post.body }
          </Card.Description>
        </Card.Content>
        <Button> Edit </Button>
        <Button color="red" onClick={this.removePost}> Delete </Button>
      </Card>
    )
  }
  
  render() {
    return (
      <div>
        <Header as='h3' textAlign='center'>Welcome: {this.props.coolPerson.name}</Header>
        <div>
          <Form onSubmit={this.handleSubmit}>
          <Segment>
            <Input 
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Title of Post"
            />
            </Segment>
            <Segment>
            <Input fluid
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
              type="text-field"
              placeholder="Enter Your Post"
            />
            </Segment>
            <Button color="green" type="submit"> Add Post </Button>
          </Form>
            <div>
              <Grid columns={ 1 } >
                <Grid.Column>
                  <Card.Group itemsPerRow={ 4 }>
                    { this.posts() }
                  </Card.Group>
                </Grid.Column>
              </Grid>
            </div>
          )
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    coolPerson: state.user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(ViewCUPosts);