import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import GetSection from './components/GetSection/view';
import PostSection from './components/PostSection/view';

test('queryDom case ',async () => {
    render(<App/>);
    const linkElement = screen.queryByText("React");
    expect(linkElement).toBe(null);
})

// test('user Action - Button ', () => {
    
//     render(<GetSection />)

//     const btnElement = screen.getByTestId("btn1")
//     expect(btnElement).toBeInDocument();

//     userEvent.click(btnElement);
    

// })