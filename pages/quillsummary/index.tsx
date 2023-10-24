// pages/index.tsx

import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { Container } from '@mui/material';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


export default function Home() {
  const [content, setContent] = useState('');

  return (
    <Container>
      <h1>Rich Text Editor with Material UI</h1>
      <ReactQuill 
      value={content} 
      onChange={setContent} 
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }], // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // ... You can add more toolbar options as needed
        ],
      }}
      style={{ height: '10em' }} // 10 rows height, adjust as needed

      
      />
    </Container>
  );
}
