module.exports = ({env}) => ({
    "mux-video-uploader": {
        enabled: true,
        config: {
            accessTokenId: env('MUX_ACCESS_TOKEN_ID'),
            secretKey: env('MUX_ACCESS_TOKEN_SECRET')
        }
    }
});