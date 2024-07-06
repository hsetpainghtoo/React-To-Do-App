import React from 'react'

const ListStatus = (props) => {
  // console.log(props)
  return (
        <div className='flex justify-between mt-4'>
          <h3 className='font-bold text-xl'>Your List</h3>
          <div className='font-bold border p-1 rounded-lg bg-gray-800 text-white'>
            Done ( <span id='doneCount'>{props.tasks.filter(task=>task.isDone === true).length}</span> 
            / <span id='listCount'>{props.tasks.length}</span> )
          </div>
        </div>
  )
}

export default ListStatus;