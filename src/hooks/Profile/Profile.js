import { useEffect } from "react"
import { ProfileServices } from "../../services/profile/profile"

export const getAstroloProfile = (astrologerId) => {
    const [profile, setProfile] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        ProfileServices.getProfile(astrologerId)
            .then((res) => {
                setProfile(res.groups)
            })
            .catch((err) => {
                console.log(err, "error")
            })
            .finally(() => {
                setIsLoading(true)
            })
    }, [])

    return {
        profile,
        isLoading,
        handleChat,
        setIsLoading
    }
}
