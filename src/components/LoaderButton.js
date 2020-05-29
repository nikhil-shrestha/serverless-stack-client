import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './LoaderButton.css';

export default function LoaderButton({
  isLoading,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <FontAwesomeIcon className="spinning" icon={faSpinner} />}
      {props.children}
    </Button>
  );
}
