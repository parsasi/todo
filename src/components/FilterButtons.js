import React , {useState} from 'react'
import FilterButton from './FilterButton'

export default function Form(props){

  
    return (
        <div className="filters btn-group stack-exception">
        {props.filterList.map(name => 
          <FilterButton 
          key={name}
          name={name}
          isPressed={name === props.filter}
          setFilter={props.setFilter} />
          )}
        
      </div>
    )
}