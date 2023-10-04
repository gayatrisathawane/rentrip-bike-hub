import './FaqC.css'
const FaqC = ({que,ans }) => {
    return (
        <>
            <div className="card container  mt-4 p-3 fs-2 faq-container shadow-sm rounded">
                <details>
                    <summary> {que}</summary>
                    <p>

                        {ans}
                    </p>

                </details>
            </div>
        </>

    )
}
export default FaqC