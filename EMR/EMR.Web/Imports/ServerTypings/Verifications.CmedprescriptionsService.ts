namespace EMR.Verifications {
    export namespace CmedprescriptionsService {
        export const baseUrl = 'Verifications/Cmedprescriptions';

        export declare function Create(request: Serenity.SaveRequest<CmedprescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CmedprescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CmedprescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CmedprescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Verifications/Cmedprescriptions/Create",
            Update = "Verifications/Cmedprescriptions/Update",
            Delete = "Verifications/Cmedprescriptions/Delete",
            Retrieve = "Verifications/Cmedprescriptions/Retrieve",
            List = "Verifications/Cmedprescriptions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CmedprescriptionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

