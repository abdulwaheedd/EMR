namespace EMR.Verifications {
    export namespace CbloodtransfusionsService {
        export const baseUrl = 'Verifications/Cbloodtransfusions';

        export declare function Create(request: Serenity.SaveRequest<CbloodtransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CbloodtransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CbloodtransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CbloodtransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Verifications/Cbloodtransfusions/Create",
            Update = "Verifications/Cbloodtransfusions/Update",
            Delete = "Verifications/Cbloodtransfusions/Delete",
            Retrieve = "Verifications/Cbloodtransfusions/Retrieve",
            List = "Verifications/Cbloodtransfusions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CbloodtransfusionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

