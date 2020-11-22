namespace EMR.Regs {
    export namespace TblPatientsService {
        export const baseUrl = 'Regs/TblPatients';

        export declare function Create(request: Serenity.SaveRequest<TblPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblPatientsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblPatientsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateHealthFacilities(request: Serenity.ServiceRequest, onSuccess?: (response: System.Int32) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Regs/TblPatients/Create",
            Update = "Regs/TblPatients/Update",
            Delete = "Regs/TblPatients/Delete",
            Retrieve = "Regs/TblPatients/Retrieve",
            List = "Regs/TblPatients/List",
            UpdateHealthFacilities = "Regs/TblPatients/UpdateHealthFacilities"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'UpdateHealthFacilities'
        ].forEach(x => {
            (<any>TblPatientsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

