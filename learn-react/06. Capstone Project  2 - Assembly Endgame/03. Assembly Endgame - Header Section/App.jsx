import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import LanguageList from "./components/LanguageList";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    return (
        <main>
            <Header />
            <Status />
            <LanguageList />
            <WordDisplay />
            <Keyboard />
        </main>
    );
}
