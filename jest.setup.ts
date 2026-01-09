import "@testing-library/jest-dom";
import "jest-axe/extend-expect";

jest.mock("uuid", () => ({
  v4: () => "test-uuid-" + Math.random().toString(36).substring(2, 11),
}));
