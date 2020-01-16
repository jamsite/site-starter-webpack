module.exports = {
  scripts: {
    build: {
      webpack: [
        'npx webpack'
      ]
    },
    'start-dev': {
      webpack: [
        'npx webpack -w'
      ]
    }
  }
}
