import { useState } from "react";
import Suggestion from "../Suggestion/Suggestion";
import './AutoComplete.css'

function AutoComplete ({ datas }) { 
    const [text, setText] = useState('')
    const [noSuggestions, setNoSuggestions] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const [activeSuggestion, setActiveSuggestion] = useState(-1)

    const onChangeHandler = (text) => {
        let matches = []
        if(text.length > 0) {
            matches = datas.filter((suggestion) => {
                return suggestion.name.toLowerCase().includes(text.toLowerCase())
            })
        }
        setNoSuggestions(matches.length === 0 && text !== '')
        setSuggestions(matches)
        setActiveSuggestion(-1)
        setText(text)
    }

    const onSelectionHandler = (selection) => {
        setSuggestions([])
        setActiveSuggestion(-1)
        setText(selection)
    }

    const onBlurHandler = () => {
        setTimeout(() => {
            setSuggestions([])
            setActiveSuggestion(-1)
        },200)
    }

    const onKeyHandler = (e) => {
        switch(e.keyCode){
            case 13: //Enter
                    if (activeSuggestion === -1) {
                        return
                    }   
                    onSelectionHandler(suggestions[activeSuggestion].name)
                    break
            case 38: //Up
                    if (activeSuggestion <= 0) {
                        return
                    }                
                    setActiveSuggestion(activeSuggestion - 1);
                    break
            case 40: //Down
                    if (activeSuggestion - 1 === suggestions.length) {
                        return
                    }                
                    setActiveSuggestion(activeSuggestion + 1);
                    break
            default: break
        }
    }

    return (
        <>
           <input 
                type="text"
                onChange={e => onChangeHandler(e.target.value)}
                onBlur={onBlurHandler}
                onFocus={e => onChangeHandler(e.target.value)}
                onKeyDown={e => onKeyHandler(e)}
                value={text}
            />
            {noSuggestions ? (
                <div className="no-suggestions">
                    <em>No suggestions</em>
                </div>
                ) : 
                (suggestions && suggestions.map((suggestion, index) => 
                    <Suggestion 
                            key={index} 
                            suggestion={suggestion.name} 
                            texttoHighlight={text.toLowerCase()}
                            onSelectionHandler={onSelectionHandler}
                            isActive={index === activeSuggestion}
                    />
                ))
            }
            
        </>
    );
}
export default AutoComplete;