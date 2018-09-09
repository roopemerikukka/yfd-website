module.exports = {
  webpack: function( cfg ) {
    const originalEntry = cfg.entry
    cfg.entry = async() => {
      const entries = await originalEntry()

      if ( entries['main.js'] && !entries['main.js'].includes( './common/polyfills.js' )) {
        entries['main.js'].unshift( './common/polyfills.js' )
      }

      return entries
    }

    return cfg
  }
}