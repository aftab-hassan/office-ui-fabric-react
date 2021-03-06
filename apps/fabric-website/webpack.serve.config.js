let path = require('path');
let resources = require('../../scripts/webpack/webpack-resources');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const devServerConfig = {
  inline: true,
  port: 4321
};

const outputConfig = {
  filename: 'fabric-sitev5.js'
};

module.exports = resources.createServeConfig({
  entry: './src/root.tsx',

  output: outputConfig,

  devServer: devServerConfig,

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['typescript']
    })
  ],

  resolve: {
    alias: {
      '@uifabric/fabric-website/src': path.join(__dirname, 'src'),
      '@uifabric/fabric-website/lib': path.join(__dirname, 'lib'),
      '@uifabric/example-app-base$': path.resolve(__dirname, '../../packages/example-app-base/src'),
      'office-ui-fabric-react$': path.join(__dirname, '../../packages/office-ui-fabric-react/lib'),
      'office-ui-fabric-react/src': path.join(__dirname, '../../packages/office-ui-fabric-react/src'),
      'office-ui-fabric-react/lib': path.join(__dirname, '../../packages/office-ui-fabric-react/lib'),
      '@uifabric/example-app-base$': path.join(__dirname, '../../packages/example-app-base/src'),
      'Props.ts.js': 'Props',
      'Example.tsx.js': 'Example'
    }
  }
});
