import { useEffect, useState } from 'react'

function useApi (url){
    //console.log('metodo', metodo)
    console.log('url', url)
    const [data, setData] = useState()

    
    useEffect(() => {
        console.log('Ompa Looompa')
        (async () => {

            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IkV4cGVydCIsImlhdCI6MTY2NDA5ODE4NSwiZXhwIjoxNjY0MTg0NTg1fQ.qFg_1DbhEBgd900OtFAsKnGBSWYJe0j4vBteIzYQqxY"
            const res = await fetch(url, {
                headers: { 'Authorization': 'Bearer ' + token } ,
              })
              console.log('res', res)
            if(res.status===401){
                console.log('res.status', res.status)
                console.log("ERRORRRR")
            } else {
                const data = await res.json()
                setData(data)
                console.log('data', data)
            }
        })()
    }, [url])
  
      return data
     
}

export default useApi