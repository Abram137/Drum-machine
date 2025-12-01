const Drum = ({ audioClip, onPlayClip }) => {
    const handleClick = () => {
        onPlayClip(audioClip);
    };

    return (
        <button 
            className="drum-pad" 
            id={audioClip.keyTrigger}
            onClick={handleClick}
        >
            {audioClip.keyTrigger}
            <br />
            <small>{audioClip.description}</small>
        </button>
    );
};

export default Drum;