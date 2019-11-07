import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class FirstPage extends React.Component {
  render () {
    const { handleSubmit } = this.props
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field
      name="firstName"
      type="text"
      component={renderField}
      label="Hey! I’m Mookie. I’ll get you an amazing quote in seconds. Let’s start!"
      placeholder="Enter your pet's name"
      />
    </div>
    <button type="submit" className="next">Next</button>
    </form>)
  }
}



export default reduxForm({
  form: 'test',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstPage)
