import { authOption } from "@/app/api/auth/[...nextauth]/route";
import headerToken from "@/app/api/headerToken";
import { getAllworkspace, getServerSession } from "next-auth";

//get all worspace service
export const getWorkspaceService = async () => {
    const header = await headerToken();
    console.log("session : ", header);
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces', {
        headers: header,
    });
    const data = await res.json();
    return data;

}

// add workspace
export const addWorkspaceservice = async (req) => {
    const header = await headerToken();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: header,
    })
    const data = await res.json();
    return data;

}

//Delete workspace
export const deleteWorkspace = async (workspaceId) =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId}`,{
        method: 'DELETE',
        headers: header
    });
    const data = await res.json();
    return data;
}


