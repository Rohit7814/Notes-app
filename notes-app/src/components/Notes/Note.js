import React from 'react'
import "./Note.css"
import deleteIcon from "../../assets/delete.svg"
let timer=500,timeout;
function Note(props) {

    


   const formatDate=(value)=>{
    if(!value) return ""
    const date=new Date(value);
    const monthNames=[
        'Jan','Feb','March','April','May','June','July','Auguest','September','Octuber','November','December'
    ];

    let hrs=date.getHours()
    let amPM=hrs>=12?"PM":"AM"
    hrs=hrs?hrs:"12"
    hrs=hrs>12?(hrs=24-hrs):hrs

    let min=date.getMinutes();
    min=min<10?"0"+min:min;
    let day=date.getDate();
    const month=monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPM} ${day} ${month}`
   }

   const debounce=(func)=>{
    clearTimeout(timeout);
    timeout=setTimeout(func,timer); 
   }

   const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
   }
   
  return (
    <div className='note' style={{background:props.note.color}}>
    <textarea className='note_text' defaultValue={props.note.text}
      onChange={(event)=>updateText(event.target.value,props.note.id)}
    />
    <div className='note_footer'>
    <p>{formatDate(props.note.time)}</p>
   <img  src={deleteIcon} alt='deleteIcon' onClick={()=>props.deleteNote(props.note.id)} />
    </div>
  </div>
   
  )
}

export default Note
