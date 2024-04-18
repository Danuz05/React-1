import React, { useState, useContext } from "react";

const userSpanish = React.createContext();
const userSpanishTogle = React.createContext();

export function useUserSpanish() {
    return useContext(userSpanish);
}

export function useUserSpanishTogle() {
    return useContext(userSpanishTogle)
}

export function Userprovider(props) {
    const [Spanish, setSpanish] = useState(true);

    const handleSpanish = () => {
        setSpanish(!Spanish);
    }

    return (
        <userSpanish.Provider value={Spanish}>
            <userSpanishTogle.Provider value={handleSpanish}>
                {props.children}
            </userSpanishTogle.Provider>
        </userSpanish.Provider>
    );
}
