import { useEffect } from "react"
import { ProfileServices } from "../../services/profile/profile"

export const getAstrologerProfile = (astrologerId) => {
    const [profile, setProfile] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        ProfileServices.getProfile(astrologerId)
            .then((res) => {
             console.log(res)
                setProfile(res.data)
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
        setIsLoading
    }
}
