import React from 'react';
import { connect } from 'react-redux'
import { updateApp, addApp } from '../actions/apps'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = { 
    name: '', 
    body: '', 
  }

  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.coolPerson.id ? updatePost : addPost
    dispatch(func(post))
    closeForm()
  }

  render() {
    const { name, body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);