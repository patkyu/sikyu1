require.config({
    paths: {
        'geoJson': 'Data/geoJson',
        'theme': 'me',
        'data': './data',
        'map': '',
        'extension': 'ension'
    },
    packages: [
        {
            main: 'echarts',
            location: '',
            name: 'echarts'
        },
        {
            main: 'zrender',
            location: 'r/src',
            name: 'zrender'
        }
    ]
    // urlArgs: '_v_=' + +new Date()
});