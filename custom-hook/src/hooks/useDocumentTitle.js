//custom hook always start with word "use"

import React, {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=> { document.title = `Count ${count}`}, [count])
}

export default useDocumentTitle