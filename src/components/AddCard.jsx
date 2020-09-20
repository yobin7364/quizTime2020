import React, { useState, useEffect } from 'react';

export const AddCard = () => {
    const [newQuestion, setNewQuestion] = useState(false);

    const showAddCard = () => {
        setNewQuestion(true);
    }

    const closeAddCard = () => {
        setNewQuestion(false);
    }

    return (
        <>
            <h1>
                Memory Cards
                <button className="btn btn-small" onClick={showAddCard}>
                    <i className="fas fa-plus"></i> Add New Card
                </button>
            </h1>

            <div className={newQuestion ? "add-container show" : "add-container"}>
                <h1>
                    Add New Card
                    <button className="btn btn-small btn-ghost" onClick={closeAddCard}>
                        <i className="fas fa-times"></i>
                    </button>
                </h1>

                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea placeholder="Enter question..."></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="answer">Answer</label>
                    <textarea placeholder="Enter Answer..."></textarea>
                </div>

                <button className="btn">
                    <i className="fas fa-plus"></i> Add Card
                </button>
            </div>
        </>
    )
}
