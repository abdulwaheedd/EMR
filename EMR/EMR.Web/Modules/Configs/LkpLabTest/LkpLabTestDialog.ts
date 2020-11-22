
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpLabTestDialog extends Serenity.EntityDialog<LkpLabTestRow, any> {
        protected getFormKey() { return LkpLabTestForm.formKey; }
        protected getIdProperty() { return LkpLabTestRow.idProperty; }
        protected getLocalTextPrefix() { return LkpLabTestRow.localTextPrefix; }
        protected getNameProperty() { return LkpLabTestRow.nameProperty; }
        protected getService() { return LkpLabTestService.baseUrl; }

        protected form = new LkpLabTestForm(this.idPrefix);

    }
}