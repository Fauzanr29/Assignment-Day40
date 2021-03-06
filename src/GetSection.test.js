import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GetSection from './components/GetSection/view';

test('user-action ', async () => {
    render(<GetSection/>)

    const button = screen.getByTestId("btn1");
    userEvent.click(button);
    
    await waitFor(() =>{
        expect(screen.queryByTestId("hasil")).toBe(null)
    })
})
