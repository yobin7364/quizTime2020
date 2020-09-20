import React, { useState, useEffect } from 'react';
import { AddCard } from "./AddCard";

export const Cards = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    const flipCard = () => {
        { showAnswer ? setShowAnswer(false) : setShowAnswer(true) }
    }

    return (
        <>
            <button className="clear btn">
                <i className="fas fa-trash"></i> Clear Cards
            </button>

            <AddCard />

            <div className="cards" onClick={flipCard}>
                <div className={showAnswer ? "card active show-answer" : "card active"}>
                    <div className="inner-card">
                        <div className="inner-card-front">
                            <p>
                                What is PHP?
                            </p>
                        </div>
                        <div className="inner-card-back">
                            <p>
                                A programming language
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="inner-card">
                        <div className="inner-card-front">
                            <p>
                                What is PHP?
                            </p>
                        </div>
                        <div className="inner-card-back">
                            <p>
                                A programming language
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navigation">
                <button className="nav-button">
                    <i className="fas fa-arrow-left"></i>
                </button>

                <p id="current"></p>

                <button className="nav-button">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>

        </>
    )
}
