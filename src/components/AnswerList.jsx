const AnswerList = (props) => {
    return (
        <>
        <div className="Answer">
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
        </div>
        </>
    )
}

export default AnswerList