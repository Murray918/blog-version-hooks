import React from 'react'
import PropTypes from 'prop-types'

const Main = props => {
	return (
		<section>
			<h1>hello there this is the first part of the blogs right here</h1>
		</section>
	)
}

export default Main

Main.propTypes = {
	isLoggedIn: PropTypes.bool
}
