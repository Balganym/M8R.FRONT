import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import Container from './Container';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const style = {
	marginLeft: '40px',
	cursor: 'move'
};

class Card extends Component {
	show() {
		const { card } = this.props;
		if(card.isOpened){
			return (<Container id={card.parId + 2} list={card.childs} />)
		}
	}

	render() {
		const transitionOptions = {
			transitionName: "fade",
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 400
		};
		const { card, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging ? 0.1 : 1;
		return connectDragSource(connectDropTarget(
			<div style={{ ...style, opacity }}>
				<ReactCSSTransitionGroup {...transitionOptions}>
					<div className="title" onClick={() => this.props.onClick(card.id)}>
						<img className="arrows" src={card.src} />
						<h4 className="name">{card.name}</h4>
					</div>
					<p className="description">{card.description}</p>
					<hr/>
					{this.show(card)}
				</ReactCSSTransitionGroup>
			</div>
		));
	}
}

const cardSource = {
	beginDrag(props) {		
		return {			
			index: props.index,
			listId: props.listId,
			card: props.card
		};
	},
};

const cardTarget = {

	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;
		const sourceListId = monitor.getItem().listId;	

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return;
		}

		// Determine rectangle on screen
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

		// Determine mouse position
		const clientOffset = monitor.getClientOffset();

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		// Time to actually perform the action
		if ( props.listId === sourceListId ) {
			props.moveCard(dragIndex, hoverIndex);
			monitor.getItem().index = hoverIndex;
		}		
	}
};

export default flow(
	DropTarget("CARD", cardTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
	DragSource("CARD", cardSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}))
)(Card);