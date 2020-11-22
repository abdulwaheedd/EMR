namespace EMR.Regs {
    export namespace TblNewBornManagementService {
        export const baseUrl = 'Regs/TblNewBornManagement';

        export declare function Create(request: Serenity.SaveRequest<TblNewBornManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblNewBornManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblNewBornManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblNewBornManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Regs/TblNewBornManagement/Create",
            Update = "Regs/TblNewBornManagement/Update",
            Delete = "Regs/TblNewBornManagement/Delete",
            Retrieve = "Regs/TblNewBornManagement/Retrieve",
            List = "Regs/TblNewBornManagement/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblNewBornManagementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

