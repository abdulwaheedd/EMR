namespace EMR.OPD {
    export namespace OpdBloodTransfusionsService {
        export const baseUrl = 'OPD/OpdBloodTransfusions';

        export declare function Create(request: Serenity.SaveRequest<OpdBloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OpdBloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OpdBloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OpdBloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "OPD/OpdBloodTransfusions/Create",
            Update = "OPD/OpdBloodTransfusions/Update",
            Delete = "OPD/OpdBloodTransfusions/Delete",
            Retrieve = "OPD/OpdBloodTransfusions/Retrieve",
            List = "OPD/OpdBloodTransfusions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OpdBloodTransfusionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

