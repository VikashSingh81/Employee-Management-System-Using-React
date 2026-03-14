import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 basis-1/4 h-full p-5 rounded-xl bg-yellow-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>

        <p className="text-sm mt-2">
          {data.taskDescription}
        </p>

          <div className='flex justify-between mt-6'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>

        </div>
  )
}

export default FailedTask