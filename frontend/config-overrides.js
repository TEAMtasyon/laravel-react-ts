const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

function myOverrides(config) {
    const alias = config.resolve.alias || {};
    alias['@ant-design/icons/lib/dist$'] = path.resolve(
        __dirname,
        './src/icons.js'
    );
    config.resolve.alias = alias;

    return config;
}

module.exports = override(
    myOverrides,
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // '@primary-color': '#1DA57A',
        },
    })
);
