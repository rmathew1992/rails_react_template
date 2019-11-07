import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class ThirdPage extends React.Component {
  render () {
    const { handleSubmit, previousPage } = this.props
    const breeds = [
      { name: 'Labradoodle', value: 'labradoodle'},
      { name: 'Spaniel', value: 'spaniel'}
    ]
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field name="breeds" component="select">
        {breeds.map (function(breed) {
          return <option key={breed["value"]} value={breed["value"]}>{breed["name"]}</option>;
        })}
      </Field>
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
