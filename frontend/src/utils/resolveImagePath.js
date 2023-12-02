export function resolveImagePath(relativePath) {
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || ''; // for Vite
    // const baseUrl = process.env.REACT_APP_BASE_URL || ''; // for Create React App
    console.log("I am in resolveImagePath")
    console.log(`baseUrl: ${baseUrl}`)
    console.log(`relativePath: ${relativePath}`)
    // test comment
    return `${baseUrl}${relativePath}`;
}
