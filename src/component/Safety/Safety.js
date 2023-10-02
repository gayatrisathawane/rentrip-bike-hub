
import './Safety.css'
const Safety = ({safetyheading,saftdec,safetylogo}) =>{
    return(
    
        <div className='container-saftey'>
            <div className='imgdivsafety'>
            <img src={safetylogo} className='safetyimg'/>
            </div>
            <h3 className='text-center mt-4'>{safetyheading}</h3>
            <p className='text-center'>{saftdec}</p>
        </div>

    

    )
}

export default Safety