 import './UseTo.css'
 const UseTo = ({useimg,useheading,usedes}) =>{
    return(
        <>
        <div className='usemaincontainer shadow-lg p-3'>
            <img src={useimg} className='d-block mx-auto'/>
            <h3 className='text-center mt-4 mainheadinguse '>{useheading}</h3>
            <p className='mt-2 text-center'>{usedes} </p>
        </div>
        </>
    )

 }
 export default UseTo