// import { Card, CardContent, Container } from "@mui/material";
// import { Card, CardContent } from "@mui/material";
import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import FetchContext from "./FetchContext";

function KanBanBoard() {
  const { user } = useContext(FetchContext);
  const userData = [
    {
      id: uuidv4(),
      content: [user],
    },
    {
      id: uuidv4(),
      content: [user],
    },
  ];

  const columnBackEnd = {
    [uuidv4()]: { name: "Open", items: [userData] },
    [uuidv4()]: { name: "In Progress", items: [] },
  };

  const onDragEnd = (results, columns, setColumns) => {
    if (!results.destination) return;
    const { source, destination } = results;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItem = [...destColumn.items];
      const [reorderItem] = sourceItems.splice(source.index, 1);
      destItem.splice(destination.index, 0, reorderItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItem,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copyItem = [...column.items];
      const [reorderItem] = copyItem.splice(source.index, 1);
      copyItem.splice(destination.index, 0, reorderItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copyItem,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnBackEnd);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={id} key={id}>
                  {(provided) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: "lightblue",

                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: "grey",
                                    color: "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {console.log(item.content)}
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanBanBoard;
