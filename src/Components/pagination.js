import React, { useEffect, useState, useMemo } from 'react';

const Pagination = ({ currentPage = 1, paginate, numberOfitems = 0, itemperpage = 5}) => {

// either functions should be injected in props, see above code (paginate is a function). 

    const [totalPage, setTotalPages ] = useState(0);
    
    // new code from you tube  start
    useEffect(() => {
        if(numberOfitems > 0 && itemperpage > 0)
        {
             setTotalPages(Math.ceil(numberOfitems / itemperpage));
        }
    },[numberOfitems, itemperpage]);
    // new code from you tube end


    const handlePages = useMemo(() => {
        const pages = [];    
                    
        for(let i = 1; i <= totalPage; i++)
        {
            pages.push( 
                <li key={ i } className="page-item">   { /* key in li and not in <a>  */}
                    <button className="page-link"   
                       onClick={ () => paginate(i) }>
                        { i }
                    </button>
                </li>
            )
        }
        return pages;
    },[ totalPage, currentPage ])
    //},[ numberOfitems, itemperpage])  // old code

    return(
        <nav>
            <ul className="pagination">
                { handlePages }
            </ul>
        </nav>
    );
};

export default Pagination