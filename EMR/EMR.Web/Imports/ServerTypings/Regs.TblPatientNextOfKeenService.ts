namespace EMR.Regs {
    export namespace TblPatientNextOfKeenService {
        export const baseUrl = 'Regs/TblPatientNextOfKeen';

        export declare function Create(request: Serenity.SaveRequest<TblPatientNextOfKeenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblPatientNextOfKeenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPatientNextOfKeenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPatientNextOfKeenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Regs/TblPatientNextOfKeen/Create",
            Update = "Regs/TblPatientNextOfKeen/Update",
            Delete = "Regs/TblPatientNextOfKeen/Delete",
            Retrieve = "Regs/TblPatientNextOfKeen/Retrieve",
            List = "Regs/TblPatientNextOfKeen/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TblPatientNextOfKeenService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

