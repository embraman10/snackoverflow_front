import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";


class Create extends Component {
  state = {
    title: "",
    image: "",
    ingredients: "",
    instructions: "",
    readyInMinutes: "",
    servings: "",
    featured_image: null,
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onImageChange = event => { 
    this.setState({ featured_image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('body', this.state.ingredients);
    formData.append('body', this.state.instructions);
    formData.append('body', this.state.readyInMinutes);
    formData.append('body', this.state.servings);
    formData.append('featured_image', this.state.featured_image);
    fetch('http://localhost:5000/customrecipes', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
  }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const reqObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     };
//     const res = await fetch("http://localhost:5000/api/v1/users", reqObj);
//     const data = await res.json();
//     if (data.error) {
//       this.setState({
//         error: data.error,
//       });
//     } else {
//       localStorage.setItem("flatbookToken", data.token);
//       this.props.signupSuccess(data);
//       this.props.history.push("/notes");
//     }
//   };


  render() {
    return (
      <div className="Login-component">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Header as='h2' color='teal' textAlign='center'>
                        Create your recipe:
                        </Header>
                        <Segment stacked>
                        <Form.Field required>
                            <label className="navbar-brand">Title</label>
                            <input
                            placeholder="Title"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}/>
                        </Form.Field>
                        <Form.Field required>
                            <label className="navbar-brand">Image</label>
                            <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                        </Form.Field>
                        <Form.Field required>
                            <label className="navbar-brand">Ingredients</label>
                            <input
                            placeholder="Ingredients"
                            name="ingredients"
                            onChange={this.handleChange}
                            value={this.state.ingredients}/>
                        </Form.Field>
                        <Form.Field required>
                            <label className="navbar-brand">Instructions</label>
                            <input
                            placeholder="Instructions"
                            name="instructions"
                            onChange={this.handleChange}
                            value={this.state.instructions}/>
                        </Form.Field>
                        <Form.Field required>
                            <label className="navbar-brand">Ready In Minutes</label>
                            <input
                            placeholder="Ready In Minutes"
                            name="readyInMinutes"
                            onChange={this.handleChange}
                            value={this.state.readyInMinutes}/>
                        </Form.Field>
                        <Form.Field required>
                            <label className="navbar-brand">Servings</label>
                            <input
                            placeholder="Servings"
                            name="servings"
                            onChange={this.handleChange}
                            value={this.state.servings}/>
                        </Form.Field>
                        <Button type="submit" color='teal' fluid size='large'>Submit</Button>
                        </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>
    );
  }
}


export default Create;
