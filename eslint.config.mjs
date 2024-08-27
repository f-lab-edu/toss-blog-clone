import js from "@eslint/js"

export default [
  js.configs.recommended,
  {
    rules: {
      'max-params': ['error', 3],
      'no-console': "error",
    }
  }
]
