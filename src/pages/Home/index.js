import useSWR from 'swr'
import { request } from 'graphql-request'

const fetcher = query => request('https://rickandmortyapi.com/graphql', query)

const Index = () => {
    const { data } = useSWR()
    return (
       <>
        <h1>Rick and Morty</h1>
       </> 
    )
}
export default Index