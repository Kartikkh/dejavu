import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CellInput extends Component {
	componentDidMount() {
		this.inputRef.focus();
	}

	render() {
		return (
			<OverlayTrigger
				placement="top"
				overlay={
					this.props.showTooltip ?
						<Tooltip id="tooltip-field-number">This field should be a number</Tooltip> :
						<Tooltip id="tooltip-field-string" bsClass="tooltip-hidden" />
				}
			>
				<input
					name={this.props.name}
					ref={(node) => { this.inputRef = node; }}
					type="text"
					value={this.props.value}
					onChange={e => this.props.handleChange(e)}
					onBlur={this.props.handleBlur}
					className="cell-input"
				/>
			</OverlayTrigger>
		);
	}
}

CellInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	showTooltip: PropTypes.bool
};

CellInput.defaultProps = {
	showTooltip: false
};

export default CellInput;
