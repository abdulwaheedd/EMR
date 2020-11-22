namespace EMR.VitalSigns {
    export namespace VVitalSignsService {
        export const baseUrl = 'VitalSigns/VVitalSigns';

        export declare function Create(request: Serenity.SaveRequest<VVitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VVitalSignsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VVitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VVitalSignsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "VitalSigns/VVitalSigns/Create",
            Update = "VitalSigns/VVitalSigns/Update",
            Delete = "VitalSigns/VVitalSigns/Delete",
            Retrieve = "VitalSigns/VVitalSigns/Retrieve",
            List = "VitalSigns/VVitalSigns/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VVitalSignsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

