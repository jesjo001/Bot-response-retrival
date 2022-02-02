export default {
    port: 8080,
    host: 'remoteDb',
    dbUri: 'mongodb://127.0.0.1:27017/sklEvent',
    remoteDb: 'mongodb+srv://admin123:admin1234@cluster0.vb0ui.mongodb.net/triggertiger?retryWrites=true&w=majority',
    saltWorkFactor: 10,
    refreshTokenTtl: "15m",
    accessTokenTtl: "1y",
}