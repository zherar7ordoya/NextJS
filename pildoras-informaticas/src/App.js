import "./App.css";
import { useRef } from "react";
import video from "./assets/video.mp4";

function App() {

    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return <section>
        <video ref={videoRef} width="750" height="500">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    </section>

}


export default App;
