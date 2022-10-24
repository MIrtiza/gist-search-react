import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ForkDetail from '../Pages/ForkDetail';
import  Search  from "../Pages/Search";



export const Routing = ()=>{
    return (   
        <BrowserRouter>
            <Routes>
                <Route exact  path="/" element={<Search />} />
                <Route path='/detail/:id' element={<ForkDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing