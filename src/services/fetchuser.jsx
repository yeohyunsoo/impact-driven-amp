// file under s3 bucket : https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json

export const fetchUser = async () => {
    const response = await fetch('https://impact-driven-amp-s3.s3.ap-northeast-2.amazonaws.com/sample.json')
    const data = await response.json()
    return data
}