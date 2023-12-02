function getContents() {
    return fetch("http://localhost:3000/api/recipes", {
        method: "get"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            console.log("test123123123123123123123")
            console.log(jsonData)
            // Transform the data to match the structure in contents.jsx
            const transformedData = jsonData.map(item => {
                return {
                    id: item._id,
                    category: item.category,
                    title: item.title,
                    // Other transformations...
                    imagePath: item.imagePath,
                    author: item.email,
                    instructions: item.instructions || [],
                    // Add other fields as necessary
                };
            });
            console.log("I am transformed data")
            console.log(transformedData);
            return transformedData;
        })
        .catch(error => {
            console.error("Could not fetch or transform the data:", error);
            return []; // Return an empty array in case of an error
        });
}

// Usage of getContents, handling the returned Promise:
getContents()
    .then(contents => console.log(contents))
    .catch(error => console.error(error));

export default getContents;
