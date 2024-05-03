import React from "react";
import {
  BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, headingsPlugin, listsPlugin, 
  quotePlugin, tablePlugin, toolbarPlugin, diffSourcePlugin, DiffSourceToggleWrapper
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import "./simpleField.css";

export function MdEditor(props) {
  return (
    <div className="field-container">
      <label>{props.label}</label>
      <MDXEditor
        markdown={props.value}
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
        onChange={(e)=>props.onRichTextUpdate({value:e, name:props.name})}
      />
    </div>
  );
}

export function Textarea(props) {
  return (
    <div className="field-container">
      <label>{props.label}</label>
      <textarea
        //onSelect={(e) => console.log(e.target.selectionStart, e)}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder="Placeholder ..."
      />
    </div>
  );
}

