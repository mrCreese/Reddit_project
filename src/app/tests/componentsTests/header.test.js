import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../../../components/header/Header';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom');

const mokedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mokedNavigate = jest.spyOn(routerHooks, 'useNavigate');
const mokedSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Header component', () => {
    test('renders Header component', () => {
        render(<Header />);

        mokedDispatch.mockResolvedValue(jest.fn());
        mokedNavigate.mockResolvedValue(jest.fn());

        const btn = screen.getByRole('button');
        const input = screen.getByRole('textbox');
        const imgGit = screen.getByAltText('logo Git');
        const imgReddit = screen.getByAltText('logo reddit');

        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(imgGit).toBeInTheDocument();
        expect(imgReddit).toBeInTheDocument();
    });
    test('not render <h2> search', () => {
        mokedSelector.mockReturnValue('');

        render(<Header />);

        expect(screen.queryByRole('heading')).toBeNull();
    });
    test('visual render <h2> search', () => {
        mokedSelector.mockReturnValue('react');

        render(<Header />);

        expect(screen.getByText(/react/i)).toBeInTheDocument();
    });
    test('should onClick  action', () => {
        const onClick = jest.fn();

        render(<input type='submit' onClick={onClick} />);

        const btn = screen.getByRole('button');

        fireEvent.click(btn);
        expect(onClick).toHaveBeenCalled();
    });
});
