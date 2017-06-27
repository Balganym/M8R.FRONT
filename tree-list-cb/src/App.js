import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';

const st = [
  {
    id: 1,
    name: "1",
    description: "Описание темы 1",
    parId: 0,
  },
  {
    id: 2,
    name: "1.1",
    description: "Описание подтемы 1",
    parId: 1,
  },
  {
    id: 5,
    name: "1.1.1",
    description: "Описание подтемы 1",
    parId: 2,
  },
  {
    id: 6,
    name: "1.1.2",
    description: "Описание подтемы 2",
    parId: 2,
  },
  {
    id: 7,
    name: "1.1.3",
    description: "Описание подтемы 3",
    parId: 2,
  },
  {
    id: 3,
    name: "1.2",
    description: "Описание подтемы 2",
    parId: 1,
  },
  {
    id: 8,
    name: "1.2.1",
    description: "Описание подтемы 1",
    parId: 3,
  },
  {
    id: 9,
    name: "1.2.2",
    description: "Описание подтемы 2",
    parId: 3,
  },
  {
    id: 10,
    name: "1.2.3",
    description: "Описание подтемы 3",
    parId: 3,
  },
  {
    id: 4,
    name: "1.3",
    description: "Описание подтемы 3",
    parId: 1,
  },
  {
    id: 11,
    name: "1.3.1",
    description: "Описание подтемы 1",
    parId: 4,
  },
  {
    id: 20,
    name: "1.3.1.1",
    description: "hrhrh",
    parId: 11,
  },
  {
    id: 21,
    name: "1.3.1.1.1",
    description: "hrhrh",
    parId: 20,
  },
  {
    id: 12,
    name: "1.3.2",
    description: "Описание подтемы 2",
    parId: 4,
  },
  {
    id: 13,
    name: "1.3.3",
    description: "Описание подтемы 3",
    parId: 4,
  },
  {
    id: 14,
    name: "2",
    description: "Описание темы 2",
    parId: 0,
  },
];


var parsedSt = [];

class App extends Component {
  parser(ind) {
    const childs = [];
    st.map(l => {
      if(l.parId === ind) {
        console.log(l.id);
        var c = this.parser(l.id);
        childs.push({
          id: l.id,
          name: l.name, 
          description: l.description,
          parId: ind,
          isOpened: false,
          src: require("./right.png"),
          childs: c,
        })
      }
    })
    let obj = st.find(l => l.id === ind);
    console.log(childs);
    return childs;
  }

  render() {
    parsedSt = this.parser(0);
    const style = {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "20px"
    }

    return (
      <div style={{...style}}>
        <Container id={0} list={parsedSt} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);