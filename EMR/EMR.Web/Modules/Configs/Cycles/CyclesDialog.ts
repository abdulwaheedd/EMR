
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class CyclesDialog extends Serenity.EntityDialog<CyclesRow, any> {
        protected getFormKey() { return CyclesForm.formKey; }
        protected getIdProperty() { return CyclesRow.idProperty; }
        protected getLocalTextPrefix() { return CyclesRow.localTextPrefix; }
        protected getNameProperty() { return CyclesRow.nameProperty; }
        protected getService() { return CyclesService.baseUrl; }

        protected form = new CyclesForm(this.idPrefix);

    }
}