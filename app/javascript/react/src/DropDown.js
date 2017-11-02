import React from 'react';

//need to figure out why this is defaulting to Alabama and not setting to genre

const DropDown = props => {
  let genres = [["","Select a Genre"],
  ["Ambient & Experimental","Ambient & Experimental"],
  ["Classical","Classical"],
  ["Country","Country"],
  ["Disco & Funk","Disco & Funk"],
  ["Drum & Bass","Drum & Bass"],
  ["EDM & DubStep","EDM & DubStep"],
  ["Electronic","Electronic"],
  ["House & Tehcno","House & Tehcno"],
  ["Hip Hop","Hip Hop"],
  ["Indie","Indie"],
  ["Jazz","Jazz"],
  ["Latin","Latin"],
  ["Metal","Metal"],
  ["Punk","Punk"],
  ["Pop","Pop"],
  ["R&B & Soul","R&B & Soul"],
  ["Rock","Rock"],
  ["World","World"]]

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
