import React from 'react';

const Pagination = (props) => {

const pages = [];
for(let i =1; i <= Math.ceil(props.numberOfitems / props.itemperpage); i++)
{
  pages.push(i);
}

return(
    <nav>
    <ul className="pagination">
        { pages.map(number =>( 
            <li key={ number } className="page-item">   { /* key in li and not in <a>  */}
                <a href="!#" className="page-link" onClick={ () => props.paginate(number) }>
                    { number }
                </a>
            </li>
        ))
        }
      </ul>
    </nav>
);
}

export default Pagination