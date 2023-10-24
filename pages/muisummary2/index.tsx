import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Paper, Typography } from '@mui/material'; // Added Typography for better text rendering
import dynamic from 'next/dynamic';

// Dynamically import MUIRichTextEditor with SSR turned off
const MUIRichTextEditor = dynamic(
  () => import('mui-rte').then((mod) => mod.default),
  { ssr: false }
);

const defaultTheme = createTheme();

const theme = {
  ...defaultTheme,
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 10,
        width: "100%",
      },
      editor: {
        borderTop: "0.5px solid gray",
        borderLeft: "0.5px solid gray",
        borderRight: "0.5px solid gray",
        borderBottom: "0.5px solid gray",
        height: 200,
      }
    }
  }
}

const MuiSummary2: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Box p={1}>
          <Typography variant="h6">Portfolio Summary</Typography> {/* Using Typography for better text rendering */}
        </Box>
      </AppBar>
      <CssBaseline />
      <Box display="flex" justifyContent="center" mt={4}> {/* Added marginTop for spacing */}
        <Paper elevation={3} style={{ padding: '32px', width: '70%' }}>
          <Typography variant="h5" gutterBottom>Summary</Typography> {/* Using Typography with gutterBottom for spacing */}
          <MUIRichTextEditor 
            label="Summary..."
            onSave={(data: any) => {
              console.log(data);
            }}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default MuiSummary2;
