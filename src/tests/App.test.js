import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from '../api/fetchShow';
import App from '../App';

jest.mock("./api/fetchShow");

test("App is able to get & render show data", async () => {
  const mockData = {
      image: { original: "original"},
      name: "name",
      summary: "<p>summary</p>",
      _embedded: {
        episodes: [{
            id: "123",
            image: { medium: "medium_image" },
            name: "name",
            season: 2,
            number: 1,
            summary: "<p>Summary</p>",
            runtime: 20
        }]
      }
  };
  mockFetchShow.mockResolvedValueOnce(mockData);

  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/fetching data.../i)).toHaveLength(1);

  await waitFor(() => {
    expect(queryAllByText(/summary/i)).toHaveLength(1);
    });

});
