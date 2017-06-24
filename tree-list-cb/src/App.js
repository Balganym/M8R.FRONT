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
        name: "Тема 1",
        description: "Описание темы 1",
        isOpened:false,
        src: require("./right.png"),
        parId: 0,
        childs: [
          {
            id: 2,
            name: "Тема 1.1",
            description: "Описание подтемы 1",
            isOpened:false,
            src: require('./right.png'),
            parId: 1,
            childs: [
             {
                id: 5,
                name: "Тема 1.1.1",
                description: "Описание подтемы 1",
                isOpened:false,
                src: require('./right.png'),
                parId: 2,
                childs: []
              },
              {
                id: 6,
                name: "Тема 1.1.2",
                description: "Описание подтемы 2",
                isOpened:false,
                src: require('./right.png'),
                parId: 2,
                childs: []
              },
              {
                id: 7,
                name: "Тема 1.1.3",
                description: "Описание подтемы 3",
                isOpened:false,
                src: require('./right.png'),
                parId: 2,
                childs: []
              },
            ]
          },
          {
            id: 3,
            name: "Тема 1.2",
            description: "Описание подтемы 2",
            isOpened:false,
            src: require('./right.png'),
            parId: 1,
            childs: [
              {
                id: 8,
                name: "Тема 1.2.1",
                  description: "Описание подтемы 1",
                  isOpened:false,
                  src: require('./right.png'),
                  parId: 3,
                  childs: []
              },
              {
                id: 9,
                name: "Тема 1.2.2",
                description: "Описание подтемы 2",
                isOpened:false,
                src: require('./right.png'),
                parId: 3,
                childs: []
              },
              {
                id: 10,
                name: "Тема 1.2.3",
                  description: "Описание подтемы 3",
                  isOpened:false,
                  src: require('./right.png'),
                  parId: 3,
                  childs: []
              },
            ]
          },
          {
            id: 4,
            name: "Тема 1.3",
            description: "Описание подтемы 3",
            isOpened:false,
            src: require('./right.png'),
            parId: 1,
            childs: [
              {
                id: 11,
                name: "Тема 1.3.1",
                description: "Описание подтемы 1",
                isOpened:false,
                src: require('./right.png'),
                parId: 4,
                childs: [
                  {
                    id: 20,
                    name: "Тема 1.3.1.1",
                    description: "hrhrh",
                    isOpened:false,
                    src: require('./right.png'),
                    parId: 11,
                    childs: [
                      {
                        id: 21,
                        name: "Тема 1.3.1.1.1",
                        description: "hrhrh",
                        isOpened:false,
                        src: require('./right.png'),
                        parId: 20,
                        childs: []
                      },
                    ]
                  },
                ]
              },
              {
                id: 12,
                name: "Тема 1.3.2",
                description: "Описание подтемы 2",
                isOpened:false,
                src: require('./right.png'),
                parId: 4,
                childs: []
              },
              {
                id: 13,
                name: "Тема 1.3.3",
                  description: "Описание подтемы 3",
                  isOpened:false,
                  src: require('./right.png'),
                  parId: 4,
                  childs: []
              },
            ]
          },
        ]
      },
    {
      id: 14,
      name: "Тема 2",
      description: "Описание темы 2",
      isOpened:false,
      src: require('./right.png'),
      parId: 0,
      childs: []
    },
  ]
    return (
      <div style={{...style}}>
        <Container id={0} list={chapter} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);