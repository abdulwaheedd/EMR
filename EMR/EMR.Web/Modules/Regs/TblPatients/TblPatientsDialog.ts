
namespace EMR.Regs {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.panel()
    export class TblPatientsDialog extends Serenity.EntityDialog<TblPatientsRow, any> {
        protected getFormKey() { return TblPatientsForm.formKey; }
        protected getIdProperty() { return TblPatientsRow.idProperty; }
        protected getLocalTextPrefix() { return TblPatientsRow.localTextPrefix; }
        protected getNameProperty() { return TblPatientsRow.nameProperty; }
        protected getService() { return TblPatientsService.baseUrl; }

        protected form = new TblPatientsForm(this.idPrefix);

        private PatDetailsGrid: TblPatientsPatDetailsGrid;
        private PatAdmissionDischarge: TblPatientsAdmissionsDischargeGrid;
        private PatientsNextOfKeen: TblPatientsNextOfKeenGrid;


        private loadedState: string;

        constructor() {
            super();

            this.form.FacilityId.changeSelect2(e => {
                var facilityId = this.form.FacilityId.value;
                if (facilityId == null || facilityId == undefined) {
                    this.setMRN({});
                    return;
                }

                var id = Serenity.EditorUtils.getValue(this.form.FacilityId)

                EMR.Locations.FacilityInfoService.Retrieve({
                    EntityId: id
                }, response => {
                    this.setMRN(response.Entity);
                });

            });
            this.PatDetailsGrid = new TblPatientsPatDetailsGrid(this.byId('TblPatDetailsGrid'));
            this.PatDetailsGrid.openDialogsAsPanel = false;

            this.PatAdmissionDischarge = new TblPatientsAdmissionsDischargeGrid(this.byId('TblAdmissionsDischargeGrid'));

            this.PatAdmissionDischarge.openDialogsAsPanel = false;

            this.PatientsNextOfKeen = new TblPatientsNextOfKeenGrid(this.byId('TblPatientNextOfKeenGrid'));
            this.PatientsNextOfKeen.openDialogsAsPanel = false;



            //this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);


        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: TblPatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblPatDetails', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblPatientNextOfKeen', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblAdmissionsDischarge', this.isNewOrDeleted());

            this.PatDetailsGrid.Mrid = entity.Mrid;
            this.PatientsNextOfKeen.Mrid = entity.Mrid;
            this.PatAdmissionDischarge.Mrid = entity.Mrid;
        }
        private setMRN(details: EMR.Locations.FacilityInfoRow) {
            var facilityPart;
            var facilityIdPart;

            var MNRPart;
            var MNRIdPart;

            facilityPart = 1000000;
            MNRPart = 100000000;
            facilityIdPart = (facilityPart + details.FacilityId);

            MNRIdPart = (MNRPart + details.NoOfPatients+1);

            this.form.MRN.value = details.ProvinAbbrv + '-' + facilityIdPart.toString().substring(1) + '-';

            //TblPatientsService.UpdateHealthFacilities(
            //    {
            //        FacilityId: details.FacilityId
            //    },
            //    response => { });
        }
        protected onSaveSuccess(response: Serenity.SaveResponse): void {

            Q.serviceRequest(TblPatientsService.baseUrl + '/UpdateHealthFacilities');
            }
        
        //onSaveSuccess(response) {
        //    super.onSaveSuccess(response);

        //    Q.reloadLookup('Regs.TblPatients');
        //}
    }
}