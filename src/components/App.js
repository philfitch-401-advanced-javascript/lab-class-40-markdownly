import React from 'react';
import Document from './markdown/Document';
import Navigation from './navigation/Navigation';
import styles from './App.css';

export default function App() {
  return (
    <section className={styles.App}>
      <header>
        <h1>Markdown Editor</h1>
      </header>
      
      <Navigation />
      <Document />
    </section>
  );
}
