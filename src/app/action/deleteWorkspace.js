'use server'
import { deleteWorkspace } from "@/service/workspace.service";
export default function deleteDropdownComponent() {

    async function deleteWorkspaceservice(workspaceId) {
      console.log("data",workspaceId);
      const ws = {
        workspaceId: workspaceId.get('workspaceId')
      }
      console.log("workspaceId ", ws)
      const addws = await deleteWorkspace(ws);
    }
}