import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import Navbar from "scenes/navbar"
import UserWidget from "scenes/widgets/UserWidget"
import MyPostWidget from "scenes/widgets/MyPostWidget"

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
    const { _id, picturePath } = useSelector((state) => state.user)

    return (
        <Box>
            <Navbar></Navbar>

            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
                </Box>

                <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
                    <MyPostWidget picturePath={picturePath}></MyPostWidget>
                </Box>

                {isNonMobileScreens && (
                    <Box flexBasis="26%">

                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default HomePage