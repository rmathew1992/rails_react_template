import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector} from 'redux-form'

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render () {
    const { onSubmit, firstName } = this.props
    const { page } = this.state

    return (
      <div>
        {page === 3 && <FirstPage onSubmit={this.nextPage} />}
        {page === 2 && <SecondPage 
          previousPage={this.previousPage}
          onSubmit={this.nextPage} firstName={firstName} />}
        {page === 1 && (
          <ThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />)
        }
      </div>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    firstName: formValueSelector("test")(state, 'firstName')
  }
};

const mapDispatchToProps = dispatch => ({ });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

