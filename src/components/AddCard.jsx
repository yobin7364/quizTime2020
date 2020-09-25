import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddCard = (props) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const { addQuestion, cardDatas, editQuestion } = useContext(GlobalContext);

    const [newQuestion, setNewQuestion] = useState(false);

    const showAddCard = () => {
        setNewQuestion(true);
    }

    const closeAddCard = () => {
        setNewQuestion(false);
        props.resetEditQuestion();
    }

    const submit = (e) => {
        e.preventDefault();
        if (props.canEditQuestion) {
            const editedCardData = {
                id: props.presentQuestion.id,
                question,
                answer
            };
            editQuestion(editedCardData);
            props.resetEditQuestion();
        }

        else {
            const newCardData = {
                id: Math.floor(Math.random() * 100000000),
                question,
                answer
            };

            addQuestion(newCardData);
        }

        setAnswer('');
        setQuestion('');
    }

    useEffect(() => {
        if (cardDatas.length === 0) {
            setNewQuestion(true);
        }

        if (props.presentQuestion?.question) {
            setQuestion(props.presentQuestion.question);
            setAnswer(props.presentQuestion.answer);
        }

        return () => {
            setAnswer('');
            setQuestion('');
        }
    }, [cardDatas, props.presentQuestion?.question, props.presentQuestion?.answer]);

    return (
        <>
            <h1>
                Memory Cards
                <button className="btn btn-small" onClick={showAddCard}>
                    <i className="fas fa-plus"></i> {props.canEditQuestion ? "Edit Card" : "Add New Card"}
                </button>
            </h1>

            <form className={newQuestion || props.canEditQuestion ? "add-container show" : "add-container"} onSubmit={submit}>
                <h1>
                    {props.canEditQuestion ? "Edit Card" : "Add New Card"}

                    {cardDatas.length === 0 ? null :
                        <button type="button" className="btn btn-small btn-ghost" onClick={closeAddCard}>
                            <i className="fas fa-times"></i>
                        </button>
                    }
                </h1>

                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea placeholder="Enter question..." onChange={(e) => setQuestion(e.target.value)} value={question} required />
                </div>

                <div className="form-group">
                    <label htmlFor="answer">Answer</label>
                    <textarea placeholder="Enter Answer..." onChange={(e) => setAnswer(e.target.value)} value={answer} required />
                </div>

                <button className="btn" type="submit">
                    {props.canEditQuestion ? <><i className="fas fa-edit mr-1"></i>Edit Card </>
                        :
                        <>
                            <i className="fas fa-plus mr-1"></i>
                     Add Card
                     </>
                    }
                </button>
            </form>
        </>
    )
}
