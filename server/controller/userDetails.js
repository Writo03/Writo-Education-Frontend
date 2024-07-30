const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(request, response) {
    try {
        const token = request.cookies.token;
        console.log('Token:', token);

        const user = await getUserDetailsFromToken(token);
        console.log('User:', user);

        if (user.logout) {
            return response.status(401).json({
                message: "Session expired",
                logout: true,
            });
        }

        return response.status(200).json({
            message: "User details",
            data: user,
        });
    } catch (error) {
        console.error("Error:", error);
        return response.status(500).json({
            message: error.message || error,
            error: true,
        });
    }
}

module.exports = userDetails;
