import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// FOR TESTING IM USING JEST ALONG WITH REACT_TESTING_LIBRARY
describe('App component', () => {
    it('Test for rendering App', () => {
        render(<App />);
    })
});
