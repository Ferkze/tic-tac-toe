import React from 'react'
import Square from './Square'

class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i} />
	}

	render() {
		return (
			<div className="status"></div>
		)
	}
}

export default Board