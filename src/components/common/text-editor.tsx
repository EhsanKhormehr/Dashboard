"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Highlight } from "@tiptap/extension-highlight";
import { TextAlign } from "@tiptap/extension-text-align";
import { Image } from "@tiptap/extension-image";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import TextEditorToolbar from "./text-editor-toolbar";

type BlogTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const TextEditor = ({ value, onChange }: BlogTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
      BulletList,
      ListItem,
      OrderedList,
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "rounded-md min-h-[300px] p-4 dark:bg-input/30 border",
      },
    },
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className=" rounded-md">
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
