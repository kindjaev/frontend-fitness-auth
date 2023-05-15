
export const fetchData = async (url, options) => {
    const res = await fetch(url, options)
    let data
    try {
        if(!res.ok){
            throw Error("Data not found")
        }
        data = await res.json()
    } catch (error) {
        console.log(error.message)
        if (error.message === "Unexpected end of JSON input"){
            window.location.replace("/")
        }
    }
    return data
}

