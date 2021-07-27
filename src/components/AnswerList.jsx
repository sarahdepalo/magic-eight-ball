import {Answers} from './AnswersContainer';

const AnswerList = (props) => {
    return (
        <>
        <Answers>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
        </Answers>
        </>
    )
}

export default AnswerList