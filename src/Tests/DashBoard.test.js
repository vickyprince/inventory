import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DashBoard from '../Components/Dashboard';



describe('Dashboard component', () => {
    it('Test for rendering Dashboard', () => {
        render(<DashBoard />);
        const linkElement = screen.getAllByText(/ADMIN DASHBOARD/i)[0];
        expect(linkElement).toBeInTheDocument();
    })
});
