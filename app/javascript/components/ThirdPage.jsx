import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class ThirdPage extends React.Component {
  componentDidMount(props) {
    // const apiResponse = {
    //   "dog":[
    //     { 
    //       "species":"Dog",
    //       "type":"PureBreed",
    //       "name":"Affenpinscher",
    //       "code":"Dog~PureBreed~Affenpinscher"
    //     }
    //   ]
    // }
    // const breeds = apiResponse["dog"].map (breedInfo => {name: breedInfo["name"], value: breedInfo["code"]})
    // props.breeds = breeds
  }

  render () {
    const { handleSubmit, previousPage } = this.props
    const breeds = [
      { name: 'Labradoodle', value: 'labradoodle'},
      { name: 'Spaniel', value: 'spaniel'}
    ]
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field name="breeds" component="select">
        {breeds.each (breed => {
          <option value={breed["value"]}>Red</option>
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
