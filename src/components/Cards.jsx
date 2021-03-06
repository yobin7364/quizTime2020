import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AddCard } from "./AddCard";

export const Cards = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const { cardDatas, deleteQuestion } = useContext(GlobalContext);
    const [canEditQuestion, setCanEditQuestion] = useState(false);

    const flipCard = () => {
        { showAnswer ? setShowAnswer(false) : setShowAnswer(true) }
    }

    const nextPage = () => {
        if ((pageNumber + 1) < cardDatas.length) {
            setShowAnswer(false);
            setPageNumber(pageNumber + 1);
        }
    }

    const prevPage = async () => {
        if (pageNumber > 0) {
            setShowAnswer(false);
            setPageNumber(pageNumber - 1);
        }
    }

    const handleDeleteQuestion = () => {
        deleteQuestion(cardDatas[pageNumber].id);
        if ((cardDatas.length === (pageNumber + 1)) && (pageNumber !== 0)) {
            setPageNumber(pageNumber - 1);
        }

    }

    const handleEditQuestion = () => {
        setCanEditQuestion(true);
    }

    const resetEditQuestion = () => {
        setCanEditQuestion(false)
    }

    return (

        <>
            <AddCard
                canEditQuestion={canEditQuestion}
                resetEditQuestion={resetEditQuestion}
                presentQuestion={canEditQuestion ? cardDatas[pageNumber] : null}
            />
            {
                cardDatas.length > 0 ?
                    <>
                        <button className="clear btn" onClick={handleDeleteQuestion}>
                            <i className="fas fa-trash"></i> Clear Cards
                    </button>
                        <button className="edit btn" onClick={handleEditQuestion}>
                            <i className="fas fa-edit"></i>Edit Card
                    </button>

                        <div className="cards" onClick={flipCard}>
                            <div className={showAnswer ? "card active show-answer" : "card active"}>
                                <div className="inner-card">
                                    <div className="inner-card-front">
                                        <p>
                                            {cardDatas[pageNumber]?.question}
                                        </p>
                                    </div>
                                    <div className="inner-card-back">
                                        <p>
                                            {cardDatas[pageNumber]?.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="navigation">
                            <button className="nav-button" onClick={prevPage} style={{ visibility: pageNumber === 0 ? 'hidden' : 'visible' }}>
                                <i className="fas fa-arrow-left"></i>
                            </button>

                            <p>{pageNumber + 1} / {cardDatas.length}</p>

                            <button className="nav-button" onClick={nextPage} style={{ visibility: (pageNumber + 1) === cardDatas.length ? 'hidden' : 'visible' }}>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </>
                    :
                    null
            }

        </>
    )
}
