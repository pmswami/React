import React, { useEffect, useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitle1() {

    const [count, setCount] = useState(0)

    // useEffect(()=> { document.title = `Count ${count}`}, [count])
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>{ return setCount(count+1)}}>Count - {count}</button>
    </div>
  )
}

export default DocTitle1