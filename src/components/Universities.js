import React , {useEffect , useState} from 'react'
import axios from 'axios'
import University from './University'

export default function Universities(props){
    
    const [filters , setFilters] = useState({name : '' , country : ''})

    const [universities , setUniversities] = useState([])

    const [tokens , setTokens] = useState([])
    

    useEffect(_ => {

        const fetchData = async () => {
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
            const url = `http://universities.hipolabs.com/search?name=${filters.name}&country=${filters.country}`
            setTokens([...tokens , source])
            return await axios.get(url , {cancelToken : source.token})
        }


        async function iifi(){
            tokens.forEach(item => item.cancel())
            setTokens([])
            const universities = (await fetchData()).data;
            console.log(universities)
            setUniversities(universities)
        }

        iifi()

    } , [filters , setFilters])

    

    return (
        <>
            <div className="universities">
                <div className="university-filter">
                    <div className="filters">
                        <input type="text" placeholder="name" id="filter-name" value={filters.name} onChange={e => setFilters({...filters , name: e.target.value})}/>
                        <input type="text" placeholder="Country" id="filter-country" value={filters.country} onChange={e => setFilters({...filters , country: e.target.value})}/>
                    </div>
                </div>
                <div className="universities-list">
                    {universities.map(item => <University name={item.name} country={item.country} link={item.web_pages[0]} />)}
                </div>
            </div>
        </>
    )
}