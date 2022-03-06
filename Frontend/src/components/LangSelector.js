
const LangSelector = props => {
    const { setLang } = props;
    const changeLang = (event) => {
        setLang(event.target.value);
    } 
    return (
        <select defaultValue="Javascript" className="dropDown" onChange={changeLang}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="text/x-csrc">Cpp</option>
            <option value="text/x-csrc">C</option>
            <option value="text/x-java">Java</option>
            <option value="php">PHP</option>
        </select>
    )
}
export default LangSelector;