import { useEffect, useState } from 'react'

function useApi (url,metodo){
    console.log('metodo', metodo)
    console.log('url', url)
    const [data, setData] = useState()

    
    useEffect(() => {
        (async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDA5MzcyNSwiZXhwIjoxNjY0MTgwMTI1fQ.RWXtJtz0k69ADZUSMxB2Xdu8o6ly8hBXq13XZJSOt64"
            const res = await fetch(url, {
                headers: { 'Authorization': 'Bearer ' + token } ,
                method:{metodo}
              })
            if(res.status===401){
                console.log('res.status', res.status)
                console.log('res', res)
                console.log("ERRORRRR")
            } else {
                const data = await res.json()
                setData(data)
                console.log('data', data)
            }
        })()
    }, [url,metodo])
  
      return data
     
}

export default useApi
