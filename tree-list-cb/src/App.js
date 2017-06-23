import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';

class App extends Component {

  render() {
    const style = {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "20px"
    }

    
    const chapter = [
      {
              id: 1,
              name: "1",
              description: "Описание темы 1",
              isOpened:false,
              // src: require("./right.png"),
              parId: 0,
          },
          {
              id: 2,
              name: "1.1",
              description: "Описание подтемы 1",
              isOpened:false,
              // src: require('./right.png'),
              parId: 1,
          },
        {
              id: 5,
              name: "1.1.1",
              description: "Описание подтемы 1",
              isOpened:false,
              // src: require('./right.png'),
              parId: 2,
            },
            {
              id: 6,
              name: "1.1.2",
              description: "Описание подтемы 2",
              isOpened:false,
              // src: require('./right.png'),
              parId: 2,
            },
            {
              id: 7,
              name: "1.1.3",
              description: "Описание подтемы 3",
              isOpened:false,
              // src: require('./right.png'),
              parId: 2,
            },
          {
              id: 3,
              name: "1.2",
              description: "Описание подтемы 2",
              isOpened:false,
              // src: require('./right.png'),
              parId: 1,
          },
          {
            id: 8,
            name: "1.2.1",
              description: "Описание подтемы 1",
              isOpened:false,
              // src: require('./right.png'),
              parId: 3,
          },
          {
            id: 9,
            name: "1.2.2",
              description: "Описание подтемы 2",
              isOpened:false,
              // src: require('./right.png'),
              parId: 3,
            },
          {
            id: 10,
            name: "1.2.3",
              description: "Описание подтемы 3",
              isOpened:false,
              // src: require('./right.png'),
              parId: 3,
          },
          {
              id: 4,
              name: "1.3",
              description: "Описание подтемы 3",
              isOpened:false,
              // src: require('./right.png'),
              parId: 1,
          },
          {
            id: 11,
            name: "1.3.1",
              description: "Описание подтемы 1",
              isOpened:false,
              // src: require('./right.png'),
              parId: 4,
            },
        {
          id: 20,
          name: "1.3.1.1",
          description: "hrhrh",
          isOpened:false,
          // src: require('./right.png'),
          parId: 11,
        },
      {
        id: 21,
          name: "1.3.1.1.1",
          description: "hrhrh",
          isOpened:false,
          // src: require('./right.png'),
          parId: 20,
      },
          {
        id: 12,
        name: "1.3.2",
        description: "Описание подтемы 2",
        isOpened:false,
        // src: require('./right.png'),
        parId: 4,
      },
          {
            id: 13,
            name: "1.3.3",
              description: "Описание подтемы 3",
              isOpened:false,
              // src: require('./right.png'),
              parId: 4,
          },
          {
            id: 14,
            name: "2",
            description: "Описание темы 2",
            isOpened:false,
            // src: require('./right.png'),
            parId: 0,
          },
      ]
    
    // this.getArray = this.getArray.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.changeStringTit = this.changeStringTit.bind(this);
    // this.changeStringDesc = this.changeStringDesc.bind(this);
    return (
      <div style={{...style}}>
        <Container id={1} list={chapter} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);