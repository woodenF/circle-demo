module.exports = {
  publicPath: ProcessingInstruction.env.NODE_ENV ===
  'production' ? '/circle-demo' : '/'
}