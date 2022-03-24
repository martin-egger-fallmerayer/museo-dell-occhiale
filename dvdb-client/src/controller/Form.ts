export const formCreateProject = async (formData:any) => {
    const res = await fetch("http://localhost:4000/projects", { method: 'post' })
    const createdProject = await res.json()
    console.log(createdProject)

}