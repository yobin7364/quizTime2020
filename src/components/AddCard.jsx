import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddCard = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const { addQuestion, cardDatas } = useContext(GlobalContext);

    const [newQuestion, setNewQuestion] = useState(false);

    const showAddCard = () => {
        setNewQuestion(true);
    }

    const closeAddCard = () => {
        setNewQuestion(false);
    }

    const submit = (e) => {
        e.preventDefault();
        const newCardData = {
            id: Math.floor(Math.random() * 100000000),
            question,
            answer
        };

        addQuestion(newCardData);
        setAnswer('');
        setQuestion('');
    }

    useEffect(() => {
        if (cardDatas.length === 0) {
            setNewQuestion(true);
        }
    });

    return (
        <>
            <h1>
                Memory Cards
                <button className="btn btn-small" onClick={showAddCard}>
                    <i className="fas fa-plus"></i> Add New Card
                </button>
            </h1>

            <form className={newQuestion ? "add-container show" : "add-container"} onSubmit={submit}>
                <h1>
                    Add New Card
                    <button type="button" className="btn btn-small btn-ghost" onClick={closeAddCard}>
                        <i className="fas fa-times"></i>
                    </button>
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
                    <i className="fas fa-plus"></i> Add Card
                </button>
            </form>
        </>
    )
}
