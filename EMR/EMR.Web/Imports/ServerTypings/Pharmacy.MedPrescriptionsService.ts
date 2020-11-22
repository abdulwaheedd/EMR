namespace EMR.Pharmacy {
    export namespace MedPrescriptionsService {
        export const baseUrl = 'Pharmacy/MedPrescriptions';

        export declare function Create(request: Serenity.SaveRequest<MedPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MedPrescriptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedPrescriptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Pharmacy/MedPrescriptions/Create",
            Update = "Pharmacy/MedPrescriptions/Update",
            Delete = "Pharmacy/MedPrescriptions/Delete",
            Retrieve = "Pharmacy/MedPrescriptions/Retrieve",
            List = "Pharmacy/MedPrescriptions/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MedPrescriptionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

