import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class ThirdPage extends React.Component {
  render () {
    const { handleSubmit, previousPage } = this.props
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field
      name="Breed"
      type="text"
      component={renderField}
      label="What breed are you? I'm a bernadoodle!"
      placeholder="01243"
            />
      <button type="button" className="previous" onClick={previousPage}>
      Previous
      </button>
      <button type="submit" className="next">Submit</button>
    </div>
    </form>)
  }
}



export default reduxForm({
  form: 'test',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage)
