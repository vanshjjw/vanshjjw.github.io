import React, { useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState("");

    const renderContent = () => {
        switch (activeTab) {
            case "taylor":
                return <p>This is the Taylor approximation of my life!</p>;
            case "interests":
                return <p>I love physics, movies, and entrepreneurship.</p>;
            case "fun":
                return <p>Fun Fact: I once organized an event for 200 students!</p>;
            case "quotes":
                return <p>"Carpe Diem. Seize the day!" - Dead Poets Society</p>;

        }
    };

    return (
        <div className="about-container">
            <h1 className="about-name"> Vansh Jhunjhunwala </h1>
            <div className="about-menu">
                <button
                    className={activeTab === "taylor" ? "active-tab" : ""}
                    onClick={() => setActiveTab("taylor")}
                >
                    Taylor Approximation
                </button>
                <button
                    className={activeTab === "interests" ? "active-tab" : ""}
                    onClick={() => setActiveTab("interests")}
                >
                    Interests
                </button>
                <button
                    className={activeTab === "fun" ? "active-tab" : ""}
                    onClick={() => setActiveTab("fun")}
                >
                    Fun Facts
                </button>
                <button
                    className={activeTab === "quotes" ? "active-tab" : ""}
                    onClick={() => setActiveTab("quotes")}
                >
                    Quotes
                </button>
            </div>
            <div className="about-content">{renderContent()}</div>
        </div>
    );
};

export default AboutMe;
