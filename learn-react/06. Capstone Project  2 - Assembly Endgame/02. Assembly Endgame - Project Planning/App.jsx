import React from "react"

/**
 * Project planning:
 * 
 * Questions to ask yourself before writing any code:
 * 
 * - What are the main containers of elements I need
 *   in this app?
 *      + main container
 *      +--- game status (win/lose message)       
 *      +--- drawing (hangman as languages to be saved)
 *      +--- word display,
 *      +--- keyboard,
 *      +--- reset button
 *   NOTE: Each of these could be their own component!
 *
 *  
 * - What values will need to be saved in state vs.
 *   what values can be derived from the state?
 *      + state:
 *          - word to guess
 *          - letters guessed
 *          - number of wrong guesses
 *          - drawing (languages still to be saved)
 *      + derived:
 *          - current word display (with underscores)
 *          - game status (win/lose/ongoing)
 * 
 * 
 * - How will the user interact with the app? What
 *   events do I need to handle?
 *      + user clicks on a letter in the keyboard
 *      + user clicks on the reset button
 * 
 */

export default function Hangman() {
    return (
        <main>
            Game goes here
        </main>
    )
}
