import React from "react";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import RecipeUploadForm from "../components/RecipeUpload";

const UserPage = ({user, setContents}) => {
    return (
        <>
            <BackgroundPattern>
                <RecipeUploadForm user={user} setContents={setContents}/>
            </BackgroundPattern>
        </>
    );
}

export default UserPage;
