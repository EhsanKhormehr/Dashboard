import { Toggle } from "@/components/ui/toggle";
import { Editor, useEditorState } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Image,
  Italic,
  List,
  ListOrdered,
  Pilcrow,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import React from "react";

const BlogToolbar = ({ editor }: { editor: Editor | null }) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) {
        return {
          isBold: false,
          isItalic: false,
          isStrike: false,
          isHighlight: false,
          isAlignLeft: false,
          isAlignCenter: false,
          isAlignRight: false,
          isAlignJustify: false,
          isParagraph: false,
          isHeading1: false,
          isHeading2: false,
          isHeading3: false,
          isBulletList: false,
          isOrderedList: false,
          canUndo: false,
          canRedo: false,
        };
      }

      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,

        isAlignLeft: ctx.editor.isActive({ textAlign: "left" }) ?? false,
        isAlignCenter: ctx.editor.isActive({ textAlign: "center" }) ?? false,
        isAlignRight: ctx.editor.isActive({ textAlign: "right" }) ?? false,
        isAlignJustify: ctx.editor.isActive({ textAlign: "justify" }) ?? false,

        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,

        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,

        canUndo: ctx.editor.can().chain().focus().undo().run(),
        canRedo: ctx.editor.can().chain().focus().redo().run(),
      };
    },
  });
  if (!editor) {
    return false;
  }
  const options = [
    {
      format: "paragraph",
      icon: <Pilcrow className="size-4" />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      pressed: editorState?.isParagraph,
    },
    {
      format: "heading1",
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editorState?.isHeading1,
    },
    {
      format: "heading2",
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editorState?.isHeading2,
    },
    {
      format: "heading3",
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editorState?.isHeading3,
    },
    {
      format: "bold",
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editorState?.isBold,
    },
    {
      format: "italic",
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editorState?.isItalic,
    },
    {
      format: "strike",
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editorState?.isStrike,
    },
    {
      format: "highlight",
      icon: <Highlighter className="size-4" />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editorState?.isHighlight,
    },
    {
      format: "alignleft",
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editorState?.isAlignLeft,
    },
    {
      format: "aligncenter",
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editorState?.isAlignCenter,
    },
    {
      format: "alignright",
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editorState?.isAlignRight,
    },
    {
      format: "alignjustify",
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      pressed: editorState?.isAlignJustify,
    },
    {
      format: "image",
      icon: <Image className="size-4" />,
      onClick: () => {
        const url = window.prompt("Enter image url");
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
    },
    {
      format: "orderedlist",
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editorState?.isOrderedList,
    },
    {
      format: "bulletlist",
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editorState?.isBulletList,
    },
    {
      format: "undo",
      icon: <Undo className="size-4" />,
      onClick: () => editor.chain().focus().undo().run(),
    },
    {
      format: "redo",
      icon: <Redo className="size-4" />,
      onClick: () => editor.chain().focus().redo().run(),
    },
  ];
  return (
    <div className="mb-1 p-2 border rounded-md ">
      <div className="flex gap-2">
        {options.map((option) => (
          <Toggle
            key={option.format}
            type="button"
            onClick={option.onClick}
            pressed={option.pressed}
            className={
              option.pressed
                ? "!bg-primary border-none text-white hover:text-white"
                : ""
            }
          >
            {option.icon}
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default BlogToolbar;
