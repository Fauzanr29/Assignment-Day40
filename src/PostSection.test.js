import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostSection from './components/PostSection/view';

test('user Action ', async () => {
    // const tesText = "cartridge";
    render(<PostSection/>);

    const input = screen.getByTestId("judul");
    const event = new Event('change')
    input.value = 'cartridge'
    input.dispatchEvent(event)
    
    // userEvent.type(input, tesText)
    // const textElement = await screen.findByText(tesText)
    
    expect(input).toHaveValue('cartridge')
    
    // expect(textElement).toBeInDocument();
})

