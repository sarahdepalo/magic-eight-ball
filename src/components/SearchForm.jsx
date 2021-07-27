import React from 'react';
import MagicEightBall from './MagicEightBall';
import AnswerList from './AnswerList'
import { AnswersContainer }from './AnswersContainer';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answersList: [],
            answer: '',
            question: '',
            questionAsked: false
        }
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        let params = encodeURIComponent(this.state.question)
        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${params}`)
            .then(response => response.json());
        const questionAndAnswer = response.magic
        this.setState({
            answer: response.magic.answer,
            answersList: [...this.state.answersList, questionAndAnswer],
            questionAsked: true
        })
        console.log(this.state.answer)
        console.log(this.state.answersList)
        event.target.reset()
    }

    _handleChange = (event) => {
        this.setState({
            question: event.target.value,
            questionAsked: false
        })
        console.log(this.state.question)
    }

    render() {
        const { answersList } = this.state;
        console.log('This is the question: ', this.state.question);
        <AnswerList
        data={answersList}
        />

        const allQuestions = answersList.map((answer, index) => {
            return (
                <>
                    <AnswerList
                        key={index}
                        question={answer.question}
                        answer={answer.answer}
                    />
                </>
            )

        })
        return (
            <>
            <div className="Container">
            <h1>Type Your Question Below and Hit Enter</h1>
                <form onSubmit={this._handleSubmit}>
                    <input type="text"
                        value={this.state.value}
                        placeholder="Enter a question"
                        onChange={this._handleChange}
                    />
                </form>
                </div>
                <MagicEightBall
                    answer={this.state.answer}
                    question={this.state.question}
                    questionAsked={this.state.questionAsked}
                />
                {answersList.length > 1 ? 
                <AnswersContainer>
                    <h2>Your Previous Questions</h2>
                {allQuestions}
                </AnswersContainer>
                 : null}
            </>
        )
    }
}


export default SearchForm