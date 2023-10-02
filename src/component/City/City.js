import './City.css';

const City = ({ cityimg, cityname }) => {
    return (
        <>
        <div className='citydiv'>
            <img src={cityimg} className='cityimg m-1' />
        </div>
        <h5 className='text-center mt-4'>{cityname}</h5>
        </>
    )
}
export default City