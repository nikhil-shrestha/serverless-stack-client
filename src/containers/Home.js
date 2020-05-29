import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib';

import './Home.css';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get('notes', '/notes');
  }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroup.Item as="li">
            <b>{note.content.trim().split('\n')[0]}</b>
            <p>{'Created: ' + new Date(note.createdAt).toLocaleString()}</p>
          </ListGroup.Item>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroup.Item as="li">
            <h4>
              <b>{'\uFF0B'}</b> Create a new note
            </h4>
          </ListGroup.Item>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h1>Your Notes</h1>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
