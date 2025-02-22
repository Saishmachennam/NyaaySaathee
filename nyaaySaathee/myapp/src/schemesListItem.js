import './schemeListItem.css'
const SchemesListItem=(props)=>{
    const {details}=props 
    const {name,eligibility,benefits,apply,}=details
    return(
        <>  <div className="schemecontainer">
            <h1>{name}</h1>
            <p>{eligibility}</p>
            <p>{benefits}</p>
            <p>{apply}</p>
            </div>
        </>
    )
}

export default SchemesListItem 