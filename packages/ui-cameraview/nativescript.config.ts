export default {
    ios: {
        SPMPackages: [
            process.env.DEBUG_NEXTLEVEL
        ? { name: 'NextLevel', libs: ['NextLevel'], path: process.env.NEXTLEVEL_SPM_LOCAL  }
        : {
            name: 'NextLevel',
                libs: ['NextLevel'],
                repositoryURL: 'https://github.com/akylas/NextLevel',
                version: '~0.16.10'
          }
        ]
    }
};
