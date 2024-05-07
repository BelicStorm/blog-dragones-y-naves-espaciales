import React from "react";
import {
  BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, headingsPlugin, listsPlugin, 
  quotePlugin, tablePlugin, toolbarPlugin, diffSourcePlugin, DiffSourceToggleWrapper
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import "./simpleField.css";

export function MdEditor(props) {
  const { name, fieldContent, onChangeImage, onChange, onRichTextUpdate } = props
  const { value, child, config } = fieldContent
  const { label, options, type } = config.props
  const map = fieldContent?.config?.map
  return (
    <div className="field-container">
      <label>{label}</label>
      <MDXEditor
        markdown={value}
        className="shadow-shadow-db rounded-8 prose"
        plugins={[
          quotePlugin(),
          listsPlugin(),
          headingsPlugin(),
          tablePlugin(),
          diffSourcePlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <ListsToggle />
                <DiffSourceToggleWrapper />
              </>
            ),
          }),
        ]}
        onChange={(e)=>onRichTextUpdate({value:e, name:name},map)}
      />
    </div>
  );
}

export function Textarea(props) {
  const { name, fieldContent, onChange, value:propsValue } = props
  const { value, config } = fieldContent
  const { label, type } = config.props
  const map = fieldContent?.config?.map
  return (
    <div className="field-container">
      <label>{label}</label>
      <textarea
        //onSelect={(e) => console.log(e.target.selectionStart, e)}
        name={name}
        type={type}
        onChange={(e)=>onChange(e, map)}
        defaultValue={propsValue??value}
        placeholder="Placeholder ..."
      />
    </div>
  );
}

