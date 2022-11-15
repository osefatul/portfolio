import axios from "axios"
import {dataFail, dataPending, projectsSuccess} from "../features/githubSlice"

export const fetchGithubData = ()=> async (dispatch) => {

    dispatch(dataPending())

    try{

        const res = await axios("https://api.github.com/users/osefatul/repos")
        
        // console.log(res.data)
        const createGithubRepo= async ()=> {
        
        const newData = await Promise.all(
            res.data.map(async repository => {
            const readmeContent = await axios(`https://raw.githubusercontent.com/osefatul/${repository.name}/${repository.default_branch}/README.md`)
            const splitHtmlUrl = await repository.html_url.split('/') //"https://github.com/osefatul/amazon-ecommerce-system"
            const splitDash = await splitHtmlUrl[splitHtmlUrl.length - 1].split("-").join(" ") //"amazon-ecommerce-system" => "amazon ecommerce system"

            return {title: splitDash, readmeContent: readmeContent.data}
            })
        )

        await dispatch(projectsSuccess([...newData]))
        
        }

        createGithubRepo()

    }catch(error){
        console.log(error)
        dispatch(dataFail())
    }

    
}
