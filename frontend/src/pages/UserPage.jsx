import React from "react";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import RecipeUploadForm from "../components/RecipeUpload";

const UserPage = ({user}) => {
    return (
        <>
            <BackgroundPattern>
                <RecipeUploadForm user={user} />
            </BackgroundPattern>
        </>
    );
}

export default UserPage;
