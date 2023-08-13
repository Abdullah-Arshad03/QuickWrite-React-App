import React from "react";
import { GiNotebook } from 'react-icons/gi';


const Header = () =>{
    return(<>
        <div className="header mb-7 flex mt-5">
            <h1 className="text-3xl font-semibold 
            ">QuickWrite</h1> <span> <GiNotebook size='1.9rem' className="mt-1 ml-1"/> </span>
        </div>
    </>)

}

export default Header