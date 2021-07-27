import {EightBallPosition, EightBallGradient, Ewin, Triangle, Textbox} from './EightBallStyles'

const MagicEightBall = (props) => {
    return (
        <>

            <EightBallPosition>
                <div className={!!props.questionAsked ? 'eball shake' : 'eball'}>
                    <EightBallGradient></EightBallGradient>
                    <Ewin><div>
                        <Triangle>
                        </Triangle>
                        <Textbox>
                        <h3>{props.answer}</h3>
                        </Textbox>
                    </div>
                    </Ewin>
                </div>
            </EightBallPosition>
        </>
    )
}

export default MagicEightBall