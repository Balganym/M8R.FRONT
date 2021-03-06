import React, { Component } from 'react';
import update from 'react/lib/update';
import Card from './Card';
import { DropTarget } from 'react-dnd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const parsedState = [];

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chapter: this.props.list, 
		};
	}

	removeCard(index) {		
		this.setState(update(this.state, {
			chapter: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveCard(dragIndex, hoverIndex) {
		const { chapter } = this.state;		
		const dragCard = chapter[dragIndex];

		this.setState(update(this.state, {
			chapter: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard]
				]
			}
		}));
	}

	handleClick(e){
		let n = this.state.chapter.find(l => l.id === e);
		let tree2 = this.state.chapter.slice();
		n.isOpened = !n.isOpened;
		(n.isOpened ? n.src=require('./down.png') : n.src=require('./right.png'))
		tree2.map(leaf => (
			leaf.id === e ? n : leaf
		))
		this.setState({
			chapter: tree2,
		})
	}

	render() {
		const { chapter } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {
			width: "400px",
		};

		return connectDropTarget(
			<div style={{...style}}>
			{
				chapter.map((card, i) => {
					return (
						<Card 
							key={card.id}
							index={i}
							listId={this.props.id}
							card={card}														
							removeCard={this.removeCard.bind(this)}
							moveCard={this.moveCard.bind(this)}
							onClick={this.handleClick.bind(this)}
						/>
					);
				})
			}
			</div>
		);
	}
}

const cardTarget = {
	drop(props, monitor, component ) {
		const { id } = props;
		return {
			listId: id
		};
	}
}

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);