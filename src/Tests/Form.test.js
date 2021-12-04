import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Components/Form';

// FOR TESTING IM USING JEST ALONG WITH REACT_TESTING_LIBRARY
describe('Form component', () => {
    it('Test for rendering form', () => {
        render(<Form />);
        userEvent.type(document.getElementById('prodName'), 'Bass Guitar')
        userEvent.type(document.getElementById('prodDesc'), '4 String- Ibanez')
        userEvent.type(document.getElementById('prodPrice'), '200')
        userEvent.click(document.getElementById('addProdItem'));
        userEvent.click(document.getElementById('delete1Keyboard'));
        userEvent.click(document.getElementById('confirmNo'));
        userEvent.click(document.getElementById('delete1Keyboard'));
        userEvent.click(document.getElementById('confirmYes'));
        userEvent.click(document.getElementById('0Guitar'));
        userEvent.click(document.getElementById('cancelForm'));
        userEvent.click(document.getElementById('0Guitar'));
        userEvent.click(document.getElementById('updateForm'));

    });
    it('Test for checking validation function', () => {
        render(<Form />);
        userEvent.type(document.getElementById('prodName'), '')
        userEvent.type(document.getElementById('prodDesc'), '4 String- Ibanez')
        userEvent.type(document.getElementById('prodPrice'), '200')
        userEvent.click(document.getElementById('addProdItem'));
        userEvent.click(document.getElementById('0Guitar'));
    })
});
