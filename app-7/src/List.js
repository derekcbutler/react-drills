import React from 'react';
import Todo from './Todo';

function List(props){
    console.log(props.list)
    return(
        <div>
            <div>
                {props.list.map((item, i) => {
                    return(
                        <Todo item={item} i={i} deleteItem={props.deleteItem}/>
                        
                    )
                })}
            </div>
        </div>
    )
}
export default List;