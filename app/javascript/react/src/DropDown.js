import React from 'react';

//need to figure out why this is defaulting to Alabama and not setting to genre

const DropDown = props => {
  let genres = [["","Select a Genre"],
  ["AM","Ambient & Experimental"],
  ["CL","Classical"],
  ["CO","Country"],
  ["DI","Disco & Funk"],
  ["DA","Drum & Bass"],
  ["ED","EDM & DubStep"],
  ["EL","Electronic"],
  ["HA","House & Tehcno"],
  ["HI","Hip Hop"],
  ["IN","Indie"],
  ["JA","Jazz"],
  ["LA","Latin"],
  ["ME","Metal"],
  ["PU","Punk"],
  ["PO","Pop"],
  ["RA","R&B & Soul"],
  ["RO","Rock"],
  ["WO","World"]]

  let genreOptions = genres.map(genre => {
    return(
      <option key={genre[0]} value={genre[0]}>{genre[1]}</option>
    )
  })
  return(

<div>
  <label name={props.name}>{props.nameText}</label>
  <select onChange={props.handler} name={props.name} value={props.content}>
    {genreOptions}
  </select>
</div>

  )

}

export default DropDown;
