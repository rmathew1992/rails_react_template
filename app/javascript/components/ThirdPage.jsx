import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './RenderField'

class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
  }
  componentDidMount(props) {
    fetch("http://qaservices.hartvillegroup.com/quoting/values/breeds")
      .then(res => res.json())
      .then(
        (result) => {
          const breeds = result["dog"].map(function(breed)  {
            return {name: breed["name"], value: breed["value"]}
          })

          this.setState({breeds})
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    const apiResponse = {
      "dog":[
        {
          "species":"Dog",
          "type":"PureBreed",
          "name":"Affenpinscher",
          "code":"Dog~PureBreed~Affenpinscher"
        },
        {
          "species":"Dog",
          "type":"PureBreed",
          "name":"Lab",
          "code":"lab"
        }
      ]
    }
    const breeds = apiResponse["dog"].map(function(breed)  {
      return {name: breed["name"], value: breed["value"]}
    })

    this.setState({breeds})

    // props.breeds = breeds
  }

  render () {
    const { handleSubmit, previousPage} = this.props
    const { breeds } = this.state
    return (<form onSubmit={handleSubmit}>
    <div>
      <Field name="breeds" component="select">
        {breeds.map (function(breed, index) {
          return <option key={index} value={breed["value"]}>{breed["name"]}</option>;
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
