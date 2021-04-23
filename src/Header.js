import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
import { useDataLayerValue } from './DataLayer'
import './Header.css'
function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    const[search,setSearch]=useState("")
    return (
        <div className='header'>
           <div className='header_left'>
               <SearchIcon/>
                <input placeholder="Search for Artists,Songs" type='text' value={search} onChange={e=>setSearch(e.target.value)}/>

           </div>
           <div className='header_right'>
               <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
               <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    )
}

export default Header
