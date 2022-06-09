import './Suggestion.css'

function Suggestion({ suggestion, texttoHighlight, onSelectionHandler, isActive }) { 
    let text = suggestion.replace(/(<span class="highlight">|<\/span>)/, '');
    const newText = text.replace(texttoHighlight, `<span class="highlight">${texttoHighlight}</span>`);

    let classN = 'suggestion'
    if(isActive)
        classN += ' active'

    return (
        <div className={classN} dangerouslySetInnerHTML={{__html: newText}} onClick={() => onSelectionHandler(suggestion)} data-testid="suggest" />
    )
}

export default Suggestion