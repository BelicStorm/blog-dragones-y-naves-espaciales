import Select from "./selectField";
import SimpleField from "./simpleField";
import {Textarea, MdEditor} from "./textArea";
import ImageField from "./Image";
import CheckBox from "./checkBox"
import ColorPicker from "./colorPicker"

const FIELDS = {
    Select: Select,
    KeyText: SimpleField,
    RichText: Textarea,
    RichText2: MdEditor,
    Image: ImageField,
    CheckBox: CheckBox,
    ColorPicker:ColorPicker
  };

export default FIELDS