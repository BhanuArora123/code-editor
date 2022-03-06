
const ThemeSelector = props => {
    const themeHandler = event => {
        props.setTheme(event.target.value);
    }
    return (
        <select defaultValue="material" className="dropDown" onChange={themeHandler}>
            <option value="material">Material</option>
            <option value="monokai">Monokai</option>
            <option value="blackboard">BlackBoard</option>
            <option value="dracula">Dracula</option>
            <option value="cobalt">Cobalt</option>
            <option value="eclipse">Eclipse</option>
            <option value="lucario">Lucario</option>
            <option value="tomorrow-night-bright">Tomorrow Night Bright</option>
            <option value="tomorrow-night-eighties">Tomorrow Night Eighties</option>
            <option value="ambiance">Ambiance</option>
            <option value="3024-day">DayLight</option>
        </select>
    )
}
export default ThemeSelector;