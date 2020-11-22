
namespace EMR.Regs {
    @Serenity.Decorators.registerClass()
    export class TblAdmissionsDischargeDialog extends Serenity.EntityDialog<TblAdmissionsDischargeRow, any> {
        protected getFormKey() { return TblAdmissionsDischargeForm.formKey; }
        protected getIdProperty() { return TblAdmissionsDischargeRow.idProperty; }
        protected getLocalTextPrefix() { return TblAdmissionsDischargeRow.localTextPrefix; }
        protected getNameProperty() { return TblAdmissionsDischargeRow.nameProperty; }
        protected getService() { return TblAdmissionsDischargeService.baseUrl; }

        protected form = new TblAdmissionsDischargeForm(this.idPrefix);

        private AdmissionNewBornGrid: AdmissionsNewBornManagementGrid;
        private AdmissionReferalsGrid: AdmissionsReferalGrid;
        private AdmissionsTestResultGrid: AdmissionsTestResultsGrid;
        private AdmisionOperations: AdmissionsOperationsGrid;


        private loadedState: string;

        constructor() {
            super();

            var getDate = new Date();
            var todyDate = getDate.getDate();
            this.form.DisDate.addValidationRule(this.uniqueName, e => {
                if (this.form.DisDate.valueAsDate < this.form.AdDate.valueAsDate) {
                    return Q.text('Db.Administration.Translation.DischargeLessThanAdmission');
                }
                if (this.form.DisDate.valueAsDate.getDate() > todyDate) {
                    return Q.text('Db.Administration.Translation.DischargeDateEqualToday');
                }
                var diff = Math.abs(this.form.DisDate.valueAsDate.getTime() - this.form.AdDate.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / (1000 * 3600 * 24));
                if (diffdays > 40) {
                    return Q.text('Db.Administration.Translation.DischargeDateInvalid');
                }
            });

            this.form.AdDate.addValidationRule(this.uniqueName, e => {
                if (this.form.AdDate.valueAsDate.getDate() > todyDate) {
                    return Q.text('Db.Administration.Translation.AdmissionDateBigger');
                }
                if (this.form.AdDate.valueAsDate.getDate() < todyDate - 41) {
                    return Q.text('Db.Administration.Translation.AdmissionDateSmaller');
                }
            });

            this.form.DisStatus.changeSelect2(e => {
                var statusdist = this.form.DisStatus.value;
                if (statusdist == null || statusdist == undefined) {
                    this.getStatusDeath({});
                        return;
                    }

                var id = Serenity.EditorUtils.getValue(this.form.DisStatus)

                EMR.Configs.TblOutcomesMotherService.Retrieve({
                        EntityId: id
                    }, response => {
                        this.getStatusDeath(response.Entity);
                    });

                });

            this.form.Wardid.changeSelect2(e => {
                var statusdist = this.form.Wardid.value;
                if (statusdist == null || statusdist == undefined) {
                    this.unhideAbortionTypeForm({});
                    return;
                }

                var id = Serenity.EditorUtils.getValue(this.form.Wardid)

                EMR.Configs.TblWardService.Retrieve({
                    EntityId: id
                }, response => {
                    this.unhideAbortionTypeForm(response.Entity);
                });

            });

            //convert date from to Shamsi and miladi
            this.form.AdDate.change(e => {
                this.form.AdDateH.value = convertToShamsi(this.form.AdDate.valueAsDate);
            });

            this.form.AdDateH.change(e => {
                this.form.AdDate.valueAsDate = convertToGregorian(this.form.AdDateH.value.toString());
            });


            this.form.DisDateH.change(e => {
                this.form.DisDate.valueAsDate = convertToGregorian(this.form.DisDateH.value.toString());
            });

            this.form.DisDate.change(e => {
                this.form.DisDateH.value = convertToShamsi(this.form.DisDate.valueAsDate);
            });

            this.AdmissionNewBornGrid = new AdmissionsNewBornManagementGrid(this.byId('TblNewBornManagementGrid'));
            this.AdmissionNewBornGrid.openDialogsAsPanel = false;

            this.AdmissionReferalsGrid = new AdmissionsReferalGrid(this.byId('TblReferralGrid'));
            this.AdmissionReferalsGrid.openDialogsAsPanel = false;

            this.AdmissionsTestResultGrid = new AdmissionsTestResultsGrid(this.byId('TblTestExaminationsGrid'));
            this.AdmissionsTestResultGrid.openDialogsAsPanel = false;

            this.AdmisionOperations = new AdmissionsOperationsGrid(this.byId('TblOperationsGrid'));
            this.AdmisionOperations.openDialogsAsPanel = false;
        }

        //show/hide field
        private getStatusDeath(details: EMR.Configs.TblOutcomesMotherRow) {
            if (details.OutcomeId == 4) {
                this.form.DisDiagCausDeath.getGridField().toggle(true);
            }
            else {
                this.form.DisDiagCausDeath.getGridField().toggle(false);
            }
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

        loadEntity(entity: TblAdmissionsDischargeRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblNewBornManagement', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblReferral', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblTestExaminations', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'TblOperations', this.isNewOrDeleted());

            this.AdmissionNewBornGrid.AdId = entity.AdId;
            this.AdmissionReferalsGrid.AdId = entity.AdId;
            this.AdmissionsTestResultGrid.AdId = entity.AdId;
            this.AdmisionOperations.AdId = entity.AdId;

            this.unhideAbortionType();
            this.unhideDeathResult();
        }

        private unhideAbortionType() {
            var wardid = Serenity.EditorUtils.getValue(this.form.Wardid);
            if (wardid == 1) {
                this.form.AbortionType.getGridField().toggle(true);
            }
            else {
                this.form.AbortionType.getGridField().toggle(false);
            }
        }

        private unhideDeathResult() {
            var deathid = Serenity.EditorUtils.getValue(this.form.DisStatus);
            if (deathid == 4) {
                this.form.DisDiagCausDeath.getGridField().toggle(true);
            }
            else {
                this.form.DisDiagCausDeath.getGridField().toggle(false);
            }
        }

        private unhideAbortionTypeForm(details: EMR.Configs.TblWardRow) {
            if (details.WardId == 1) {
                this.form.AbortionType.getGridField().toggle(true);
            }
            else {
                this.form.AbortionType.getGridField().toggle(false);
            }
        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;