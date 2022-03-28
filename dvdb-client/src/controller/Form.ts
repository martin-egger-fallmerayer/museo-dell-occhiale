export const formCreateProject = async (formData: any) => {
  const res = await fetch("http://linode.steggmar.tech:4000/projects", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(formData),
  });
  const createdProject = await res.json();
  console.log(createdProject);
};
