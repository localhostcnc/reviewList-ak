module.exports = {
    entry: __dirname + '/src/components/index.jsx',
    module: {
      rules: [
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env', 'es2015', 'airbnb']
            }
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };




