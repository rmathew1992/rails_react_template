import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class SecondPage extends React.Component {
  render () {
    const { handleSubmit, previousPage } = this.props
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field
              name="zipCode"
              type="text"
              component={renderField}
              label="Great to meet you Test, what's your ZIP code?"
      placeholder="01243"
            />
      <button type="button" className="previous" onClick={previousPage}>
      Previous
      </button>
      <button type="submit" className="next">Next</button>
    </div>
    </form>)
  }
}



export default reduxForm({
  form: 'test',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage)
