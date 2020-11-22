
namespace EMR.OPD {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class LabTestDialog extends Serenity.EntityDialog<LabTestRow, any> {
        protected getFormKey() { return LabTestForm.formKey; }
        protected getIdProperty() { return LabTestRow.idProperty; }
        protected getLocalTextPrefix() { return LabTestRow.localTextPrefix; }
        protected getNameProperty() { return LabTestRow.nameProperty; }
        protected getService() { return LabTestService.baseUrl; }

        protected form = new LabTestForm(this.idPrefix);

        constructor() {
            super();

            this.form.LabTestId.changeSelect2(e => {
                var labTestId = this.form.LabTestId.value;
                if (labTestId == null || labTestId == undefined) {
                    this.setLabID({});
                    return;
                }

                var id = Serenity.EditorUtils.getValue(this.form.LabTestId)

                EMR.Configs.LkpLabTestService.Retrieve({
                    EntityId: id
                }, response => {
                    this.setLabID(response.Entity);
                });

            });
        }

        private setLabID(details: EMR.Configs.LkpLabTestRow) {

            this.form.NormalRange.value = details.NormalRange;
            this.form.Unit.value = details.Unit;
        }
    }
}