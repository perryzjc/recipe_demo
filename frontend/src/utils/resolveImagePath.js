export function resolveImagePath(relativePath) {
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || ''; // for Vite
    // const baseUrl = process.env.REACT_APP_BASE_URL || ''; // for Create React App
    /*console.log("I am in resolveImagePath")
    console.log(`baseUrl: ${baseUrl}`)
    console.log(`relativePath: ${relativePath}`)*/

    // Check if the relativePath is a URL or a base64 data URL
    const isUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|data:image\/)[a-zA-Z0-9-.]+(\:[0-9]+)?.*/.test(relativePath);

    // If it's a URL or a base64 data URL, return it as is. Otherwise, concatenate with the base URL.
    return isUrl ? relativePath : `${baseUrl}${relativePath}`;
}
