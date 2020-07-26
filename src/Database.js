class Database {
    constructor() {
        console.log(`> Starting Database System`)
    }

    loginCheck(request) {
        if (request.type == 'loginCheck') {
            console.log('> Check if user exists on database...')
        }
    }
} export default Database