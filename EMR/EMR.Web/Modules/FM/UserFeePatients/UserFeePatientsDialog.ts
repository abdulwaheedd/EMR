
namespace EMR.FM {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class UserFeePatientsDialog extends Serenity.EntityDialog<UserFeePatientsRow, any> {
        protected getFormKey() { return UserFeePatientsForm.formKey; }
        protected getIdProperty() { return UserFeePatientsRow.idProperty; }
        protected getLocalTextPrefix() { return UserFeePatientsRow.localTextPrefix; }
        protected getNameProperty() { return UserFeePatientsRow.nameProperty; }
        protected getService() { return UserFeePatientsService.baseUrl; }

        protected form = new UserFeePatientsForm(this.idPrefix);

        private feePaymentGrid: TblFeePaymentTabGrid;


        private loadedState: string;

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Add Fee',
                cssClass: 'multiple-add-button',
                hint: "Add Service Fee",
                onClick: () => {
                    window.location.href = Q.resolveUrl('~/FM/ServiceFee/Add?id=' + this.entity.Mrid);
                }
            });

            return buttons;
        }

        constructor() {
            super();

            this.form.FacilityId.changeSelect2(e => {
                var facilityId = this.form.FacilityId.value;
                if (facilityId == null || facilityId == undefined) {
                    this.setMRN({});
                    return;
                }

                var id = Serenity.EditorUtils.getValue(this.form.FacilityId)

                EMR.Regs.HfNoOfPatientsService.Retrieve({
                    EntityId: id
                }, response => {
                    this.setMRN(response.Entity);
                });

            });


            this.feePaymentGrid = new TblFeePaymentTabGrid(this.byId('TblFeePaymentGrid'));
            this.feePaymentGrid.openDialogsAsPanel = false;


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

        loadEntity(entity: UserFeePatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblFeePayment', this.isNewOrDeleted());

            this.feePaymentGrid.Mrid = entity.Mrid;
        }

        private setMRN(details: EMR.Regs.HfNoOfPatientsRow) {
            var facilityPart;
            var facilityIdPart;

            var MNRPart;
            var MNRIdPart;

            facilityPart = 1000000;
            MNRPart = 1000000000;
            facilityIdPart = (details.FacilityId);

            MNRIdPart = (MNRPart + details.NoOfPatients + 1);

            this.form.Mrn.value = details.FacilityId + '-' + MNRIdPart.toString().substring(1);

        }
    }
}