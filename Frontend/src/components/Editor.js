import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/php/php";
import "codemirror";
import "codemirror/theme/material.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/edit/closebrackets";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/lucario.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/tomorrow-night-eighties.css";
import "codemirror/theme/tomorrow-night-bright.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/3024-day.css";
import classes from "./Editor.module.css";
import { Controlled } from "react-codemirror2";

const Editor = props => {
    const {
        value ,
        onChange,
        mode,
        theme
    } = props;
    const handleChange = (editor,data,value) => {
        onChange(value);
    } 
    const editorLoadHandler = (editor) => {
        editor.setSize("100%","100%");
        editor.refresh();
    }
    return(
        <Controlled
        className={`code-mirror-wrapper ${classes["editor"]}`}
        onBeforeChange={handleChange}
        value={value}
        editorDidMount={editorLoadHandler}
        options={{
            lineWrapping:true,
            mode:mode,
            lineNumbers:true,
            indentWithTabs:true,
            autocorrect:true,
            scrollbarStyle:"native",
            theme:theme,
            lint:true,
            extraKeys : {
                "Ctrl-Space":"autocomplete"
            },
            autoCloseBrackets:true
            // autohint : true
        }}
        onKeyPress={(editor,event) => {
            console.log(event);
            editor.showHint({
                completeSingle:false
            });
            return true;
        }}
        />
    )
}
export default Editor;