namespace EMR.Configs {
    export namespace LkpPhysExamGroupService {
        export const baseUrl = 'Configs/LkpPhysExamGroup';

        export declare function Create(request: Serenity.SaveRequest<LkpPhysExamGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LkpPhysExamGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LkpPhysExamGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LkpPhysExamGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Configs/LkpPhysExamGroup/Create",
            Update = "Configs/LkpPhysExamGroup/Update",
            Delete = "Configs/LkpPhysExamGroup/Delete",
            Retrieve = "Configs/LkpPhysExamGroup/Retrieve",
            List = "Configs/LkpPhysExamGroup/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>LkpPhysExamGroupService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

