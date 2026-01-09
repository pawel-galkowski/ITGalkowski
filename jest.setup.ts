import '@testing-library/jest-dom'
// Mock uuid to avoid ES module issues in tests
jest.mock('uuid', () => ({
  v4: () => 'test-uuid-' + Math.random().toString(36).substr(2, 9),
}))