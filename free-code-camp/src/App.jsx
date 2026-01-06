/**
 * I want you to create a separate app.jsx file. It will be a sibling to this
 * current index. jsx file. And you're going to create a new app component it's
 * just going to be called app. This is a really common way to set up a react
 * app where you'll have index.jsx (which is involved in setting up things like
 * the root and doing other more project configuration style things) and then
 * having a separate file like app.jsx (which will export a component called app
 * or something along those lines whose job it is to aggregate all of the other
 * parts of your app that you want it acts as sort of a parent component to
 * everything that will get displayed on your page).
 */

import "./App.css";
import HeaderContent from "./components/ui/HeaderContent";
import MainContent from "./components/ui/MainContent";
import FooterContent from "./components/ui/FooterContent";

export default function App() {
    return (
        <>
            <HeaderContent />
            <MainContent />
            <FooterContent />
        </>
    );
}
