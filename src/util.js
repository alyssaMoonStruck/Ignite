//Media resize

export const smallImage = (imagePath, size) => {
    // Random failure happens here, for some reason imagePath is sometimes null for an unknown reason
    if (imagePath) {
        const image =
        imagePath.indexOf("/media/screenshots/") > -1
            ? imagePath.replace(
                "media/screenshots",
                `media/resize/${size}/-/screenshots`
            )
            : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
        return image;
    }
};
