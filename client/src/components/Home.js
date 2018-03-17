import React, { Component } from 'react';
import { Header, Card, Description, Button, Grid, Container, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts, newPost } from '../actions/posts';
// import PostForm from './PostForm'

class Home extends Component {

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

  render() {
    return (
      <div>

        <Header as='h3' textAlign='center'>Welcome: {this.props.coolPerson.name}</Header>

        <div>
          <Form onSubmit={this.handleSubmit}>
            <input 
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Title of Post"
            />
            <input 
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
              placeholder="Enter Your Post"
            />
            <Button color="green" type="submit"> Add Post </Button>
          </Form>
            <div>
                <Card.Group>
                  { this.props.posts.map( p => {
                    return(
                      <div>
                        <Container>
                          <div>
                          <Card>
                            <Card.Content>
                            <Card.Header>
                              {p.title}
                            </Card.Header>
                            <Card.Description>
                              {p.body}
                            </Card.Description>
                          </Card.Content>
                          <Button>Edit Post</Button>
                          <Button color="red">Delete Post</Button>
                        </Card>
                        </div>
                      </Container>
                    </div>
                    )
                  })}
                </Card.Group>
            </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home);