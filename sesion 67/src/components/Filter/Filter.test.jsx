import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Filter from './Filter';


describe('Testing <Filter />', () => {

  it('should render error if †here is not list', () => {
    render(<Filter />);
    const errorMsn = screen.getByText('error', { exact: false });
    // const errorMsn = screen.getByText('Error al renderizar la lista');
    // const errorMsn = screen.getByText(/error/gi);
    //Existe en doc
    expect(errorMsn).toBeInTheDocument();
    // no esté oculto
    expect(errorMsn).toBeVisible();
  });

  it('should render error if the list is empty', () => {
    render(<Filter list={[]} />);
    const errorMsn = screen.getByText('error', { exact: false });
    //Existe en doc
    expect(errorMsn).toBeInTheDocument();
    // no esté oculto
    expect(errorMsn).toBeVisible();
  });

  it('has heading', () => {
    const list = ["hugo", "paco", "luis"];
    render(<Filter list={list} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Lista de Elementos');

  });
  
  it('show the list from then given one', () => {
    const list = ["hugo", "paco", "luis"];
    render(<Filter list={list} />);

    const patos = list.map((element) => screen.getByText(element));

    patos.forEach(item => {
      expect(item).toBeVisible();
    });
  });

  it('show the list without the filtered term', () => {
    const list = ["hugo", "paco", "luis"];
    render(<Filter list={list} itemToFilter="luis" />);

    const luis = screen.queryByText('luis', {exact: false});

    expect(luis).not.toBeInTheDocument();

  });

});