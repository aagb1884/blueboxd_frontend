import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import React from 'react';

const RenderReview = ({ content }) => {
    const editor = useEditor({
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure({ types: [ListItem.name] }),
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            StarterKit.configure({
                bulletList: { keepMarks: true, keepAttributes: false },
                orderedList: { keepMarks: true, keepAttributes: false },
            }),
        ],
        content: content,
        editable: false, // Make the editor read-only
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="render-review">
            <EditorContent editor={editor} />
        </div>
    );
};

export default RenderReview;
