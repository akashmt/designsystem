import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class SlideTransition extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			direction: 'right'
		}
	}

	componentWillReceiveProps(newProps) {
		const direction = newProps.depth > this.props.depth ? 'right' : 'left';
		this.setState({direction})
	}

	render() {
		const {depth} = this.props
		const outerProps = {
			className: `slider-outer-wrapper ${this.props.className}`,
		}
		const FadeTransition = (props) => (
			<CSSTransition
				{...props}
				classNames={`slider-transition-group slider-${this.state.direction}`}
				timeout={{ enter: 500, exit: 300 }}
			/>
		)
		const innerProps = {
			ref: 'inner',
			key: depth,
			className: `slider-inner-wrapper`,
		}

		return <div {...this.props} {...outerProps}>
			<TransitionGroup>
				<FadeTransition>
					<div {...innerProps}>
						{this.props.children}
					</div>
				</FadeTransition>
			</TransitionGroup>
		</div>
  }

}

export default SlideTransition