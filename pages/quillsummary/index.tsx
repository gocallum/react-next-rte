import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { Container, AppBar, Toolbar, Typography, Paper } from '@mui/material';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
const initial_content = '20 years of experience with ICT Project Management in Public Sector <br /> <br /> <br />';

export default function Home() {
  const [content, setContent] = useState(initial_content);

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Callum's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container style={{ marginTop: '2rem', marginBottom: '1.75rem', padding:'1rem'}}>
        <h1>Summary</h1>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ],
            }}
            style={{ height: '10rem' }}
          />
      </Container>
    </div>
  );
}
