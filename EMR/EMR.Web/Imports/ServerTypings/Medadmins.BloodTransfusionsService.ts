namespace EMR.Medadmins {
    export namespace BloodTransfusionsService {
        export const baseUrl = 'Medadmins/BloodTransfusions';

        export declare function Create(request: Serenity.SaveRequest<BloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BloodTransfusionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BloodTransfusionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Medadmins/BloodTransfusions/Create",
            Update = "Medadmins/BloodTransfusions/Update",
            Delete = "Medadmins/BloodTransfusions/Delete",
            Retrieve = "Medadmins/BloodTransfusions/Retrieve",
            List = "Medadmins/BloodTransfusions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>BloodTransfusionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

