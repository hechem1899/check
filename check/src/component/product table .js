import React from 'react' ;
import propTypes from 'prop-types' ; 
const ProductTable= (props)=>{
    return ( <div>
        <table border="1">
            <thead>
                <tr>
                    <th> name</th>
                    <th> category</th>
                    <th> price </th>
                </tr>
            </thead>
            <tbody>
                {props.table.map((el,i) =>
                <tr key={i}>  
                <td>{el.name}</td>      
                <td>{el.category}</td>  
                <td>{el.price}</td>    
                </tr> )}
                </tbody>
        </table>
    </div> )
}
ProductTable.propTypes={table:propTypes.array}
export default ProductTable ;