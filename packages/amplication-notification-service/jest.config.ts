/* eslint-disable */
export default {
  displayName: "amplication-notification-service",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/packages/amplication-notification-service",
  coverageThreshold: {
    global: {
      branches: 70,
      lines: 80,
    },
  },
};
