import chatFetcher from "../../helper/chatFetcher"

const getProfile = (astrologerId) => {
    return chatFetcher.put(`/api/v1/astrologer/progile/${astrologerId}`).then((res) => {
        return res.data
    })
}

export const ProfileServices = {
    getProfile
}