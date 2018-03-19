import React, { Component } from 'react';
import { Header, Card, Description, Button, Grid, Container, Form, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ViewCUPosts } from './ViewCUPosts';
// import { getPosts, newPost, deletePost, id } from '../actions/posts';

// import PostForm from './PostForm'

class Home extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>
        View Your
        <Link to='/api/posts'> Posts </Link>
      </Header>

      
  
  
  
  
  
  
    );
  }
}

export default Home;
