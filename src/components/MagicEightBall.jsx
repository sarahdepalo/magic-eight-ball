const MagicEightBall = (props) => {
    return (
        <>

            <div className="epos">
                <div className={!!props.questionAsked ? 'eball shake' : 'eball'}>
                    <div className="egrad"></div>
                    <div className="ewin"><div>
                        <div className="triangle">
                        </div>
                        <div className="textbox">
                        <h3>{props.answer}</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MagicEightBall