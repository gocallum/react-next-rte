import React from 'react';
import AppBar from '@mui/material/AppBar';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { MantineProvider } from '@mantine/core';
import { Container, Box, ThemeProvider, createTheme, Paper, Typography, Toolbar } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
    },
    // ... other theme configurations
});

const content = 'Summary <br /> <br /> <br />';

function Demo() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Superscript,
            SubScript,
        ],
        content,
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Summary App
                    </Typography>
                </Toolbar>
            </AppBar>

            <MantineProvider>
                <Container>
                    <Box my={4}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6">Summary</Typography>

                            <Box border={1} borderColor="grey.300" borderRadius={2} p={2}> {/* Border styling here */}
                                <RichTextEditor editor={editor}>
                                    <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Bold />
                                            <RichTextEditor.Italic />
                                            <RichTextEditor.Underline />
                                        </RichTextEditor.ControlsGroup>
                                    </RichTextEditor.Toolbar>

                                    <RichTextEditor.Content />
                                </RichTextEditor>
                            </Box>                        </Paper>
                    </Box>
                </Container>
            </MantineProvider>
        </ThemeProvider>
    );
}

export default Demo;
