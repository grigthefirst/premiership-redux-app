import React from 'react'
import { connect } from 'react-redux'

const LoaderView = ({isVisible}) => { 
	return <div className={`loader ${(isVisible ? 'visible': 'invisible')}`}>
		<div className='loader-icon'></div>
	</div>
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.roundResults.isLoading
  }
}

const Loader = connect(mapStateToProps)(LoaderView)

export default Loader