export default class RepositorySchema {
    static schema = {
        name: 'Repository',
        primarykey: 'id',
        properties: {
            id: { type: 'int', indexed: true},
            name: 'string',
            fullName: 'string',
            description: 'string',
            stars: 'int',
            forks: 'int',

        },
    };
}