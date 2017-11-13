import React from 'react';

const FormItem = props => {
  return(

    <div>
      <label name={props.name}>{props.nameText}</label><br/>
      <input type="text"
        id={props.name}
        value={props.content}
        name={props.name}
        onChange={props.handler}
        placeholder={props.formText}
      />
    </div>
  )
}

export default FormItem;
