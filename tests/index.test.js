const loader = require('../src');
const compass = require('./fixtures/compass.svg');
const malformatted = require('./fixtures/malformatted.svg');

const webpackLoader = (extras) => {
  const test = Object.assign({
    async: jest.fn(() => jest.fn()),
    cacheable: jest.fn(),
  }, extras);

  return test;
};

describe('SVG Path Loader', () => {
  it('executes cacheable when it\'s defined', () => {
    const mockFn = jest.fn();

    loader.call(webpackLoader({
      cacheable: mockFn,
    }), compass);

    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('correctly gets the SVG path', () => {
    const mockFn = jest.fn();

    loader.call(webpackLoader({
      async: jest.fn(() => mockFn),
    }), compass);

    expect(mockFn.mock.calls).toMatchSnapshot();
  });

  it('throws an error with a malformatted SVG', () => {
    const mockFn = jest.fn();

    loader.call(webpackLoader({
      async: jest.fn(() => mockFn),
    }), malformatted);

    expect(mockFn.mock.calls).toMatchSnapshot();
  });
});
