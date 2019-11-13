import React from 'react';
import Document from './markdown/Document';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Navigation />
      <Document />
    </>
  );
}
