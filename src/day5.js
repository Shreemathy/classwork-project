import React from 'react'

export default function Listfunction() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"shree"},{id:2,name:"shruthi"},{id:3,name:"risika"},{id:4,name:"arunya"},{id:5,name:"prisha"},{id:6,name:"rathika"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}